import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Tu Billetera assistant", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Bille \| Asistente de Tu Billetera<\/title>/i);
  assert.match(html, /Entiende tu dinero\. Sin complicaciones\./);
  assert.match(html, /Escribe tu pregunta/);
  assert.match(html, /¿Cómo registro un gasto\?/);
  assert.match(html, /aria-label="Chat con Bille"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("ships a grounded knowledge base and Supabase schema", async () => {
  const [knowledge, schema, packageJson] = await Promise.all([
    readFile(new URL("../lib/knowledge.ts", import.meta.url), "utf8"),
    readFile(new URL("../supabase/schema.sql", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  const itemCount = (knowledge.match(/category: "(faq|pricing|hours|policy)"/g) ?? [])
    .length;

  assert.ok(itemCount >= 10);
  assert.match(knowledge, /prefiero no inventarte una respuesta/);
  assert.match(schema, /business_knowledge/);
  assert.match(schema, /enable row level security/);
  assert.match(packageJson, /@supabase\/supabase-js/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  fallbackKnowledge,
  findGroundedAnswer,
  type KnowledgeItem,
} from "../lib/knowledge";
import { loadKnowledge } from "../lib/supabase";

type Message = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const suggestions = [
  "¿Cómo registro un gasto?",
  "¿Puedo usar Telegram?",
  "¿Cuánto cuesta?",
  "¿Cómo funcionan las proyecciones?",
];

function WalletMark() {
  return (
    <span className="wallet-mark" aria-hidden="true">
      <span className="wallet-card" />
      <span className="wallet-dot" />
    </span>
  );
}

export default function Home() {
  const [knowledge, setKnowledge] =
    useState<KnowledgeItem[]>(fallbackKnowledge);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "¡Hola! Soy Bille, el asistente de Tu Billetera 👋 Puedo ayudarte a registrar movimientos, entender tus resúmenes, usar Telegram y mucho más. ¿Qué quieres saber?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKnowledge().then(setKnowledge);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const ask = (question: string) => {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || isTyping) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", content: cleanQuestion },
    ]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const answer = findGroundedAnswer(cleanQuestion, knowledge);
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, role: "assistant", content: answer },
      ]);
      setIsTyping(false);
    }, 520);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <main className="app-shell">
      <aside className="brand-panel">
        <div className="brand">
          <WalletMark />
          <div>
            <p>Tu Billetera</p>
            <span>FINANZAS SIN VUELTAS</span>
          </div>
        </div>

        <div className="brand-copy">
          <span className="eyebrow">ASISTENTE INTELIGENTE</span>
          <h1>Entiende tu dinero. Sin complicaciones.</h1>
          <p>
            Pregunta lo que necesites sobre Tu Billetera y recibe una respuesta
            clara, útil y basada en información real del producto.
          </p>
        </div>

        <div className="trust-row">
          <span className="status-dot" />
          <div>
            <strong>En línea</strong>
            <small>Disponible las 24 horas</small>
          </div>
        </div>
      </aside>

      <section className="chat-panel" aria-label="Chat con Bille">
        <header className="chat-header">
          <div className="assistant-avatar">
            <span>✦</span>
          </div>
          <div>
            <h2>Bille</h2>
            <p>
              <span className="status-dot" /> Asistente de Tu Billetera
            </p>
          </div>
          <span className="demo-pill">DEMO</span>
        </header>

        <div className="chat-body" aria-live="polite">
          <div className="day-label">
            <span>HOY</span>
          </div>

          {messages.map((message) => (
            <div
              className={`message-row ${message.role}`}
              key={message.id}
            >
              {message.role === "assistant" && (
                <div className="message-avatar" aria-hidden="true">
                  ✦
                </div>
              )}
              <div className="message-wrap">
                <div className="message-bubble">{message.content}</div>
                <span className="message-time">
                  {message.role === "assistant" ? "Bille" : "Tú"} · ahora
                </span>
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="suggestions" aria-label="Preguntas sugeridas">
              {suggestions.map((suggestion) => (
                <button
                  type="button"
                  onClick={() => ask(suggestion)}
                  key={suggestion}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {isTyping && (
            <div className="message-row assistant">
              <div className="message-avatar" aria-hidden="true">
                ✦
              </div>
              <div className="typing" aria-label="Bille está escribiendo">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <footer className="composer-area">
          <form onSubmit={handleSubmit} className="composer">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu pregunta..."
              aria-label="Tu pregunta"
              maxLength={280}
            />
            <button
              type="submit"
              aria-label="Enviar pregunta"
              disabled={!input.trim() || isTyping}
            >
              <span>↑</span>
            </button>
          </form>
          <p>
            Bille responde con la base oficial del producto y te avisa cuando
            no tiene un dato.
          </p>
        </footer>
      </section>
    </main>
  );
}

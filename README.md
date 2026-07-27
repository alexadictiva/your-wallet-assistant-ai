# Bille — Asistente de Tu Billetera

Asistente conversacional en español neutro que responde preguntas sobre el uso
de **Tu Billetera**, un proyecto de control de gastos personales.

## Sitio público

[Abrir el asistente](https://tu-billetera-asistente.alexadictiva.chatgpt.site)

## Características

- Chat responsive y mobile first.
- Base de conocimiento con 18 temas concretos del producto.
- Respuestas sobre precios, horarios, políticas y funciones.
- Reconoce cuando una consulta no está cubierta y evita inventar respuestas.
- Integración preparada para cargar la base desde Supabase.
- Diseño inspirado en la interfaz oscura de Tu Billetera.

## Tecnologías

- React
- TypeScript
- Tailwind CSS
- Supabase
- vinext

## Desarrollo local

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

La aplicación funciona con la base incluida en el repositorio. Para utilizar
Supabase, copia `.env.example` como `.env` y configura:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Después ejecuta [`supabase/schema.sql`](supabase/schema.sql) en tu proyecto de
Supabase.

## Validación

```bash
npm run build
node --test tests/rendered-html.test.mjs
```

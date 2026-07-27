export type KnowledgeItem = {
  id: string;
  title: string;
  answer: string;
  keywords: string[];
  category: "faq" | "pricing" | "hours" | "policy";
};

export const fallbackKnowledge: KnowledgeItem[] = [
  {
    id: "price",
    title: "Precio",
    answer:
      "La versión de demostración de Tu Billetera es gratuita. Hoy no hay planes pagos ni cobros dentro del proyecto.",
    keywords: ["precio", "cuesta", "costo", "gratis", "plan", "pago", "suscripcion"],
    category: "pricing",
  },
  {
    id: "availability",
    title: "Disponibilidad",
    answer:
      "La aplicación y este asistente están disponibles las 24 horas. El soporte humano de la demo atiende de lunes a viernes, de 9:00 a 18:00 (hora de Argentina).",
    keywords: ["horario", "hora", "atienden", "disponible", "soporte", "abierto"],
    category: "hours",
  },
  {
    id: "create-transaction",
    title: "Registrar movimientos",
    answer:
      "Para registrar un movimiento, entrá en Transacciones, elegí ingreso, gasto o inversión y completá monto, categoría, fecha y descripción. También podés indicar medio de pago y si el gasto es reembolsable.",
    keywords: ["registrar", "crear", "cargar", "gasto", "ingreso", "inversion", "movimiento", "transaccion"],
    category: "faq",
  },
  {
    id: "transaction-types",
    title: "Tipos de movimientos",
    answer:
      "Tu Billetera admite tres tipos de movimientos: ingresos, gastos e inversiones. Cada uno usa categorías compatibles con su tipo.",
    keywords: ["tipos", "movimientos", "ingresos", "gastos", "inversiones", "transacciones"],
    category: "faq",
  },
  {
    id: "categories",
    title: "Categorías",
    answer:
      "Podés crear, editar y eliminar categorías propias, asignarles un color y separarlas por tipo. No se permite repetir el mismo nombre y tipo; si renombrás una categoría, también se actualizan tus movimientos relacionados.",
    keywords: ["categoria", "categorias", "color", "duplicada", "renombrar", "editar"],
    category: "faq",
  },
  {
    id: "summaries",
    title: "Resúmenes",
    answer:
      "Hay resúmenes semanales y mensuales con gráficos de dona, distribución por categoría y medio de pago, historial del período y navegación a períodos anteriores.",
    keywords: ["resumen", "semanal", "mensual", "grafico", "dona", "historial", "periodo"],
    category: "faq",
  },
  {
    id: "dashboard",
    title: "Panel principal",
    answer:
      "El panel muestra liquidez disponible, balance operativo, ingresos, gastos personales, consumo financiado, deudas, reembolsos, inversiones y una vista general de tarjetas, préstamos y proyección.",
    keywords: ["panel", "dashboard", "liquidez", "balance", "metricas", "muestra", "resumen"],
    category: "faq",
  },
  {
    id: "projections",
    title: "Proyecciones",
    answer:
      "En Proyección podés planear ingresos y gastos futuros, marcarlos como pagados o cobrados y convertirlos en transacciones reales. Los movimientos recurrentes del mes anterior se pueden duplicar al mes elegido.",
    keywords: ["proyeccion", "futuro", "planear", "recurrente", "pendiente", "convertir", "proyectado"],
    category: "faq",
  },
  {
    id: "accounts",
    title: "Cuentas de dinero",
    answer:
      "Podés crear cuentas para separar banco, efectivo y billeteras. Los ingresos aumentan el saldo de la cuenta elegida; los gastos y las inversiones lo reducen.",
    keywords: ["cuenta", "cuentas", "banco", "efectivo", "billetera", "saldo"],
    category: "faq",
  },
  {
    id: "cards-loans",
    title: "Tarjetas y préstamos",
    answer:
      "El módulo Tarjetas y Préstamos administra tarjetas de crédito, préstamos por pagar y préstamos por cobrar. Permite generar cuotas automáticamente, editar vencimientos y registrar pagos o cobros vinculados.",
    keywords: ["tarjeta", "tarjetas", "prestamo", "deuda", "cuota", "vencimiento", "obligacion"],
    category: "faq",
  },
  {
    id: "telegram",
    title: "Telegram",
    answer:
      "Sí. Desde Configuración generás un código para vincular tu cuenta con el bot de Telegram. Después podés registrar uno o varios movimientos por chat, con fecha, medio de pago, reembolso y cuotas opcionales.",
    keywords: ["telegram", "bot", "chat", "vincular", "codigo", "masiva"],
    category: "faq",
  },
  {
    id: "voice",
    title: "Asistente de voz",
    answer:
      "El asistente de voz del navegador puede responder cuánto te queda para gastar, tu balance operativo, cuánto gastaste o ingresaste, cuánto tenés financiado y cuánto te deben. Depende de que tu navegador admita reconocimiento de voz.",
    keywords: ["voz", "hablar", "microfono", "reconocimiento", "balance"],
    category: "faq",
  },
  {
    id: "reimbursements",
    title: "Reembolsos",
    answer:
      "Al cargar un gasto podés marcarlo como reembolsable o por cobrar y seguir su estado. El panel distingue los reembolsos pendientes de los ya cobrados.",
    keywords: ["reembolso", "reembolsable", "cobrar", "devuelven", "pendiente"],
    category: "faq",
  },
  {
    id: "security",
    title: "Privacidad y acceso",
    answer:
      "Cada usuario accede a sus propios movimientos mediante una cuenta protegida. La app permite cambiar nombre, email y contraseña, cerrar sesión y recuperar el acceso por email.",
    keywords: ["privacidad", "seguridad", "datos", "cuenta", "contrasena", "acceso", "email"],
    category: "policy",
  },
  {
    id: "delete-policy",
    title: "Eliminación de datos",
    answer:
      "Podés eliminar transacciones, categorías, proyecciones y cuentas desde sus módulos. Antes de borrar cuentas u obligaciones vinculadas, la app avisa que también se eliminarán sus movimientos relacionados.",
    keywords: ["eliminar", "borrar", "datos", "transaccion", "cuenta", "politica"],
    category: "policy",
  },
  {
    id: "linked-editing",
    title: "Movimientos vinculados",
    answer:
      "Los movimientos generados por pagos, cobros, deudas o cuotas vinculadas no se editan directamente desde Transacciones; se administran desde Tarjetas y Préstamos para mantener todo sincronizado.",
    keywords: ["editar", "vinculado", "sincronizado", "pago", "cobro", "deuda", "cuota"],
    category: "policy",
  },
  {
    id: "sync",
    title: "Sincronización",
    answer:
      "La aplicación actualiza los datos cada 10 segundos y también cuando recuperás el foco de la ventana. Así aparecen rápidamente los movimientos creados desde Telegram.",
    keywords: ["sincroniza", "actualiza", "telegram", "segundos", "refresca", "aparece"],
    category: "faq",
  },
  {
    id: "themes",
    title: "Tema visual",
    answer:
      "Podés alternar entre tema claro y oscuro desde Configuración. La preferencia queda guardada en el navegador.",
    keywords: ["tema", "oscuro", "claro", "apariencia", "configuracion"],
    category: "faq",
  },
];

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const stopWords = new Set([
  "que",
  "como",
  "para",
  "una",
  "uno",
  "unos",
  "las",
  "los",
  "del",
  "con",
  "por",
  "puedo",
  "tiene",
  "hay",
  "esto",
  "esta",
  "sobre",
  "quiero",
  "saber",
]);

export function findGroundedAnswer(
  question: string,
  knowledge: KnowledgeItem[],
) {
  const normalizedQuestion = normalize(question);
  const words = normalizedQuestion
    .split(" ")
    .filter((word) => word.length > 2 && !stopWords.has(word));

  const ranked = knowledge
    .map((item) => {
      const keywords = item.keywords.map(normalize);
      const searchable = normalize(`${item.title} ${item.answer}`);
      const keywordScore = keywords.reduce(
        (score, keyword) =>
          score +
          (normalizedQuestion.includes(keyword)
            ? keyword.includes(" ") ? 5 : 3
            : 0),
        0,
      );
      const wordScore = words.reduce(
        (score, word) => score + (searchable.includes(word) ? 1 : 0),
        0,
      );
      return { item, score: keywordScore + wordScore };
    })
    .sort((a, b) => b.score - a.score);

  if (!ranked[0] || ranked[0].score < 3) {
    return "No tengo información confirmada sobre eso y prefiero no inventarte una respuesta. Puedo ayudarte con el uso de Tu Billetera, precios de la demo, horarios, privacidad, transacciones, categorías, resúmenes, proyecciones, tarjetas, préstamos, Telegram o el asistente de voz.";
  }

  return `${ranked[0].item.answer} ¿Querés que te cuente algo más sobre esta función?`;
}

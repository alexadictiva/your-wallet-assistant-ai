create table if not exists public.business_knowledge (
  id text primary key,
  title text not null,
  answer text not null,
  keywords text[] not null default '{}',
  category text not null check (category in ('faq', 'pricing', 'hours', 'policy')),
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.business_knowledge enable row level security;

create policy "Public knowledge is readable"
on public.business_knowledge
for select
to anon
using (active = true);

insert into public.business_knowledge
  (id, title, answer, keywords, category, sort_order)
values
  ('price', 'Precio', 'La versión de demostración de Tu Billetera es gratuita. Hoy no hay planes pagos ni cobros dentro del proyecto.', array['precio','cuesta','costo','gratis','plan'], 'pricing', 1),
  ('availability', 'Disponibilidad', 'La aplicación y este asistente están disponibles las 24 horas. El soporte humano de la demo atiende de lunes a viernes, de 9:00 a 18:00 (hora de Argentina).', array['horario','hora','atienden','disponible','soporte'], 'hours', 2),
  ('create-transaction', 'Registrar movimientos', 'Para registrar un movimiento, entra en Transacciones, elige ingreso, gasto o inversión y completa el monto, la categoría, la fecha y la descripción. También puedes indicar el medio de pago y si el gasto es reembolsable.', array['registrar','crear','cargar','gasto','ingreso','inversion','movimiento'], 'faq', 3),
  ('categories', 'Categorías', 'Puedes crear, editar y eliminar categorías propias, asignarles un color y separarlas por tipo. No se permite repetir el mismo nombre y tipo.', array['categoria','categorias','color','duplicada','renombrar'], 'faq', 4),
  ('summaries', 'Resúmenes', 'Hay resúmenes semanales y mensuales con gráficos de dona, distribución por categoría y medio de pago, historial del período y navegación a períodos anteriores.', array['resumen','semanal','mensual','grafico','historial'], 'faq', 5),
  ('projections', 'Proyecciones', 'En Proyección puedes planear ingresos y gastos futuros, marcarlos como pagados o cobrados y convertirlos en transacciones reales.', array['proyeccion','futuro','recurrente','pendiente','convertir'], 'faq', 6),
  ('cards-loans', 'Tarjetas y préstamos', 'El módulo Tarjetas y Préstamos administra tarjetas de crédito, préstamos por pagar y préstamos por cobrar, con cuotas, vencimientos, pagos y cobros vinculados.', array['tarjeta','prestamo','deuda','cuota','vencimiento'], 'faq', 7),
  ('telegram', 'Telegram', 'Desde Configuración puedes generar un código para vincular tu cuenta con el bot de Telegram. Después puedes registrar uno o varios movimientos por chat.', array['telegram','bot','chat','vincular','codigo'], 'faq', 8),
  ('voice', 'Asistente de voz', 'El asistente de voz responde consultas sobre gastos, ingresos, balance, financiación y dinero por cobrar. Depende del soporte del navegador.', array['voz','hablar','microfono','reconocimiento'], 'faq', 9),
  ('security', 'Privacidad y acceso', 'Cada usuario accede a sus propios movimientos mediante una cuenta protegida. La app permite cambiar datos, cerrar sesión y recuperar el acceso por email.', array['privacidad','seguridad','datos','contrasena','acceso'], 'policy', 10)
on conflict (id) do update set
  title = excluded.title,
  answer = excluded.answer,
  keywords = excluded.keywords,
  category = excluded.category,
  sort_order = excluded.sort_order;

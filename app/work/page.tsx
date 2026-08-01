const stack = [
  "Next.js",
  "TypeScript",
  "MongoDB",
  "Redis (Upstash)",
  "WhatsApp Business API",
  "Node.js",
];

const metrics = [
  { value: "~20k", label: "líneas de código" },
  { value: "36", label: "endpoints REST" },
  { value: "74", label: "tests" },
  { value: "OWASP Top 10", label: "cobertura completa" },
];

const decisions = [
  {
    title: "Redis para locks temporales de reserva",
    body: "Al notar degradación de performance bajo carga concurrente, introduje Redis (Upstash) con TTL de 15 minutos para locks de reserva. Esto evita doble reserva cuando dos usuarios intentan agendar el mismo turno simultáneamente — una decisión que tomé antes de que fuera un problema en producción.",
  },
  {
    title: "Bot de WhatsApp con patrón consult-before-respond",
    body: "Integré un bot de WhatsApp Business API con sistema de agendamiento virtual. El patrón consult-before-respond verifica disponibilidad antes de confirmar, evitando respuestas incorrectas y mejorando la experiencia del cliente.",
  },
  {
    title: "Auditoría de seguridad: XSS real encontrado y corregido",
    body: "Encontré y arreglé una vulnerabilidad XSS real en mi propia auditoría: el campo de nombre del formulario de contacto se renderizaba sin sanitizar en el panel admin. Resuelto con textContent en vez de innerHTML + validación regex server-side.",
  },
];

export default function Work() {
  return (
    <div className="container">
      <section className="section" style={{ paddingTop: "var(--space-12)" }}>
        <p className="eyebrow">Caso de estudio</p>
        <h1 className="page-title">El Novato Automotriz</h1>
        <p className="page-intro">
          Sistema de producción completo para un taller mecánico y estación de
          servicio real.
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">Problema / Contexto</h2>
        <div className="prose">
          <p>
            Un taller mecánico y estación de servicio necesitaba un sistema digital
            para gestionar turnos, clientes y operaciones diarias. Todo funcionaba en
            papel o WhatsApp informal, lo que generaba citas perdidas, doble reserva
            y cero visibilidad para el dueño.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Decisiones Técnicas Clave</h2>
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          {decisions.map((decision) => (
            <article key={decision.title} className="card">
              <h3 className="card__title">{decision.title}</h3>
              <p className="card__body">{decision.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Resultado</h2>
        <div className="card">
          <div className="feature-card__metric">
            5x
            <span className="feature-card__metric-label">
              turnos semanales en producción
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Métricas</h2>
        <div className="stat-grid">
          {metrics.map((metric) => (
            <div key={metric.label} className="stat">
              <div className="stat__value">{metric.value}</div>
              <div className="stat__label">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Stack</h2>
        <div className="chip-row">
          {stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Screenshots</h2>
        <div className="placeholder">
          <div className="placeholder__label">Pendiente</div>
          Agregar screenshots del dashboard, bot de WhatsApp y sistema de reservas.
        </div>
      </section>
    </div>
  );
}

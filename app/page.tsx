import Link from "next/link";
import Button from "@/components/Button";

const stats = [
  { value: "5x", label: "turnos semanales en producción" },
  { value: "36", label: "endpoints REST" },
  { value: "74", label: "tests automatizados" },
  { value: "OWASP Top 10", label: "seguridad cubierta" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Ian Vazquez · Full Stack / Backend Developer</p>
          <h1 className="hero__title">
            Escribo código para <span className="hero__title-accent">producción</span>,
            no para el demo.
          </h1>
          <p className="hero__subtitle">
            Sistemas full-stack que aguantan tráfico real: seguridad (OWASP Top 10),
            tests y decisiones técnicas defensivas. 2 años construyendo software que
            funciona en producción, no solo en desarrollo.
          </p>
          <div className="hero__actions">
            <Button href="https://cal.com/ian-vazquez-qawvgf" variant="primary">
              Book a Meeting
            </Button>
            <Button href="/work">Ver el caso de estudio</Button>
            <Button
              href="https://www.linkedin.com/in/ian-vazquez-full-stack-developer/"
              variant="ghost"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card feature-card">
            <div>
              <p className="eyebrow">Proyecto destacado</p>
              <h2 className="feature-card__title">El Novato Automotriz</h2>
              <p className="feature-card__body">
                Sistema de gestión completo para un taller mecánico real: turnos,
                clientes, bot de WhatsApp y panel admin. De papel y WhatsApp a un
                sistema con reservas seguras contra doble booking.
              </p>
              <div className="feature-card__metric">
                5x
                <span className="feature-card__metric-label">
                  turnos semanales en producción
                </span>
              </div>
              <div>
                <Button href="/work">Leer el caso de estudio →</Button>
              </div>
            </div>
            <div className="feature-card__meta">
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>
                El porqué:
              </p>
              <p
                style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "0.5rem" }}
              >
                Seguridad, tests y patrones defensivos aplicados en un proyecto que
                usan personas reales todos los días.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title" style={{ marginTop: 0 }}>
            Evidencia, no promesas
          </h2>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <div className="stat__value">{stat.value}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

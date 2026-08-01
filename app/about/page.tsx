const stack = [
  "Node.js",
  "TypeScript",
  "NestJS",
  "React",
  "PostgreSQL",
  "AWS",
];

export default function About() {
  return (
    <div className="container">
      <section className="section" style={{ paddingTop: "var(--space-12)" }}>
        <p className="eyebrow">Sobre mí</p>
        <h1 className="page-title">About</h1>
      </section>

      <section className="section">
        <div className="prose">
          <p>
            Full Stack / Backend Developer con 2 años de experiencia construyendo
            sistemas de producción reales. Mi stack principal es{" "}
            <strong>Node.js, TypeScript, NestJS, React y PostgreSQL</strong>, con
            experiencia en AWS.
          </p>
          <p>
            Actualmente formándome en la AI Fluency track de FlyRank, explorando
            cómo la inteligencia artificial puede integrarse en herramientas de
            productividad y desarrollo.
          </p>
          <p>
            Lo que me diferencia: me importa que el código funcione en producción,
            no solo en desarrollo. Seguridad (OWASP Top 10), tests y decisiones
            técnicas defensivas son parte de cómo construyo, no un add-on.
          </p>
        </div>

        <div className="chip-row" style={{ marginTop: "var(--space-4)" }}>
          {stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        <div className="placeholder" style={{ marginTop: "var(--space-12)" }}>
          <div className="placeholder__label">Pendiente</div>
          Agregar más contexto personal: por qué esta carrera, qué me motiva y algo
          que quieras destacar de tu trayectoria.
        </div>
      </section>
    </div>
  );
}

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
            Empecé en tecnología por una razón práctica: resolver problemas que
            afectan a personas todos los días. Y sigo aquí porque ahora lo hago
            con producción real detrás. En Sip Tracking mejoré la performance de
            una SPA en +50% y habilité la gestión de cientos de miles de registros
            logísticos en tiempo real. En Naranja X reduje incidentes críticos en
            +50% detectando y escalando anomalías en pipelines de carga masiva.
            Hoy, en FlyRank AI, integro LLMs en producción optimizando costos y
            latencia por llamada.
          </p>
          <p>
            Lo que me diferencia: me importa que el código funcione en producción,
            no solo en desarrollo. Seguridad (OWASP Top 10), tests y decisiones
            técnicas defensivas son parte de cómo construyo, no un add-on.
          </p>
          <p>
            Actualmente curso la Tecnicatura en Programación en la Universidad
            Tecnológica Nacional y la AI Fluency track de FlyRank, explorando cómo
            la inteligencia artificial puede integrarse en herramientas de
            productividad y desarrollo.
          </p>
        </div>

        <div className="chip-row" style={{ marginTop: "var(--space-4)" }}>
          {stack.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

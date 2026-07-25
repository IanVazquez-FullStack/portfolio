"use client";

export default function About() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        backgroundColor: "#0a0a0a",
        color: "#f5f5f5",
        padding: "4rem 2rem",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <a
        href="/"
        style={{
          color: "#666",
          textDecoration: "none",
          fontSize: "0.85rem",
          marginBottom: "3rem",
          display: "inline-block",
        }}
      >
        ← Home
      </a>

      <h1
        style={{
          fontSize: "2rem",
          margin: "1.5rem 0 2rem",
          fontWeight: 600,
        }}
      >
        About
      </h1>

      <div style={{ lineHeight: 1.8, color: "#ccc", fontSize: "1rem" }}>
        <p style={{ marginBottom: "1.5rem" }}>
          Full Stack / Backend Developer con 2 años de experiencia construyendo
          sistemas de producción reales. Mi stack principal es Node.js, TypeScript,
          NestJS, React y PostgreSQL, con experiencia en AWS.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          Actualmente formándome en la AI Fluency track de FlyRank, explorando cómo
          la inteligencia artificial puede integrarse en herramientas de productividad
          y desarrollo.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          Lo que me diferencia: me importa que el código funcione en producción, no
          solo en desarrollo. Seguridad (OWASP Top 10), tests, y decisiones técnicas
          defensivas son parte de cómo construyo, no un add-on.
        </p>

        <div
          style={{
            border: "1px dashed #333",
            borderRadius: "8px",
            padding: "2rem",
            textAlign: "center",
            color: "#555",
            marginTop: "2rem",
          }}
        >
          [ PLACEHOLDER — Agregar más contexto personal, por qué esta carrera,
          qué me motiva, si hay algo que quieras destacar de tu trayectoria ]
        </div>
      </div>

      <div style={{ marginTop: "4rem", borderTop: "1px solid #222", paddingTop: "2rem" }}>
        <a
          href="/"
          style={{
            color: "#666",
            textDecoration: "none",
            fontSize: "0.85rem",
          }}
        >
          ← Volver al home
        </a>
      </div>
    </main>
  );
}

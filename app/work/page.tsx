"use client";

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

export default function Work() {
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
          margin: "1.5rem 0 0.5rem",
          fontWeight: 600,
        }}
      >
        El Novato Automotriz
      </h1>
      <p style={{ color: "#888", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
        Sistema de producción completo para un taller mecánico / estación de servicio real
      </p>

      {/* The Problem */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            color: "#aaa",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          Problema / Contexto
        </h2>
        <p style={{ lineHeight: 1.7, color: "#ccc" }}>
          Un taller mecánico y estación de servicio necesitaba un sistema digital para gestionar
          turnos, clientes y operaciones diarias. Todo funcionaba en papel o WhatsApp informal,
          lo que generaba lost appointments, doble booking y cero visibilidad para el dueño.
        </p>
      </section>

      {/* Technical Decisions */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            color: "#aaa",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          Decisiones Técnicas Clave
        </h2>

        <div
          style={{
            border: "1px solid #222",
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
            Redis para locks temporales de reserva
          </h3>
          <p style={{ lineHeight: 1.7, color: "#ccc", fontSize: "0.95rem" }}>
            Al notar degradación de performance bajo carga concurrente, introduje Redis
            (Upstash) con TTL de 15 minutos para locks de reserva. Esto evita doble booking
            cuando dos usuarios intentan reservar el mismo turno simultáneamente — una
            decisión que tomé antes de que fuera un problema en producción.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #222",
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
            Bot de WhatsApp con patrón consult-before-respond
          </h3>
          <p style={{ lineHeight: 1.7, color: "#ccc", fontSize: "0.95rem" }}>
            Integré un bot de WhatsApp Business API con sistema de agendamiento virtual.
            El patrón consult-before-respond verifica disponibilidad antes de confirmar,
            evitando respuestas incorrectas y mejorando la experiencia del cliente.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #222",
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
            Auditoría de seguridad: XSS real encontrado y corregido
          </h3>
          <p style={{ lineHeight: 1.7, color: "#ccc", fontSize: "0.95rem" }}>
            Encontré y arreglé una vulnerabilidad XSS real en mi propia auditoría: el campo
            de nombre del form de contacto se renderizaba sin sanitizar en el panel admin.
            Resuelto con <code style={{ color: "#e06c75" }}>textContent</code> en vez de{" "}
            <code style={{ color: "#e06c75" }}>innerHTML</code> + validación regex server-side.
          </p>
        </div>
      </section>

      {/* Result */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            color: "#aaa",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          Resultado
        </h2>
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#f5f5f5",
            marginBottom: "0.5rem",
          }}
        >
          5x
        </div>
        <p style={{ color: "#888", fontSize: "0.95rem" }}>
          turnos semanales en producción
        </p>
      </section>

      {/* Metrics */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            color: "#aaa",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          Métricas
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                border: "1px solid #222",
                borderRadius: "8px",
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{m.value}</div>
              <div style={{ color: "#888", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            color: "#aaa",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          Stack
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {stack.map((s) => (
            <span
              key={s}
              style={{
                padding: "0.4rem 0.9rem",
                border: "1px solid #333",
                borderRadius: "6px",
                fontSize: "0.85rem",
                color: "#ccc",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Screenshots placeholder */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.1rem",
            color: "#aaa",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem",
          }}
        >
          Screenshots
        </h2>
        <div
          style={{
            border: "1px dashed #333",
            borderRadius: "8px",
            padding: "3rem",
            textAlign: "center",
            color: "#555",
          }}
        >
          [ PLACEHOLDER — Agregar screenshots del dashboard, WhatsApp bot y appointment system ]
        </div>
      </section>

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

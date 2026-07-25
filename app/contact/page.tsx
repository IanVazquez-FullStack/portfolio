"use client";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ian-vazquez-full-stack-developer/",
  },
  {
    label: "Book a Meeting",
    href: "https://cal.com/ian-vazquez-qawvgf",
  },
];

export default function Contact() {
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
        Contact
      </h1>

      <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: "2rem" }}>
        Si estás buscando un developer que se preocupe por seguridad, testing y
        código que funcione en producción — hablemos.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "320px",
        }}
      >
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.75rem 1.5rem",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#f5f5f5",
              textDecoration: "none",
              fontSize: "0.95rem",
              textAlign: "center",
              transition: "border-color 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#888";
              e.currentTarget.style.backgroundColor = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#333";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {link.label}
          </a>
        ))}
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

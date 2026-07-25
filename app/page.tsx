const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ian-vazquez-full-stack-developer/",
  },
  {
    label: "GitHub",
    href: "https://github.com/IanVazquez-FullStack/",
  },
  {
    label: "CV",
    href: "/CV_Ian_Vazquez_2026.pdf",
  },
  {
    label: "Book a Meeting",
    href: "https://cal.com/ian-vazquez-qawvgf",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        backgroundColor: "#0a0a0a",
        color: "#f5f5f5",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: 0, letterSpacing: "0.02em" }}>
        Ian Vazquez
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#a1a1a1", margin: 0 }}>
        Full Stack / Backend Developer
      </p>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            style={{
              padding: "0.6rem 1.4rem",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#f5f5f5",
              textDecoration: "none",
              fontSize: "0.95rem",
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
      </nav>
    </main>
  );
}

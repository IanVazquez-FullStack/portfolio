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
      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "1.5rem" }}>
        Portfolio under construction — coming soon.
      </p>
    </main>
  );
}

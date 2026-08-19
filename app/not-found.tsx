import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="container">
      <section
        className="section"
        style={{ paddingTop: "var(--space-12)", textAlign: "center" }}
      >
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page doesn't exist.</h1>
        <p className="page-intro">
          The link might be old, or mistyped. Here's how to get back on track.
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "var(--space-6)",
          }}
        >
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/work">See the case study</Button>
          <Button href="/contact">Contact</Button>
        </div>
      </section>
    </div>
  );
}

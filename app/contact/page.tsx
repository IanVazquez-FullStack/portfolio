import Button from "@/components/Button";

export default function Contact() {
  return (
    <div className="container">
      <section className="section" style={{ paddingTop: "var(--space-12)" }}>
        <p className="eyebrow">Contacto</p>
        <h1 className="page-title">Contact</h1>
        <p className="page-intro">
          Si estás buscando un developer que se preocupe por seguridad, testing y
          código que funcione en producción — hablemos.
        </p>
      </section>

      <section className="section">
        <div className="card" style={{ maxWidth: "420px" }}>
          <h2 className="card__title">Hablemos</h2>
          <p className="card__body">
            Agenda una reunión directo en mi calendario, o conéctate por LinkedIn.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              marginTop: "var(--space-6)",
            }}
          >
            <Button
              href="https://cal.com/ian-vazquez-qawvgf"
              variant="primary"
              style={{ width: "100%" }}
            >
              Book a Meeting
            </Button>
            <Button
              href="https://www.linkedin.com/in/ian-vazquez-full-stack-developer/"
              style={{ width: "100%" }}
            >
              LinkedIn
            </Button>
            <Button href="/CV_Ian_Vazquez_2026.pdf" variant="ghost">
              Ver CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

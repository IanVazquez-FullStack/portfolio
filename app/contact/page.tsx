import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          <div className="card">
            <h2 className="card__title">Send a message</h2>
            <p className="card__body" style={{ marginBottom: "var(--space-4)" }}>
              Goes straight to my inbox — I reply from there.
            </p>
            <ContactForm />
          </div>

          <div className="card">
            <h2 className="card__title">Or, faster</h2>
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
        </div>
      </section>
    </div>
  );
}

const externalLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ian-vazquez-full-stack-developer/" },
  { label: "GitHub", href: "https://github.com/IanVazquez-FullStack/" },
  { label: "CV", href: "/CV_Ian_Vazquez_2026.pdf" },
  { label: "Book a Meeting", href: "https://cal.com/ian-vazquez-qawvgf" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Ian Vazquez</p>
        <nav aria-label="Enlaces de contacto" className="footer__links">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="footer__link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

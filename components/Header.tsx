"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo">
          Ian<span className="header__logo-accent">V</span>
        </Link>

        <nav className="header__nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header__link${
                pathname === link.href ? " header__link--active" : ""
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          href="https://cal.com/ian-vazquez-qawvgf"
          variant="primary"
          className="header__cta"
        >
          Book a Meeting
        </Button>
      </div>
    </header>
  );
}

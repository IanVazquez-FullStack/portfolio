import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Button({
  href,
  variant = "secondary",
  className = "",
  style,
  children,
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {children}
    </Link>
  );
}

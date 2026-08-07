import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#why", label: "Why Us" },
  { href: "#areas", label: "Service Area" },
  { href: "#reviews", label: "Reviews" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b-2 border-border bg-background py-3"
          : "py-6"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-310 items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-extrabold tracking-[-0.04em] uppercase">
            Elite
          </span>
          <span className="font-display text-[0.6rem] font-bold uppercase tracking-[0.34em] text-muted-foreground">
            Mobile Detailing
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="accent-underline font-display text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+1 (555) 123-4567"
            className="hidden font-display text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            (000) 000-0000
          </a>
          <a
            href="#book"
            className="btn-sheen inline-flex items-center bg-accent px-5 py-3 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get A Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.25 border border-border lg:hidden"
          >
            <span
              className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-0.75 rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-0.75 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex w-full max-w-310 flex-col px-5 py-2 sm:px-8">
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-border last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-sm font-semibold uppercase tracking-[0.2em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-accent py-28 lg:py-36">
      <div className="relative mx-auto w-full max-w-310 px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.28em] text-accent-foreground/75">
            The last word
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl uppercase leading-none text-accent-foreground sm:text-6xl">
            Your Car Deserves More Than A Quick Wash
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-accent-foreground/85">
            One booking is all it takes to see the difference between cleaning a
            car and finishing one.
          </p>
          <a
            href="#book"
            className="mt-10 inline-flex items-center border-2 border-accent-foreground bg-background px-10 py-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-accent-foreground hover:text-accent"
          >
            Schedule Your Detail Today
          </a>
          <p className="mt-6 text-sm text-accent-foreground/85">
            Or call{" "}
            <a href="tel:+1 (555) 123-4567" className="font-bold text-accent-foreground underline underline-offset-4">
              (000) 000-0000
            </a>{" "}
            · Mon–Sat, 7am–7pm
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex w-full max-w-310 flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold uppercase tracking-[-0.03em]">
            Elite Mobile Detailing
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Mobile auto detailing &amp; ceramic coating · Austin, TX
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Apex Mobile Detailing. Fully insured ·
          IDA-trained technicians.
        </p>
      </div>
    </footer>
  );
}

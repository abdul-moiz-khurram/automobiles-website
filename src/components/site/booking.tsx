import { useState } from "react";
import { Reveal } from "./reveal";

const SERVICES = [
  "Essential Detail",
  "Complete Interior Revival",
  "Premium Full Detail",
  "Ceramic Coating Protection",
  "Monthly Maintenance Plan",
  "Not sure yet - advise me",
];

const field =
  "w-full border-b border-input bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-accent";
const label =
  "font-display text-[0.62rem] font-bold uppercase tracking-[0.24em] text-muted-foreground";

export function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="border-y-2 border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Quote Form</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
              Tell us the car. We&apos;ll handle the rest.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Send the details below and you&apos;ll get a firm quote and an
              arrival window by text usually within the hour, always the same
              day.
            </p>
            <ul className="mt-10 space-y-4 border-t border-border pt-8">
              {[
                "No deposit required to reserve a slot",
                "Free reschedule up to 12 hours before",
                "Rain-day guarantee on all exterior work",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden className="mt-2 h-px w-5 shrink-0 bg-accent" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form
              className="plate p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className={label} htmlFor="name">
                    Full name
                  </label>
                  <input id="name" name="name" required className={field} placeholder="John Smith" />
                </div>
                <div>
                  <label className={label} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={field}
                    placeholder="(000) 000-0000"
                  />
                </div>
                <div>
                  <label className={label} htmlFor="vehicle">
                    Vehicle year &amp; model
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    required
                    className={field}
                    placeholder="2023 Sedan"
                  />
                </div>
                <div>
                  <label className={label} htmlFor="service">
                    Service
                  </label>
                  <select id="service" name="service" required className={field} defaultValue="">
                    <option value="" disabled>
                      Choose a package
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-surface">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="location">
                    Your Area
                  </label>
                  <input
                    id="location"
                    name="location"
                    required
                    className={field}
                    placeholder="Address or ZIP"
                  />
                </div>
                <div>
                  <label className={label} htmlFor="date">
                    Preferred date
                  </label>
                  <input id="date" name="date" type="date" required className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="notes">
                    Anything we should know (optional)
                  </label>
                  <input
                    id="notes"
                    name="notes"
                    className={field}
                    placeholder="Pet hair, garage parking, swirl marks…"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-sheen mt-10 w-full bg-accent px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {sent ? "Request received. This is a demo website so no real request have been received ✓" : "Request my quote"}
              </button>
              <p aria-live="polite" className="mt-4 text-center text-xs text-muted-foreground">
                {sent
                  ? "Thanks - we'll text your quote and arrival window shortly."
                  : "We reply by text. No spam, no call centre, ever."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

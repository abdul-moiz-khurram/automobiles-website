import { Reveal } from "./reveal";

const SERVICES = [
  {
    n: "01",
    name: "Essential Detail",
    price: "$149 - $189",
    time: "2 - 2.5 hrs",
    blurb: "The weekly driver reset. Safe wash, decon, protected finish.",
    tier: "red" as const,
    points: [
      "pH neutral two bucket hand wash",
      "Iron & tar decontamination",
      "Wheels, barrels, tyre dressing",
      "6 month spray sealant",
      "Interior vacuum & wipe down",
    ],
  },
  {
    n: "02",
    name: "Complete Interior Revival",
    price: "$239 - $329",
    time: "3 - 4 hrs",
    blurb: "For family haulers, pet owners and coffee spill survivors.",
    tier: "blue" as const,
    points: [
      "Hot-water extraction of carpets & seats",
      "Leather cleanse + pH balanced conditioner",
      "Steam sanitising of vents & touchpoints",
      "Headliner and trim detail",
      "Odour neutralising (ozone available)",
    ],
  },
  {
    n: "03",
    name: "Premium Full Detail",
    price: "$399 - $549",
    time: "5 - 7 hrs",
    blurb: "Inside and out, corrected and protected. Our signature service.",
    tier: "red" as const,
    points: [
      "Everything in Essential + Interior Revival",
      "One step machine paint enhancement",
      "Glass polish & water repellent coating",
      "Engine bay dress",
      "Trim restoration",
    ],
    featured: true,
  },
  {
    n: "04",
    name: "Ceramic Coating Protection",
    price: "$899 - $1,650",
    time: "1 - 2 days",
    blurb: "Multi stage correction then a coating that outlives the season.",
    tier: "green" as const,
    points: [
      "Paint depth readings & test panel",
      "Two stage machine correction",
      "9H professional ceramic (3 / 5 / 7-year)",
      "Coated wheels, glass and trim",
      "Maintenance kit + annual inspection",
    ],
  },
  {
    n: "05",
    name: "Monthly Maintenance Plan",
    price: "$99 / month",
    time: "90 min · recurring",
    blurb: "Keep it showroom without ever thinking about it again.",
    tier: "blue" as const,
    points: [
      "Scheduled monthly visit",
      "Maintenance wash & sealant top-up",
      "Interior refresh",
      "Priority booking window",
      "15% off any add-on service",
    ],
  },
];

const TIER_COLOR: Record<"red" | "blue" | "green", string> = {
  red: "var(--tier-red)",
  blue: "var(--tier-blue)",
  green: "var(--tier-green)",
};

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <p className="eyebrow">The packages</p>
              <h2 className="mt-4 max-w-xl text-4xl leading-[1.02] sm:text-5xl">
                Five ways to make it look better than the showroom floor
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Pricing scales with vehicle size and condition. Every quote is
              confirmed before we start no surprises in the driveway.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <article
                className={`plate group flex h-full flex-col p-8 ${
                  s.featured ? "bg-accent text-accent-foreground" : "plate-hover"
                }`}
                style={{ borderTopColor: TIER_COLOR[s.tier], borderTopWidth: 4 }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-display text-xs font-bold tracking-[0.3em] ${
                      s.featured ? "text-accent-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {s.n}
                  </span>
                  {s.featured && (
                    <span className="bg-background px-2 py-1 font-display text-[0.58rem] font-bold uppercase tracking-[0.2em] text-foreground">
                      Most booked
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-2xl leading-tight">{s.name}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    s.featured ? "text-accent-foreground/85" : "text-muted-foreground"
                  }`}
                >
                  {s.blurb}
                </p>

                <div
                  className={`mt-6 flex items-baseline gap-3 border-y py-4 ${
                    s.featured ? "border-accent-foreground/25" : "border-border"
                  }`}
                >
                  <span
                    className={`font-display text-xl font-extrabold ${
                      s.featured ? "text-accent-foreground" : "text-accent"
                    }`}
                  >
                    {s.price}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-[0.18em] ${
                      s.featured ? "text-accent-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {s.time}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className={`flex gap-3 text-sm ${
                        s.featured ? "text-accent-foreground/85" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`mt-2 h-px w-4 shrink-0 ${
                          s.featured ? "bg-accent-foreground" : "bg-accent"
                        }`}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`mt-8 inline-flex items-center justify-between border-2 px-5 py-3 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                    s.featured
                      ? "border-accent-foreground/40 text-accent-foreground hover:border-accent-foreground"
                      : "border-border-strong group-hover:border-accent group-hover:text-accent"
                  }`}
                >
                  Book {s.name.split(" ")[0]}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

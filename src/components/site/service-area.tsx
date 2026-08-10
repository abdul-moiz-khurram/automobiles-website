import { useState } from "react";
import { Reveal } from "./reveal";

const CITIES = [
  { name: "Austin", x: 50, y: 50, core: true },
  { name: "Round Rock", x: 44, y: 26 },
  { name: "Cedar Park", x: 30, y: 34 },
  { name: "Pflugerville", x: 62, y: 30 },
  { name: "Lakeway", x: 20, y: 56 },
  { name: "Bee Cave", x: 26, y: 68 },
  { name: "Buda", x: 44, y: 76 },
  { name: "Kyle", x: 52, y: 86 },
  { name: "Georgetown", x: 40, y: 12 },
  { name: "Dripping Springs", x: 12, y: 76 },
];

export function ServiceArea() {
  const [active, setActive] = useState("Austin");

  return (
    <section id="areas" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Service area</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
              40-mile radius from downtown Austin
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Inside the radius, mobile service is included. Beyond it we still
              come a small travel fee applies and we&apos;ll quote it upfront.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
              {CITIES.map((c) => (
                <li key={c.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(c.name)}
                    onFocus={() => setActive(c.name)}
                    onClick={() => setActive(c.name)}
                    className={`accent-underline font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                      active === c.name ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="plate relative aspect-square w-full overflow-hidden p-6">
              <svg
                viewBox="0 0 100 100"
                role="img"
                aria-label="Map of Austin-area cities served"
                className="h-full w-full"
              >
                <defs>
                  <pattern id="grid" width="6.25" height="6.25" patternUnits="userSpaceOnUse">
                    <path
                      d="M6.25 0H0V6.25"
                      fill="none"
                      stroke="oklch(1 0 0 / 0.06)"
                      strokeWidth="0.3"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="oklch(0.78 0.155 68 / 0.05)"
                  stroke="oklch(0.78 0.155 68 / 0.35)"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="26"
                  fill="oklch(0.78 0.155 68 / 0.06)"
                  stroke="oklch(0.78 0.155 68 / 0.25)"
                  strokeWidth="0.3"
                />
                {CITIES.map((c) => {
                  const on = active === c.name;
                  return (
                    <g key={c.name} onMouseEnter={() => setActive(c.name)}>
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r={on ? 2.6 : c.core ? 2 : 1.2}
                        fill={on || c.core ? "oklch(0.78 0.155 68)" : "oklch(0.82 0.008 250 / 0.6)"}
                        className="transition-all duration-300"
                      />
                      {on && (
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r="6"
                          fill="none"
                          stroke="oklch(0.78 0.155 68 / 0.5)"
                          strokeWidth="0.4"
                        />
                      )}
                      <text
                        x={c.x}
                        y={c.y - 4}
                        textAnchor="middle"
                        fontSize="2.6"
                        fill={on ? "oklch(0.96 0.004 80)" : "oklch(0.7 0.008 70)"}
                        className="font-display uppercase"
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {c.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <p className="absolute bottom-6 left-6 font-display text-[0.6rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                Inner ring · same-day availability
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useCallback, useRef } from "react";
import heroCar from "@/assets/hero-car.jpg";

const TRUST = [
  { k: "4.9★", v: "412 verified reviews" },
  { k: "100%", v: "Mobile - we come to you" },
  { k: "$2M", v: "Liability insured" },
  { k: "Pro", v: "Rupes & Gtechniq certified" },
];

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  // Pointer-driven 3D rotation of the vehicle stage (no WebGL cost).
  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
    el.style.setProperty("--tx", `${(x * 18).toFixed(2)}px`);
  }, []);

  const onLeave = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--tx", "0px");
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* solid angular accent block - flat color, no gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-[42%] bg-accent opacity-[0.08]"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
          <div>
            <p className="eyebrow">Mobile detailing · Demo website.</p>
            <h1 className="mt-5 text-[2.6rem] leading-[0.95] uppercase sm:text-6xl lg:text-[4.2rem]">
              Your Car. Perfected.
              <span className="block text-accent">On Your Driveway.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Studio-grade paint correction, ceramic protection, and full
              interior revival delivered to your door. No shop drop-off. No
              compromise.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="btn-sheen inline-flex items-center bg-accent px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get A Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center border-2 border-border-strong px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                View Packages
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
              {TRUST.map((t) => (
                <div key={t.k}>
                  <dt className="font-display text-2xl font-extrabold text-foreground">
                    {t.k}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                    {t.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="relative"
            style={{ perspective: "1400px" }}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
          >
            <div
              ref={stageRef}
              className="relative transition-transform duration-700 ease-out will-change-transform"
              style={{
                transform:
                  "translateX(var(--tx,0px)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={heroCar}
                alt="Freshly detailed black luxury sedan with water beading on gloss paint"
                width={1600}
                height={1104}
                fetchPriority="high"
                className="w-full object-cover shadow-[0_50px_120px_-40px_oklch(0_0_0/0.95)]"
              />
              <div
                aria-hidden
                className="absolute -bottom-6 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-[50%] bg-black/70 blur-2xl"
              />
              <div
                className="absolute -left-px bottom-8 border-2 border-l-0 border-accent bg-background px-4 py-3"
                style={{ transform: "translateZ(60px)" }}
              >
                <p className="font-display text-[0.62rem] font-bold uppercase tracking-[0.22em] text-accent">
                  Ceramic sealed
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  9H · 3 year hydrophobic
                </p>
              </div>
              <div
                className="absolute -right-px top-8 border-2 border-r-0 border-accent bg-background px-4 py-3"
                style={{ transform: "translateZ(40px)" }}
              >
                <p className="font-display text-[0.62rem] font-bold uppercase tracking-[0.22em] text-accent">
                  Next opening
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Thursday · 9:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useCallback, useRef, useState } from "react";
import { Reveal } from "./reveal";
import beforeExterior from "@/assets/before-exterior.jpg";
import afterExterior from "@/assets/after-exterior.jpg";
import beforeInterior from "@/assets/before-interior.jpg";
import afterInterior from "@/assets/after-interior.jpg";

const SETS = [
  {
    id: "paint",
    label: "Paint correction",
    before: beforeExterior,
    after: afterExterior,
    caption: "2019 Audi A6 · two stage correction removed 92% of swirl marks",
    beforeAlt: "Car door panel covered in road grime and water spots before detailing",
    afterAlt: "Same car door panel with mirror gloss reflective paint after detailing",
  },
  {
    id: "cabin",
    label: "Interior revival",
    before: beforeInterior,
    after: afterInterior,
    caption: "Family SUV · 4 hours of extraction, steam and leather conditioning",
    beforeAlt: "Dusty stained car interior with crumbs before detailing",
    afterAlt: "Spotless conditioned leather car interior after detailing",
  },
];

function Slider({ set }: { set: (typeof SETS)[number] }) {
  const [pos, setPos] = useState(52);
  const boxRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = boxRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={boxRef}
      className="group relative aspect-[3/2] w-full cursor-ew-resize overflow-hidden border-2 border-border select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <img
        src={set.after}
        alt={set.afterAlt}
        width={1200}
        height={800}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={set.before}
          alt={set.beforeAlt}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover saturate-[0.72] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 bg-background px-3 py-1.5 font-display text-[0.6rem] font-bold uppercase tracking-[0.22em] text-foreground">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 bg-accent px-3 py-1.5 font-display text-[0.6rem] font-bold uppercase tracking-[0.22em] text-accent-foreground">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-1 bg-accent"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-accent bg-background font-display text-xs text-accent">
          ↔
        </span>
      </div>

      <label className="sr-only" htmlFor={`slider-${set.id}`}>
        Reveal before and after for {set.label}
      </label>
      <input
        id={`slider-${set.id}`}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="results" className="border-y-2 border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Transformation gallery</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
              Drag the line. That&apos;s the same car.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No filters, no staged lighting tricks, just documented results
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {SETS.map((s, i) => (
            <Reveal key={s.id} delay={i * 120}>
              <figure>
                <Slider set={s} />
                <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                    {s.label}
                  </span>
                  <span className="text-sm text-muted-foreground">{s.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal, useParallax } from "./reveal";
import equipment from "@/assets/equipment.jpg";

const POINTS = [
  {
    n: "01",
    t: "We come to you",
    d: "Home, office garage, jobsite. Our van carries 65 gallons of filtered water, a 3kW generator and full lighting nothing needed from you.",
  },
  {
    n: "02",
    t: "Professional grade products only",
    d: "Rupes polishers, Gtechniq and Koch-Chemie chemistry, 70+ dedicated microfibre towels per job. Nothing off a supermarket shelf.",
  },
  {
    n: "03",
    t: "Detailers, not car washers",
    d: "Every technician runs a 90 day supervised apprenticeship and is IDA-trained before they touch a customer vehicle solo.",
  },
  {
    n: "04",
    t: "Attention to every detail",
    d: "Door jambs, fuel cap, seat rails, badge crevices. The parts nobody photographs are exactly where we're judged.",
  },
  {
    n: "05",
    t: "Scheduling that respects your day",
    d: "Two hour arrival windows, live text updates, and a photo report of the finished vehicle sent the moment we pack up.",
  },
];

export function WhyUs() {
  const imgRef = useParallax<HTMLImageElement>(0.06);

  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-310 px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow">Why owners keep us</p>
              <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
                Anyone can wash a car. Very few finish one.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Detailing is a craft measured in hours, lighting angles and
                patience. Here&apos;s what that actually looks like on your
                driveway.
              </p>
              <div className="relative mt-10 overflow-hidden border border-border">
                <img
                  ref={imgRef}
                  src={equipment}
                  alt="Professional detailing equipment laid out: polisher, ceramic coatings, brushes and microfibre towels"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full scale-110 object-cover will-change-transform"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background to-transparent p-6 pt-16">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                    ~$14,000 of equipment
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Arrives with every single booking.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <ol className="space-y-0">
            {POINTS.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <li className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-border py-8 transition-colors duration-500 hover:border-accent/50 first:border-t">
                  <span className="font-display text-sm font-bold tracking-[0.24em] text-muted-foreground transition-colors duration-500 group-hover:text-accent">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-2xl leading-tight transition-transform duration-500 group-hover:translate-x-1">
                      {p.t}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                      {p.d}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

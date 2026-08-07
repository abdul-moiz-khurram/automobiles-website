import { Reveal } from "./reveal";

const REVIEWS = [
  {
    q: "I've had my 911 detailed at three different shops in Austin. Nobody has touched the depth these guys pulled out of the paint - and they did it in my own garage while I worked.",
    n: "Daniel R.",
    m: "Porsche 911 Carrera · Ceramic Coating",
  },
  {
    q: "Two kids, one Labrador, and a car I was genuinely embarrassed by. They spent four hours on the interior and handed it back smelling like it was new. I nearly cried.",
    n: "Priya S.",
    m: "Volvo XC90 · Complete Interior Revival",
  },
  {
    q: "Between clients I don't have 90 minutes to sit at a wash. They come to the office lot every third Thursday and the car is spotless when I walk out. Effortless.",
    n: "Marcus H.",
    m: "BMW 540i · Monthly Maintenance Plan",
  },
  {
    q: "Booked them to prep a trade-in. Dealer raised their offer by $1,400 after seeing it. The detail cost me $399. Easiest money I've ever made.",
    n: "Elena T.",
    m: "Lexus RX 350 · Premium Full Detail",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <p className="eyebrow">Customer stories</p>
              <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
                412 reviews. 4.9 average.
              </h2>
            </div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Google · Yelp · Nextdoor
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.n} delay={i * 80}>
              <figure className="plate plate-hover flex h-full flex-col justify-between p-8">
                <div>
                  <p aria-label="5 out of 5 stars" className="text-accent tracking-[0.3em]">
                    ★★★★★
                  </p>
                  <blockquote className="mt-6 text-lg leading-relaxed">
                    &ldquo;{r.q}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
                    {r.n}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.m}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

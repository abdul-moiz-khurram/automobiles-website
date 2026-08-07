import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { BeforeAfter } from "@/components/site/before-after";
import { WhyUs } from "@/components/site/why-us";
import { Booking } from "@/components/site/booking";
import { Reviews } from "@/components/site/reviews";
import { ServiceArea } from "@/components/site/service-area";
import { FinalCta, SiteFooter } from "@/components/site/final-cta";

const TITLE = "Mobile Auto Detailing in Austin, TX | Apex Mobile Detailing";
const DESC =
  "Premium mobile car detailing, paint correction and ceramic coating delivered to your driveway in Austin. Fully insured, 4.9★ from 412 reviews. Book today.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: "Apex Mobile Detailing",
  description: DESC,
  telephone: "+1 (555) 123-4567",
  priceRange: "$$-$$$",
  areaServed: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Pflugerville",
    "Lakeway",
    "Bee Cave",
    "Buda",
    "Kyle",
    "Georgetown",
    "Dripping Springs",
  ].map((n) => ({ "@type": "City", name: n })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "412",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(JSON_LD),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Booking />
        <Reviews />
        <ServiceArea />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

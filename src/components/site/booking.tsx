import { useEffect, useState } from "react";
import { Reveal } from "./reveal";

const SERVICES = [
  "Essential Detail",
  "Complete Interior Revival",
  "Premium Full Detail",
  "Ceramic Coating Protection",
  "Monthly Maintenance Plan",
  "Not sure yet - advise me",
];

const DEMO_WHATSAPP = "15551234567";

const field =
  "w-full border-b border-input bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-accent";
const label =
  "font-display text-[0.62rem] font-bold uppercase tracking-[0.24em] text-muted-foreground";

export function Booking() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const selected = window.sessionStorage.getItem("demo_selected_service");
    if (selected && SERVICES.includes(selected)) {
      setService(selected);
      window.sessionStorage.removeItem("demo_selected_service");
    }
  }, []);

  const submitBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const vehicle = String(form.get("vehicle") || "").trim();
    const selectedService = String(form.get("service") || "").trim();
    const location = String(form.get("location") || "").trim();
    const date = String(form.get("date") || "").trim();
    const notes = String(form.get("notes") || "").trim();

    const nameValid = /^[A-Za-z][A-Za-z\s'’-]{1,49}$/.test(name);
    const phoneDigits = phone.replace(/\D/g, "");
    const phoneValid = phoneDigits.length >= 10 && phoneDigits.length <= 15;
    const vehicleValid = vehicle.length >= 2 && /[A-Za-z]/.test(vehicle);
    const locationValid = location.length >= 5;
    const today = new Date().toISOString().split("T")[0] ?? "";
    const dateValid = Boolean(date) && date >= today;

    if (!nameValid) {
      setError("Please enter a valid name using letters, spaces, hyphens, or apostrophes.");
      return;
    }

    if (!phoneValid) {
      setError("Please enter a valid phone number with 10 to 15 digits.");
      return;
    }

    if (!vehicleValid) {
      setError("Please enter a valid vehicle year and model.");
      return;
    }

    if (!SERVICES.includes(selectedService)) {
      setError("Please select a service.");
      return;
    }

    if (!locationValid) {
      setError("Please enter a valid service location.");
      return;
    }

    if (!dateValid) {
      setError("Please choose a valid future date.");
      return;
    }

    const message = [
      "Hello Elite Mobile Detailing, I would like a quote.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Vehicle: ${vehicle}`,
      `Service: ${selectedService}`,
      `Location: ${location}`,
      `Preferred date: ${date}`,
      `Notes: ${notes || "None"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${DEMO_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="book" className="border-y-2 border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Book your detail</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
              Tell us the car. We&apos;ll handle the rest.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Send the details below and WhatsApp will open with your booking
              message ready to send.
            </p>
            <ul className="mt-10 space-y-4 border-t border-border pt-8">
              {[
                "No deposit required for this demo",
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
            <form className="plate p-8 sm:p-10" onSubmit={submitBooking}>
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="name">Full name</label>
                  <input id="name" name="name" required className={field} placeholder="Jordan Lee" />
                </div>
                <div>
                  <label className={label} htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" required className={field} placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className={label} htmlFor="vehicle">Vehicle year &amp; model</label>
                  <input id="vehicle" name="vehicle" required className={field} placeholder="2023 BMW X5" />
                </div>
                <div>
                  <label className={label} htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className={field}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="" disabled>Select a package</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-surface">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="location">Service location</label>
                  <input id="location" name="location" required className={field} placeholder="123 Demo Street, Austin, TX" />
                </div>
                <div>
                  <label className={label} htmlFor="date">Preferred date</label>
                  <input id="date" name="date" type="date" required className={field} min={new Date().toISOString().split("T")[0]} />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="notes">Anything we should know (optional)</label>
                  <input id="notes" name="notes" className={field} placeholder="Pet hair, garage parking, paint swirls..." />
                </div>
              </div>

              <button
                type="submit"
                className="btn-sheen mt-10 w-full bg-accent px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {sent ? "Open WhatsApp Again" : "Request My Quote"}
              </button>
              <p aria-live="polite" className="mt-4 text-center text-xs text-muted-foreground">
                {sent
                  ? "Your booking details were prepared in WhatsApp."
                  : "Demo booking: your details are placed into a WhatsApp message."}
              </p>
              {error && (
                <p role="alert" className="mt-3 text-center text-xs font-medium text-destructive">
                  {error}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
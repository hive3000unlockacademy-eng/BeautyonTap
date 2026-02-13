import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import { SectionHeading } from "./SectionHeading";

const HOURS = [
  { days: "MON", times: "9 AM – 5 PM" },
  { days: "TUES – FRI", times: "9 AM – 6 PM" },
  { days: "SAT", times: "9 AM – 4 PM" },
  { days: "Closed Sunday", times: "" },
];

export function SplitInfoHours() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
      {/* Left: white panel */}
      <div className="bg-[var(--off-white)] py-8 lg:py-12 px-6 md:px-10 lg:px-12 flex flex-col justify-center">
        <SectionHeading>Treat Yourself Today!</SectionHeading>
        <p className="mt-4 text-[var(--charcoal-muted)] leading-relaxed">
          Walk-ins welcome subject to availability. To book with any of our providers, call [PHONE].
        </p>
        <p className="mt-3 text-[var(--charcoal-muted)]">
          We are located at [ADDRESS].
        </p>
        <div className="mt-8">
          <PrimaryButton href="#contact">Contact</PrimaryButton>
        </div>
      </div>

      {/* Center: vertical image slice */}
      <div className="relative min-h-[280px] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
          alt="Hair styling"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* Right: hours panel */}
      <div className="rose-glass text-white hero-cta-text-shadow py-8 lg:py-12 px-6 md:px-10 lg:px-12 flex flex-col justify-center">
        <h3 className="text-lg font-semibold uppercase tracking-widest mb-6">
          Hours
        </h3>
        <ul className="space-y-3">
          {HOURS.map((row) => (
            <li key={row.days} className="flex justify-between gap-4">
              <span className="font-semibold">{row.days}</span>
              {row.times && <span>{row.times}</span>}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-white/30">
          <p className="text-sm italic text-white/90">
            Later appointments are available by request.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] w-full flex items-end justify-end pb-16 pr-6 pl-6 pt-24 lg:pt-0 lg:pr-8 lg:pl-[min(28%,320px)]"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Salon interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent"
          aria-hidden
        />
      </div>
      <div className="relative z-10 text-right max-w-xl ml-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white uppercase">
          Beauty on Tap
        </h1>
        <p className="mt-3 text-lg md:text-xl text-white/95">
          Luxury Hair • Nails • Beauty
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-end">
          <PrimaryButton href="#contact">Book Now</PrimaryButton>
          <SecondaryButton href="#services">View Services</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC, LOGO_SRC_LIGHT } from "@/lib/constants";
import { useState } from "react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/#services" },
  { label: "TEAM", href: "/#team" },
  { label: "CONTACT", href: "/#contact" },
];

export function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Hero with overlaid sidebar — same as home: full-bleed image, rose gold glass sidebar */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[100vh] overflow-hidden">
        {/* Hero image: full-bleed — woman with hair (from gallery) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
            alt="Stylish hair and salon atmosphere at Beauty on Tap"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent" aria-hidden />
        </div>

        {/* Desktop: hero sidebar — rose gold brand glass (same as home) */}
        <aside className="hidden lg:flex absolute left-0 top-0 bottom-0 z-10 w-[28%] min-w-[240px] max-w-[320px] flex-col py-10 px-6 lg:px-8 rose-glass">
          <Link href="/" className="block w-[180px] h-[180px] relative shrink-0 self-center rounded-full overflow-hidden logo-backdrop flex items-center justify-center p-1">
            <Image src={LOGO_SRC} alt="Beauty on Tap Salon" width={180} height={180} className="object-contain logo-img" priority sizes="180px" quality={90} />
          </Link>
          <nav className="flex flex-col gap-6 mt-8 flex-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="text-white uppercase tracking-widest text-sm font-semibold hover:opacity-90 transition hero-cta-text-shadow">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4 mt-auto pt-6">
            <a href="https://instagram.com/[INSTAGRAM]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition hero-cta-text-shadow" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com/[FACEBOOK]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition hero-cta-text-shadow" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </aside>

        {/* Hero content: heading + intro — below header on mobile/tablet; centered on desktop */}
        <div className="relative z-10 min-h-[60vh] flex items-center py-12 pt-36 md:pt-40 px-6 md:px-10 lg:absolute lg:top-1/2 lg:left-0 lg:right-0 lg:min-h-0 lg:py-0 lg:pt-0 lg:-translate-y-1/2 lg:pl-[calc(clamp(240px,28%,320px)+1.5rem)] lg:pr-12">
          <div className="max-w-2xl w-full text-center lg:text-left rounded-2xl about-hero-cta px-6 py-6 sm:px-8 sm:py-8">
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase tracking-tight hero-cta-text-shadow">
              About Beauty on Tap
            </h1>
            <p className="mt-6 text-white/95 text-base lg:text-lg leading-relaxed hero-cta-text-shadow">
              Centrally located, Beauty on Tap offers a variety of hair care, nail care, and skin care services delivered with kindness and professionalism. Family owned and operated, our atmosphere is warm, inviting, and professional. We strive to deliver timely, professional services with a flair for style and energy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three-image gallery strip */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
            alt="Salon products and reception"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80"
            alt="Salon styling stations"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
            alt="Salon seating"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* 3. Quote section with centered logo below (Salon 29-style placement) */}
      <div className="bg-white py-12">
        <div className="w-full text-center px-6 md:px-10 lg:px-12">
          <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-[var(--charcoal)]">
            [Your quote or tagline]
          </p>
          <p className="mt-3 text-[var(--charcoal-muted)] text-sm md:text-base">
            [Optional subline or remove this block if you prefer.]
          </p>
          {/* Centered logo — positioned below quote, above Our Story section */}
          <div className="flex justify-center mt-10 mb-6">
            <div className="w-[220px] h-[220px] rounded-full overflow-hidden logo-backdrop-on-light flex items-center justify-center p-1">
              <Image src={LOGO_SRC_LIGHT} alt="Beauty on Tap Salon logo" width={220} height={220} className="object-contain logo-img" sizes="220px" quality={90} />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Our Story + Meet Our Team button — rose gold background with overlay panel */}
      <div className="rose-glass py-12 px-6 md:px-10 lg:px-12">
        <div className="max-w-3xl mx-auto rounded-2xl about-hero-cta text-white py-10 px-6 sm:px-8 md:px-10 hero-cta-text-shadow">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold uppercase tracking-tight text-center">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-white/95 text-left text-sm md:text-base leading-relaxed">
            <p>
              [Placeholder: Your salon story and founder. e.g. Beauty on Tap was founded by… We bring a fresh perspective while maintaining the foundation of the salon.]
            </p>
            <p>
              [Placeholder: Team or history — e.g. From receptionist to stylist to owner, our team has grown with the same passion for service.]
            </p>
            <p>
              [Placeholder: Third paragraph if needed — e.g. Today we welcome every client with the same warmth and professionalism.]
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <Link
            href="/#team"
            className="inline-flex items-center justify-center rounded-md border-2 border-[var(--rose-panel-light)] bg-white px-6 py-3 text-sm font-medium text-[var(--rose-panel)] hover:bg-[var(--off-white)] transition"
          >
            Meet Our Team
          </Link>
        </div>
      </div>

      {/* Mobile: hamburger bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-4 rose-glass safe-top">
        <Link href="/" className="flex w-[100px] h-[100px] items-center justify-center rounded-full overflow-hidden logo-backdrop p-1">
          <Image src={LOGO_SRC} alt="Beauty on Tap Salon" width={100} height={100} className="object-contain logo-img" sizes="100px" quality={90} />
        </Link>
        <button type="button" onClick={() => setMenuOpen(true)} className="touch-target text-white uppercase tracking-wider text-sm py-2 px-4 flex items-center justify-center hero-cta-text-shadow" aria-label="Open menu">Menu</button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && <div className="lg:hidden fixed inset-0 z-[60] bg-black/50" aria-hidden onClick={() => setMenuOpen(false)} />}
      <div className={`lg:hidden fixed top-0 right-0 z-[60] h-full w-[85%] max-w-[320px] rose-glass flex flex-col py-10 px-6 transition-transform duration-300 motion-reduce:duration-0 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end">
          <button type="button" onClick={() => setMenuOpen(false)} className="touch-target text-white uppercase tracking-wider text-sm p-2 flex items-center justify-center hero-cta-text-shadow" aria-label="Close menu">Close</button>
        </div>
        <nav className="flex flex-col gap-6 mt-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="touch-target flex items-center text-white uppercase tracking-widest text-sm font-semibold py-2 hero-cta-text-shadow">{label}</Link>
          ))}
        </nav>
        <div className="mt-auto flex gap-6">
          <a href="https://instagram.com/[INSTAGRAM]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition hero-cta-text-shadow" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://facebook.com/[FACEBOOK]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition hero-cta-text-shadow" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </>
  );
}

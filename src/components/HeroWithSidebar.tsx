"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC, getNavLinks } from "@/lib/constants";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const NAV_LINKS = getNavLinks();

export function HeroWithSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-[85vh] lg:min-h-[100vh] overflow-hidden"
      >
        {/* Hero image: full-bleed across entire screen */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Salon interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent" aria-hidden />
        </div>

        {/* Desktop: hero sidebar — rose gold brand glass (.rose-glass); same treatment on About page */}
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

        {/* Hero text + CTA: pinned to bottom; mobile centered, tablet+ left-aligned, desktop (lg) unchanged */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center md:justify-start px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pb-[max(2rem,env(safe-area-inset-bottom))] md:pl-8 md:pr-12 md:pb-[max(2.5rem,env(safe-area-inset-bottom))] lg:pl-[calc(clamp(240px,28%,320px)+1.5rem)] lg:pr-12 lg:pt-0 lg:pb-8">
          <div className="w-full max-w-xl mx-auto md:mx-0 text-center md:text-left rounded-2xl hero-cta-backdrop px-5 py-5 sm:px-6 sm:py-6">
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white uppercase hero-cta-text-shadow">
              Beauty on Tap
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/95 max-w-md mx-auto md:mx-0 hero-cta-text-shadow">
              Welcome to Beauty on Tap, where we strive to make a positive difference in your day. We treat our clients like family. We can&apos;t wait for your next visit!
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <PrimaryButton href="#contact">Book Now</PrimaryButton>
              <SecondaryButton href="#services">View Services</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "TEAM", href: "#team" },
  { label: "CONTACT", href: "#contact" },
];

function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-6 mt-8">
      {NAV_LINKS.map(({ label, href }) => (
        <Link key={href} href={href} onClick={onLinkClick} className="touch-target flex items-center py-2 text-white uppercase tracking-widest text-sm font-medium hover:opacity-90 transition">
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function SidebarNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside className="hidden lg:flex fixed top-0 left-0 z-50 w-[28%] min-w-[240px] max-w-[320px] h-full flex-col px-8 py-10 sidebar-overlay" aria-label="Main navigation">
        <Link href="#home" className="flex w-28 h-28 shrink-0 items-center justify-center rounded-full overflow-hidden hero-cta-backdrop p-1.5">
          <Image src="/beauty on tap logo.png" alt="Beauty on Tap Salon" width={112} height={112} className="object-contain logo-img" priority />
        </Link>
        <NavLinks />
        <div className="mt-auto flex gap-4">
          <a href="https://instagram.com/[INSTAGRAM]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition" aria-label="Instagram">
          <InstagramIcon />
        </a>
          <a href="https://facebook.com/[FACEBOOK]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition" aria-label="Facebook">
          <FacebookIcon />
        </a>
        </div>
      </aside>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 sidebar-overlay safe-top">
        <Link href="#home" className="flex w-16 h-16 items-center justify-center rounded-full overflow-hidden hero-cta-backdrop p-1.5">
          <Image src="/beauty on tap logo.png" alt="Beauty on Tap Salon" width={64} height={64} className="object-contain logo-img" />
        </Link>
        <button type="button" onClick={() => setOpen(true)} className="touch-target p-2 flex items-center justify-center text-white uppercase tracking-wider text-sm" aria-label="Open menu">Menu</button>
      </div>
      {open && <div className="lg:hidden fixed inset-0 z-[60] bg-black/40" aria-hidden onClick={() => setOpen(false)} />}
      <div className={`lg:hidden fixed top-0 right-0 z-[60] h-full w-[85%] max-w-[320px] sidebar-overlay flex flex-col px-8 py-10 transition-transform duration-300 motion-reduce:duration-0 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end">
          <button type="button" onClick={() => setOpen(false)} className="touch-target text-white uppercase tracking-wider text-sm p-2 flex items-center justify-center" aria-label="Close menu">Close</button>
        </div>
        <NavLinks onLinkClick={() => setOpen(false)} />
        <div className="mt-auto flex gap-4">
          <a href="https://instagram.com/[INSTAGRAM]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition" aria-label="Instagram">
          <InstagramIcon />
        </a>
          <a href="https://facebook.com/[FACEBOOK]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition" aria-label="Facebook">
          <FacebookIcon />
        </a>
        </div>
      </div>
    </>
  );
}

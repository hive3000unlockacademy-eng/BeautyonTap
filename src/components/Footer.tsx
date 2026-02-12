import Link from "next/link";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal-dark)] text-gray-400 py-8 w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:min-w-0 px-6 md:px-10 lg:px-12">
        <p className="text-sm">© {new Date().getFullYear()} Beauty on Tap Salon</p>
        <div className="flex gap-6">
          <a href="https://instagram.com/[INSTAGRAM]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition" aria-label="Instagram">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/[FACEBOOK]" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition" aria-label="Facebook">
            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-4 px-6 text-sm" aria-label="Legal">
        <Link href="/privacy" className="text-gray-400 hover:text-white transition">
          Privacy Policy
        </Link>
        <span className="text-gray-600" aria-hidden>|</span>
        <Link href="/terms" className="text-gray-400 hover:text-white transition">
          Terms of Service
        </Link>
        <span className="text-gray-600" aria-hidden>|</span>
        <Link href="/accessibility" className="text-gray-400 hover:text-white transition">
          Accessibility
        </Link>
      </nav>
      <p className="text-center text-sm text-gray-500 mt-6 px-6">
        Powered By:{" "}
        <a href="https://www.nebuladigital.net" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 font-medium">
          NebulaDigital
        </a>
      </p>
    </footer>
  );
}

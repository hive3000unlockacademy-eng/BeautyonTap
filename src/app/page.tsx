import { HeroWithSidebar } from "@/components/HeroWithSidebar";
import { SplitInfoHours } from "@/components/SplitInfoHours";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { LocalBusinessStructuredData } from "@/components/StructuredData";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Salon • Nails • Spa",
  description:
    "Beauty on Tap Salon — professional hair styling, color, nails, and spa services. Family owned. Walk-ins welcome. Book your appointment or visit us today.",
  openGraph: {
    title: "Beauty on Tap Salon | Hair • Nails • Spa",
    description:
      "Professional hair, nails, and spa in a warm, welcoming environment. Book today.",
    url: "/",
  },
};

const TESTIMONIALS = [
  {
    quote: "I could not be happier with my experience. Professional, friendly, and the results are always amazing.",
    name: "— Client",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&q=80",
  },
  {
    quote: "Thank you for another great visit. You are the best!",
    name: "— Happy Client",
    avatarSrc: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=160&h=160&fit=crop&q=80",
  },
];

const SERVICES = [
  "Hair Styling",
  "Color",
  "Blowouts",
  "Extensions",
  "Nails",
  "Spa",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--charcoal-dark)]">
      <LocalBusinessStructuredData />
      <main className="w-full" id="main-content">
      {/* Full-width content — no side padding */}
      <div className="w-full bg-[var(--off-white)]">
        <HeroWithSidebar />

        <SplitInfoHours />

        <section className="leaf-pattern">
          <div className="w-full py-12 px-6 md:px-10 lg:px-12">
            <SectionHeading className="text-center mb-4">Testimonials</SectionHeading>
            <p className="text-center text-[var(--charcoal-muted)] mb-12">
              What our clients say about us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={i} quote={t.quote} name={t.name} avatarSrc={t.avatarSrc} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="#team"
                className="inline-flex items-center justify-center rounded-md bg-[var(--rose-panel)] px-6 py-3 text-sm font-semibold text-white shadow-md hero-cta-text-shadow hover:bg-[var(--rose-panel-light)]"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[var(--off-white)]" aria-labelledby="services-heading">
          <div className="w-full py-12 px-6 md:px-10 lg:px-12">
            <SectionHeading id="services-heading" className="text-center mb-4">Services</SectionHeading>
            <p className="text-center text-[var(--charcoal-muted)] mb-12">Hair • Nails • Spa</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICES.map((title) => (
                <ServiceCard key={title} title={title} />
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-[var(--off-white)]">
          <div className="w-full py-12 px-6 md:px-10 lg:px-12 text-center">
            <SectionHeading>Our Team</SectionHeading>
            <p className="mt-4 text-[var(--charcoal-muted)]">[Placeholder: team intro and bios.]</p>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="w-full py-12 px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading>Contact & Book</SectionHeading>
              <p className="mt-2 text-[var(--charcoal-muted)] mb-8">
                Send a message or call [PHONE]. We are at [ADDRESS].
              </p>
              <ContactForm />
            </div>
            <div className="rounded-xl bg-[var(--off-white)] p-8 border border-[var(--rose-panel-light)]/50">
              <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mb-4">Booking</h3>
              <p className="text-[var(--charcoal-muted)] text-sm">[Booking method: phone / form / Booksy / etc.]</p>
              <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-6 mb-2">Hours</h3>
              <p className="text-sm text-[var(--charcoal-muted)]">Mon – Fri 9–6 · Sat 9–4 · Closed Sunday</p>
              <p className="mt-4 text-sm italic text-[var(--charcoal-muted)]">Later appointments by request.</p>
            </div>
          </div>
        </section>

      </div>
      </main>
      <Footer />
    </div>
  );
}

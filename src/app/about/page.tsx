import { AboutPage } from "@/components/AboutPage";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Beauty on Tap Salon — our story, our team, and our commitment to professional hair, nails, and spa services in a warm, family-owned environment.",
  openGraph: {
    title: "About | Beauty on Tap Salon",
    description: "Our story, our team, and what makes Beauty on Tap special.",
    url: "/about",
  },
};

export default function AboutRoute() {
  return (
    <div className="min-h-screen bg-[var(--charcoal-dark)]">
      <div className="w-full bg-[var(--off-white)]">
        <AboutPage />
      </div>
      <Footer />
    </div>
  );
}

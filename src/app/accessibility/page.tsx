import { Footer } from "@/components/Footer";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility statement for Beauty on Tap Salon. We are committed to making our website and salon services accessible to everyone.",
};

export default function AccessibilityPage() {
  return (
    <>
      <LegalPageLayout title="Accessibility Statement">
        <p className="text-[var(--charcoal-muted)]">
          <strong>Last updated:</strong> [DATE]. Beauty on Tap Salon is committed to ensuring our website and services are accessible to everyone, including people with disabilities.
        </p>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Our Commitment</h2>
          <p>
            We strive to conform to applicable accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), where practicable. Our goal is to provide a welcoming experience for all visitors and clients.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Measures We Take</h2>
          <ul className="list-disc pl-6 space-y-2 text-[var(--charcoal-muted)]">
            <li>Providing sufficient color contrast and readable text where possible</li>
            <li>Using clear headings and structure to help navigation</li>
            <li>Offering alternative ways to get in touch (e.g., phone) for those who have difficulty using online forms</li>
            <li>Reviewing our site periodically to improve accessibility</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Feedback & Accommodations</h2>
          <p>
            If you have trouble accessing any part of our website or need an accommodation when visiting our salon, please contact us at [PHONE] or [EMAIL]. We will work with you to provide the information or service you need in a way that works for you.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Updates</h2>
          <p>
            We may update this accessibility statement as we improve our practices. The “Last updated” date at the top of this page will reflect the most recent changes.
          </p>
        </section>
      </LegalPageLayout>
      <Footer />
    </>
  );
}

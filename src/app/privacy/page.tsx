import { Footer } from "@/components/Footer";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Beauty on Tap Salon. How we collect, use, and protect your information when you visit or book with us.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalPageLayout title="Privacy Policy">
        <p className="text-[var(--charcoal-muted)]">
          <strong>Last updated:</strong> [DATE]. Beauty on Tap Salon (“we,” “our,” or “us”) respects your privacy. This policy describes how we collect, use, and protect your information when you visit our website or use our services.
        </p>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Information We Collect</h2>
          <p>
            We may collect information you provide directly, such as name, email, phone number, and appointment preferences when you contact us, book services, or sign up for communications. We may also collect usage information (e.g., how you use our website) through cookies or similar technologies.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, process bookings, send appointment reminders, respond to inquiries, and, with your consent, send marketing communications. We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Data Security & Retention</h2>
          <p>
            We take reasonable steps to protect your personal information. We retain your information only as long as necessary for the purposes described in this policy or as required by law.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Your Rights</h2>
          <p>
            Depending on applicable law, you may have the right to access, correct, or delete your personal information, or to opt out of marketing. Contact us at [EMAIL or PHONE] to exercise these rights or with any questions about this policy.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Changes</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be posted on this page with a revised “Last updated” date. We encourage you to review this policy periodically.
          </p>
        </section>
      </LegalPageLayout>
      <Footer />
    </>
  );
}

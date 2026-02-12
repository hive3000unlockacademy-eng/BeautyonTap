import { Footer } from "@/components/Footer";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for using the Beauty on Tap Salon website and our hair, nails, and spa services.",
};

export default function TermsPage() {
  return (
    <>
      <LegalPageLayout title="Terms of Service">
        <p className="text-[var(--charcoal-muted)]">
          <strong>Last updated:</strong> [DATE]. By using the Beauty on Tap Salon website and our services, you agree to these Terms of Service. Please read them carefully.
        </p>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Services</h2>
          <p>
            Beauty on Tap Salon provides hair, nail, and beauty services. Service offerings, pricing, and availability are subject to change. We strive to deliver quality services as described at the time of booking.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Appointments & Cancellation</h2>
          <p>
            Appointments are subject to availability. We ask that you provide advance notice if you need to cancel or reschedule. [We may have a cancellation policy—e.g., 24 hours’ notice—and may charge a fee for no-shows or late cancellations. Please confirm our current policy when booking.]
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Payment</h2>
          <p>
            Payment is due at the time of service unless otherwise agreed. We accept [payment methods—e.g., cash, card]. Prices do not include applicable taxes unless stated. Refunds, if any, are handled in accordance with our refund policy.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Website Use</h2>
          <p>
            You agree to use our website only for lawful purposes. You may not use it to transmit harmful content, attempt to gain unauthorized access to our systems, or otherwise misuse the site. Content on this site is for general information and may change without notice.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Beauty on Tap Salon is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our liability is limited to the amount you paid for the relevant service.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-[var(--charcoal)] mt-8 mb-2 text-lg">Contact</h2>
          <p>
            For questions about these terms, please contact us at [PHONE] or [ADDRESS/EMAIL].
          </p>
        </section>
      </LegalPageLayout>
      <Footer />
    </>
  );
}

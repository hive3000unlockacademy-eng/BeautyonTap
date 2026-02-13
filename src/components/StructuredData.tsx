import { LOGO_SRC } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beautyontapsalon.com";

export function LocalBusinessStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Beauty on Tap Salon",
    description:
      "Professional hair, nails, and spa services in a warm, welcoming environment. Family owned and operated.",
    url: SITE_URL,
    telephone: "[PHONE]",
    address: {
      "@type": "PostalAddress",
      streetAddress: "[ADDRESS]",
      addressLocality: "[CITY]",
      addressRegion: "[STATE]",
      postalCode: "[ZIP]",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
    ],
    priceRange: "$$",
    image: `${SITE_URL}${LOGO_SRC.replace(/ /g, "%20")}`,
    sameAs: ["https://instagram.com/[INSTAGRAM]", "https://facebook.com/[FACEBOOK]"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

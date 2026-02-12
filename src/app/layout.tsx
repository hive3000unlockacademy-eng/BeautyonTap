import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Beauty on Tap Salon";
const defaultDescription =
  "Beauty on Tap Salon offers professional hair, nails, and spa services in a warm, welcoming environment. Family owned. Book your appointment today.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beautyontapsalon.com"),
  title: {
    default: `${siteName} | Hair Salon • Nails • Spa`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "hair salon",
    "nail salon",
    "spa",
    "beauty salon",
    "hair styling",
    "hair color",
    "blowout",
    "manicure",
    "pedicure",
    "Beauty on Tap",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} | Professional Hair, Nails & Spa`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Hair • Nails • Spa`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
  other: {
    "format-detection": "telephone=yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a1a1a" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}

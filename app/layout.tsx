import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const url = process.env.NEXT_PUBLIC_SITE_URL || "https://rippletrend.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Ripple Trend Marketing | Digital marketing agency in Kenya",
  description:
    "Ripple Trend Marketing helps businesses in Kenya and beyond build strong brands, reach the right audience and turn online attention into measurable growth.",
  alternates: { canonical: "/" },
  openGraph: { title: "Create the Ripple. Become the Trend.", description: "Digital marketing, branding, content and growth.", type: "website", url },
};
export const viewport: Viewport = { themeColor: "#101414" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Ripple Trend Marketing Agency",
  url,
  areaServed: "KE",
  description: "Digital marketing, branding, content creation, SEO, paid advertising, web design and AI marketing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

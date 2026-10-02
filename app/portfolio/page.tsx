import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioCTA from "@/components/PortfolioCTA";
import PortfolioGallery from "@/components/PortfolioGallery";
import PortfolioHero from "@/components/PortfolioHero";

export const metadata: Metadata = {
  title: "Portfolio | Ripple Trend Marketing",
  description: "Browse Ripple Trend Marketing's creative concepts across branding, social media, advertising, web design, and content.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main><PortfolioHero /><PortfolioGallery /><PortfolioCTA /></main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
import AboutStory from "@/components/AboutStory";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About Ripple Trend Marketing | Our Story and Approach",
  description: "Meet Ripple Trend Marketing Agency: a creative and technology-driven growth partner combining strategy, creativity, content, and data.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main><AboutStory /></main>
      <Footer />
    </>
  );
}
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Industries />
        <Portfolio />
        <Packages />
        <Process />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

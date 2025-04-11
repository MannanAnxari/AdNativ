import Header from "@/components/header";
import Hero from "@/components/hero";
import { ClientLogos } from "@/components/client-logos";
import AboutSection from "@/components/about-section";
import { GrowthChart } from "@/components/growth-chart";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import Process from "@/components/process";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CapabilitiesSection from "@/components/capablities-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <CapabilitiesSection />
        <ClientLogos />
        {/* <GrowthChart /> */}
        <Services />
        <CaseStudies />
        <Process />
        {/* <Contact /> */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

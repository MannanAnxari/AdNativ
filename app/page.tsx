import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Process from "@/components/process"
import Work from "@/components/work"
import Testimonials from "@/components/testimonials"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Work />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


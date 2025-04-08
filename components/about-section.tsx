import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Take a bold step forward with AdNativ. We help businesses grow through innovative Amazon marketing
            strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Take a bold step forward with AdNativ</h3>
            <p className="text-gray-600 mb-6">
              We're a team of Amazon marketing specialists dedicated to helping businesses like yours succeed on the
              world's largest marketplace. With our data-driven approach and years of experience, we deliver exceptional
              results that drive growth and increase profitability.
            </p>
            <a href="#contact" className="green-button">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5+</div>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6,000+</div>
              <p className="text-sm text-gray-600">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">43M+</div>
              <p className="text-sm text-gray-600">Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section className="section-padding bg-[#f0f0ff]" id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-gray-500 mb-2">WHO WE ARE</div>
            <h2 className="text-4xl font-bold mb-6">Team of over 450 experts</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of Amazon marketing specialists brings decades of combined experience to help your business
              succeed on the world's largest marketplace.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Why AdNativ is your top-choice</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <span>Amazon marketing specialists with years of experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <span>Data-driven approach to maximize ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <span>Transparent reporting and communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <span>Customized strategies tailored to your business goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <span>Continuous optimization for maximum results</span>
                </li>
              </ul>
            </div>

            <a href="#contact" className="black-button">
              Contact Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden h-full">
              <Image
                src="/team-image.jpg"
                alt="Our team of experts"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5+</div>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">6,000+</div>
            <p className="text-sm text-gray-600">Clients Served</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">450+</div>
            <p className="text-sm text-gray-600">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">43M+</div>
            <p className="text-sm text-gray-600">Revenue Generated</p>
          </div>
        </div>
      </div>
    </section>
  )
}


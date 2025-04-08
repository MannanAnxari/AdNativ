import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Process() {
  return (
    <section className="py-20 bg-[#f8f9fa]" id="process">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 3 step Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            We follow a proven methodology to ensure your success on Amazon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid gap-6">
            <div className="process-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Deep Dive Audit and Diagnosis</h3>
              </div>
              <p className="text-gray-600">
                We analyze your current Amazon presence, identify opportunities, and develop a customized strategy.
              </p>
            </div>

            <div className="process-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Examining Competitors and Strategy Planning</h3>
              </div>
              <p className="text-gray-600">
                We research your competitors, identify gaps in the market, and create a strategic plan to outperform
                them.
              </p>
            </div>

            <div className="process-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Launching and Fine Tuning</h3>
              </div>
              <p className="text-gray-600">
                We implement our strategies, monitor performance, and continuously optimize for maximum results.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80"
              alt="Team working on strategy"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8 max-w-3xl mx-auto">
            Turn Clicks into Sales – Power Up Your Amazon Advertising Game!
          </h2>
          <a href="#contact" className="green-button">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

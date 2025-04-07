import { ArrowRight } from "lucide-react"

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mb-16">
          <div className="text-sm text-gray-500 mb-2">OUR PROCESS</div>
          <h2 className="text-4xl font-bold mb-4">Our 3 step Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            We follow a proven methodology to ensure your success on Amazon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="process-card">
            <div className="process-number">1</div>
            <h3 className="text-xl font-bold mb-3">Deep Dive Audit and Diagnosis</h3>
            <p className="text-gray-600 mb-6">
              We analyze your current Amazon presence, identify opportunities, and develop a customized strategy.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="process-card">
            <div className="process-number">2</div>
            <h3 className="text-xl font-bold mb-3">Examining Competitors and Strategy Planning</h3>
            <p className="text-gray-600 mb-6">
              We research your competitors, identify gaps in the market, and create a strategic plan to outperform them.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="process-card">
            <div className="process-number">3</div>
            <h3 className="text-xl font-bold mb-3">Launching and Fine Tuning</h3>
            <p className="text-gray-600 mb-6">
              We implement our strategies, monitor performance, and continuously optimize for maximum results.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 max-w-3xl mx-auto">
            Turn Clicks into Sales – Power Up Your Amazon Advertising Game!
          </h2>
          <a href="#contact" className="yellow-button">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}


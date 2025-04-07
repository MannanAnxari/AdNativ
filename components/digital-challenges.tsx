import { BarChart3, LineChart, Zap } from "lucide-react"

export default function DigitalChallenges() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-gray-500 mb-2">OUR CAPABILITIES</div>
            <h2 className="text-3xl font-bold mb-6">We solve digital challenges</h2>
            <p className="text-gray-600">
              Take a bold step forward with AdNativ. We help businesses grow through innovative digital marketing
              strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="service-icon blue">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Better audiences</h3>
              <p className="text-gray-600 text-sm">
                Target the right customers with our advanced audience segmentation strategies.
              </p>
            </div>
            <div>
              <div className="service-icon green">
                <LineChart size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Better analytics</h3>
              <p className="text-gray-600 text-sm">
                Get data-driven insights to make better decisions for your business.
              </p>
            </div>
            <div>
              <div className="service-icon purple">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-bold mb-2">Better outcomes</h3>
              <p className="text-gray-600 text-sm">Drive measurable results that directly impact your bottom line.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import { ArrowRight, BarChart3, LineChart, Search, ShoppingCart, Zap } from "lucide-react"

export default function Services() {
  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className="mb-16">
          <div className="text-sm text-gray-500 mb-2">OUR SERVICES</div>
          <h2 className="text-4xl font-bold mb-4">Marketing Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Let us Take You to the Next Level with Our Amazon Marketing Expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="service-card">
            <div className="service-icon purple">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Amazon SEO</h3>
            <p className="text-gray-600 mb-6">
              Optimize your product listings to rank higher in Amazon search results and drive more organic traffic.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon blue">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">PPC Management</h3>
            <p className="text-gray-600 mb-6">
              Strategic ad campaigns that maximize visibility and conversions while optimizing your ad spend.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon green">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Brand Analytics</h3>
            <p className="text-gray-600 mb-6">
              Data-driven insights to improve your brand performance and understand your market position.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon pink">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
            <p className="text-gray-600 mb-6">
              Monitor and optimize your campaigns for maximum ROI with comprehensive reporting.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon purple">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Conversion Rate Optimization</h3>
            <p className="text-gray-600 mb-6">
              Improve your conversion rates through strategic testing and optimization techniques.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon blue">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
            <p className="text-gray-600 mb-6">
              Optimize your inventory to prevent stockouts and overstock situations that hurt your bottom line.
            </p>
            <a href="#contact" className="flex items-center text-purple-600 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


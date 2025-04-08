import { ArrowRight, Clock, Users, BarChart3 } from "lucide-react"

export function GrowthChart() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why us</h2>
          <p className="text-lg text-gray-600 max-w-3xl">Get on the Roll and Achieve Goals Instantly</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Team</h3>
            <p className="text-gray-600">
              Our professional team brings expertise and experience to the table. We develop strategies to optimize your
              business's performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Collaborative Approach</h3>
            <p className="text-gray-600">
              AdNativ believes in a collaborative approach and works with clients to understand their unique needs and
              achieve goals through strategic initiatives for the platform.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Results</h3>
            <p className="text-gray-600">
              Track record of proven results – we enhance sales, increase visibility, and provide better ROI through our
              specialized services and strategies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              We offer 24/7 support, continuous assistance, timely issue resolution, and optimal performance for your
              operation around the clock on the platform.
            </p>
          </div>
        </div>

        <div className="hidden mt-12 text-center">
          <a href="#contact" className="green-button">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

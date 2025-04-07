import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f0f0ff]">
      <div className="container">
        <div className="mb-16">
          <div className="text-sm text-gray-500 mb-2">TESTIMONIALS</div>
          <h2 className="text-4xl font-bold mb-4">What our clients say</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Don't just take our word for it. See what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="testimonial-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Client"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">CEO, TechGadgets</p>
              </div>
            </div>
            <div className="text-yellow-400 mb-4">★★★★★</div>
            <blockquote className="text-gray-600">
              "The team at AdNativ has been phenomenal. They've helped us increase our Amazon sales by over 200% in just
              3 months. Their strategic approach to PPC and listing optimization has transformed our business."
            </blockquote>
          </div>

          <div className="testimonial-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Client"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Michael Rodriguez</h3>
                <p className="text-sm text-gray-500">Founder, EcoProducts</p>
              </div>
            </div>
            <div className="text-yellow-400 mb-4">★★★★★</div>
            <blockquote className="text-gray-600">
              "Working with AdNativ has been a game-changer for our brand. Their data-driven approach and attention to
              detail have helped us achieve a 350% increase in conversion rate and significantly improved our ROI."
            </blockquote>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="text-yellow-400 text-2xl">★★★★★</div>
            <span className="ml-2 font-bold">5.0 average rating</span>
          </div>
          <p className="text-gray-600">Based on 5000+ client reviews</p>
        </div>
      </div>
    </section>
  )
}


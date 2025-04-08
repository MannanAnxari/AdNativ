import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What our Clients says</h2>
        </div>

        <div className="max-w-3xl mx-auto">
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
                <h3 className="font-bold">Margot P.</h3>
                <p className="text-sm text-gray-500">CEO, Kitchen Essentials</p>
              </div>
            </div>
            <div className="text-yellow-400 mb-4">★★★★★</div>
            <blockquote className="text-gray-600 mb-6">
              "The team at AdNativ has been phenomenal. They've helped us increase our Amazon sales by over 200% in just
              3 months. Their strategic approach to PPC and listing optimization has transformed our business. I highly
              recommend their services to any Amazon seller looking to grow their business."
            </blockquote>
            <div className="flex justify-between">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

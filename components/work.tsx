import { ArrowRight } from "lucide-react"

export default function Work() {
  return (
    <section className="section-padding" id="work">
      <div className="container">
        <div className="mb-16">
          <div className="text-sm text-gray-500 mb-2">OUR WORK</div>
          <h2 className="text-4xl font-bold mb-4">Our work drives businesses forward</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            See how we've helped businesses like yours achieve exceptional results on Amazon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="case-study-card purple">
            <div className="mb-4 text-xs font-medium bg-white/20 inline-block px-2 py-1 rounded">Case Study</div>
            <h3 className="text-3xl font-bold mb-4">+740%</h3>
            <p className="text-white/80 mb-6">
              How we helped an electronics brand increase their Amazon sales by 740% in just 6 months.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-white border border-white/30 rounded-full px-4 py-2 hover:bg-white/10"
              >
                Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="case-study-card black">
            <div className="mb-4 text-xs font-medium bg-white/20 inline-block px-2 py-1 rounded">Case Study</div>
            <h3 className="text-3xl font-bold mb-4">+450% ROAS</h3>
            <p className="text-white/80 mb-6">
              How our PPC strategy delivered a 450% return on ad spend for a beauty brand.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-white border border-white/30 rounded-full px-4 py-2 hover:bg-white/10"
              >
                Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contact" className="black-button">
            View all case studies <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}


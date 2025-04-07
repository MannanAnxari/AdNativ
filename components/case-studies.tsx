import { ArrowRight } from "lucide-react"

export default function CaseStudies() {
  return (
    <section className="py-20" id="case-studies">
      <div className="container">
        <div className="mb-12">
          <div className="text-sm text-gray-500 mb-2">OUR WORK</div>
          <h2 className="text-3xl font-bold mb-4">Our work drives businesses forward</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="case-study-card purple">
            <div className="mb-4 text-xs font-medium bg-white/20 inline-block px-2 py-1 rounded">Case Study</div>
            <h3 className="text-2xl font-bold mb-4">+740%</h3>
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

          <div className="case-study-card gray">
            <div className="mb-4 text-xs font-medium bg-white/20 inline-block px-2 py-1 rounded">Case Study</div>
            <h3 className="text-2xl font-bold mb-4">+450% ROAS</h3>
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
          <a href="#contact" className="outline-button inline-block">
            View all case studies
          </a>
        </div>
      </div>
    </section>
  )
}


import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Button from "./Button"

export default function CaseStudies() {
  return (
    <section className="py-16 md:py-20 bg-custom-gradient" id="case-studies">
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Unlock Bigger PROFITS with Our Amazon Strategies!
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
              See the real results we've achieved for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Case Study 1 */}
            <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <div className="max-w-[80%]">
                  <h3 className="text-lg md:text-xl font-bold">
                   $750K Sales in 30 Days Across North America
                  </h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/2">
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Our region-specific optimization strategies helped this Amazon seller expand across the
U.S., Canada, and Mexico — unlocking <strong>$750,008.57 sales</strong> from 48,597 units sold in
just 30 days. Segmented PPC, localized listings, and streamlined FBA logistics fueled
cross-border growth at scale.
                  </p>

                  <div className="mb-4 md:mb-6">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
                      <span>0</span>
                      <span>$750K</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg md:text-xl">$750K </span>{" "}
                      <span className="text-sm md:text-base text-gray-500">Sales</span>
                    </div>
                    <a href="#" className="text-xs md:text-sm font-medium text-purple-600 flex items-center group">
                      View case study{" "}
                      <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 h-[180px] md:h-auto rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Analytics dashboard showing sales growth"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <div className="max-w-[80%]">
                  <h3 className="text-lg md:text-xl font-bold">
                  $23K+ Sales at Just 11.28% ACoS
                  </h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/2">
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  This April campaign generated <strong>$23,850.40 sales</strong> from only $2,691.10 ad spend —
achieving a lean <strong>11.28% ACoS</strong> across 1.25M+ impressions. With daily bid optimization
and strategic targeting, we maximized visibility while keeping ad spend ultra-efficient.
                  </p>

                  <div className="mb-4 md:mb-6">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
                      <span>0</span>
                      <span>$23,850.40</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg md:text-xl">11.28% </span>{" "}
                      <span className="text-sm md:text-base text-gray-500">ACoS</span>
                    </div>
                    <a href="#" className="text-xs md:text-sm font-medium text-blue-600 flex items-center group">
                      View case study{" "}
                      <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 h-[180px] md:h-auto rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                    alt="Conversion rate analytics dashboard"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

         

          </div>

          <div className="text-center">
            <Button text="Get Similar Results" href="#feedbacks" type="button" showArrow />
          </div>
        </div>
      </div>
    </section>
  )
}
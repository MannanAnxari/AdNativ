import Image from "next/image"
import Button from "./Button"

export default function Process() {
  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 rounded-2xl md:rounded-3xl bg-[#f8f8f8] my-8 md:mt-12 md:mb-12"
      id="process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our 3 Step Process</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            We follow a proven methodology to ensure your success on Amazon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-16">
          {/* Left Column - Process Steps */}
          <div className="md:col-span-3 space-y-6 md:space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gray-50 rounded-bl-[80px] md:rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Deep Dive Audit and Diagnosis</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our journey begins with a comprehensive audit of your Amazon storefront and backend systems. We
                      assess every aspect including listings, keywords, backend settings, reviews, and overall
                      performance. Through this analysis, we identify key areas of improvement and untapped growth
                      opportunities, and formulate a custom roadmap to align with your long-term business objectives.
                    </p>
                  </div>
                </div>
                <div className="pl-0 sm:pl-20 mt-4 md:mt-6">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Account Analysis
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Opportunity Mapping
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Strategy Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gray-50 rounded-bl-[80px] md:rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Examining Competitors and Strategy Planning</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      In this phase, we dive into competitive analysis to evaluate your top-performing competitors. We
                      assess their strengths, pricing, ad strategies, and customer engagement to identify market gaps.
                      Using this intelligence, we craft a high-impact strategy focused on positioning your brand as a
                      market leader, boosting visibility, and enhancing profitability.
                    </p>
                  </div>
                </div>
                <div className="pl-0 sm:pl-20 mt-4 md:mt-6">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Competitor Analysis
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Market Gap Identification
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Strategic Planning
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gray-50 rounded-bl-[80px] md:rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Launching and Fine Tuning</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      After planning, we move into execution — launching optimized listings, targeted ad campaigns, and
                      promotional strategies. Our team closely tracks KPIs, conversion rates, and ad performance to make
                      data-driven tweaks in real time. This ensures ongoing optimization, reduced ad spend wastage, and
                      continuous improvement for long-term growth and profitability.
                    </p>
                  </div>
                </div>
                <div className="pl-0 sm:pl-20 mt-4 md:mt-6">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Implementation
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Performance Monitoring
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm">
                      Continuous Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:col-span-2">
            <div className="md:sticky md:top-32 space-y-6 md:space-y-8">
              <div className="rounded-[30px] md:rounded-[40px] overflow-hidden shadow-sm border border-gray-100 h-[300px] sm:h-[400px] md:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Team working on strategy"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-purple-600 text-white p-6 md:p-8 rounded-[30px] md:rounded-[40px]">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Why Our Process Works</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Data-driven approach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Customized strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Continuous optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 max-w-3xl mx-auto">
            Turn Clicks into Sales – Power Up Your Amazon Advertising Game!
          </h2>
          <Button text="Get Started" href="#about" type="button" showArrow />
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Button from './Button'

export default function Process() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 rounded-3xl bg-[#f8f8f8] my-12" id="process">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 3 Step Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            We follow a proven methodology to ensure your success on Amazon.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Left Column - Process Steps */}
          <div className="md:col-span-3 space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Deep Dive Audit and Diagnosis</h3>
                    <p className="text-gray-600">
                      Our journey begins with a comprehensive audit of your Amazon storefront and backend systems. We assess every
                      aspect including listings, keywords, backend settings, reviews, and overall performance. Through this
                      analysis, we identify key areas of improvement and untapped growth opportunities, and formulate a custom
                      roadmap to align with your long-term business objectives.
                    </p>
                  </div>
                </div>
                <div className="pl-20 mt-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Account Analysis</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Opportunity Mapping</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Strategy Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Examining Competitors and Strategy Planning</h3>
                    <p className="text-gray-600">
                      In this phase, we dive into competitive analysis to evaluate your top-performing competitors. We assess
                      their strengths, pricing, ad strategies, and customer engagement to identify market gaps. Using this
                      intelligence, we craft a high-impact strategy focused on positioning your brand as a market leader, boosting
                      visibility, and enhancing profitability.
                    </p>
                  </div>
                </div>
                <div className="pl-20 mt-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Competitor Analysis</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Market Gap Identification</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Strategic Planning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-0"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Launching and Fine Tuning</h3>
                    <p className="text-gray-600">
                      After planning, we move into execution — launching optimized listings, targeted ad campaigns, and promotional
                      strategies. Our team closely tracks KPIs, conversion rates, and ad performance to make data-driven tweaks in
                      real time. This ensures ongoing optimization, reduced ad spend wastage, and continuous improvement for
                      long-term growth and profitability.
                    </p>
                  </div>
                </div>
                <div className="pl-20 mt-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Implementation</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Performance Monitoring</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Continuous Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Right Column - Image */}
          <div className="md:col-span-2">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[40px] overflow-hidden shadow-sm border border-gray-100 h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Team working on strategy"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-purple-600 text-white p-8 rounded-[40px]">
                <h3 className="text-xl font-bold mb-4">Why Our Process Works</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex-shrink-0"></div>
                    <span>Data-driven approach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex-shrink-0"></div>
                    <span>Customized strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex-shrink-0"></div>
                    <span>Continuous optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm text-center">
          <h2 className="text-3xl font-bold mb-6 max-w-3xl mx-auto">
            Turn Clicks into Sales – Power Up Your Amazon Advertising Game!
          </h2>
          <Button text="Get Started" href="#about" type="button" showArrow />
        </div>
      </div>
    </section>
  )
}


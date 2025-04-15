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
                    72% Sales from Ads But Still Healthy 3.5x+ Monthly Improvement
                  </h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/2">
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    We helped this brand achieve a 72% increase in sales through strategic ad campaigns while
                    maintaining a healthy 3.5x return on ad spend.
                  </p>

                  <div className="mb-4 md:mb-6">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
                      <span>0%</span>
                      <span>72%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg md:text-xl">3.5x</span>{" "}
                      <span className="text-sm md:text-base text-gray-500">ROAS</span>
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
                    How Creative Ads Drove 4% Conversion Rate for a Mature Kitchen Brand
                  </h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/2">
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Our creative ad strategies helped this mature kitchen brand achieve a 4% conversion rate,
                    significantly above the industry average.
                  </p>

                  <div className="mb-4 md:mb-6">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
                      <span>1%</span>
                      <span>4%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg md:text-xl">2%</span>{" "}
                      <span className="text-sm md:text-base text-gray-500">Industry Average</span>
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

            {/* Case Study 3 */}
            <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <div className="max-w-[80%]">
                  <h3 className="text-lg md:text-xl font-bold">
                    How a DSP Campaign Helped a Product Reach #1 in Search
                  </h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/2">
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Our DSP (Demand-Side Platform) campaign strategy helped this product reach the #1 position in Amazon
                    search results.
                  </p>

                  <div className="mb-4 md:mb-6">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
                      <span>Page 2</span>
                      <span>Page 1</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg md:text-xl">#1</span>{" "}
                      <span className="text-sm md:text-base text-gray-500">Search Position</span>
                    </div>
                    <a href="#" className="text-xs md:text-sm font-medium text-green-600 flex items-center group">
                      View case study{" "}
                      <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 h-[180px] md:h-auto rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Search ranking analytics dashboard"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <div className="max-w-[80%]">
                  <h3 className="text-lg md:text-xl font-bold">
                    100% Sales Target in 10 Days Later and Doubled Desired ROAS
                  </h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="md:w-1/2">
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    We helped this client reach 100% of their sales target in just 10 days and doubled their desired
                    return on ad spend.
                  </p>

                  <div className="mb-4 md:mb-6">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-gray-500 mt-2">
                      <span>10%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg md:text-xl">2x</span>{" "}
                      <span className="text-sm md:text-base text-gray-500">Target ROAS</span>
                    </div>
                    <a href="#" className="text-xs md:text-sm font-medium text-amber-600 flex items-center group">
                      View case study{" "}
                      <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 h-[180px] md:h-auto rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Sales target analytics dashboard"
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
import { ArrowRight } from "lucide-react"
import Button from "./Button"

export default function CaseStudies() {
  return (
    <section className="py-20 bg-custom-gradient" id="case-studies">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Bigger PROFITS with Our Amazon Strategies!</h2>
          <p className="text-lg text-gray-600 max-w-3xl">See the real results we've achieved for our clients</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Case Study 1 */}
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">72% Sales from Ads But Still Healthy 3.5x+ Monthly Improvement</h3>
              </div>
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>

            <p className="text-gray-600 mb-8">
              We helped this brand achieve a 72% increase in sales through strategic ad campaigns while maintaining a
              healthy 3.5x return on ad spend.
            </p>

            <div className="mb-6">
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: "72%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>0%</span>
                <span>72%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-xl">3.5x</span> <span className="text-gray-500">ROAS</span>
              </div>
              <a href="#" className="text-sm font-medium text-purple-600 flex items-center group">
                View case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">
                  How Creative Ads Drove 4% Conversion Rate for a Mature Kitchen Brand
                </h3>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>

            <p className="text-gray-600 mb-8">
              Our creative ad strategies helped this mature kitchen brand achieve a 4% conversion rate, significantly
              above the industry average.
            </p>

            <div className="mb-6">
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "40%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1%</span>
                <span>4%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-xl">2%</span> <span className="text-gray-500">Industry Average</span>
              </div>
              <a href="#" className="text-sm font-medium text-blue-600 flex items-center group">
                View case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">How a DSP Campaign Helped a Product Reach #1 in Search</h3>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <p className="text-gray-600 mb-8">
              Our DSP (Demand-Side Platform) campaign strategy helped this product reach the #1 position in Amazon
              search results.
            </p>

            <div className="mb-6">
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>0.25%</span>
                <span>0%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-xl">#1</span> <span className="text-gray-500">Search Position</span>
              </div>
              <a href="#" className="text-sm font-medium text-green-600 flex items-center group">
                View case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">100% Sales Target in 10 Days Later and Doubled Desired ROAS</h3>
              </div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            </div>

            <p className="text-gray-600 mb-8">
              We helped this client reach 100% of their sales target in just 10 days and doubled their desired return on
              ad spend.
            </p>

            <div className="mb-6">
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>10%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold text-xl">2x</span> <span className="text-gray-500">Target ROAS</span>
              </div>
              <a href="#" className="text-sm font-medium text-amber-600 flex items-center group">
                View case study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button text="Get Similar Results" href="#feedbacks" type="button" showArrow />
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, BarChart3, ShoppingCart, Zap, CheckCircle } from "lucide-react"

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl">Let Us Take You to the Winning Line.....</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <ShoppingCart className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Amazon Advertising Management</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Customized Keyword Research for Reduced ACoS & Higher CTR</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Ongoing Campaign Optimization & Adjustments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Diversified Ad Strategies for Long-Term Success</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Tailored Solutions for Maximum Business Growth</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Proven Results with Hundreds of Successful Campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Comprehensive Campaign Setup to Capture Every Opportunity</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="flex items-center text-purple-600 font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Amazon Brand Management</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Strategic Brand Positioning for Enhanced Visibility</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>In-Depth Market Analysis & Competitor Insights</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Tailored Brand Store Creation & Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Proactive Review & Reputation Management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Comprehensive Brand Protection & Compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Ongoing Performance Tracking & Growth Strategies</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="flex items-center text-purple-600 font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Amazon Creative Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Custom Product Photography & Enhanced Imagery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>High-Impact Video Production for Brand Storytelling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Conversion-Focused A+ Content Design</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Engaging Amazon Storefront Design & Layout</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Persuasive Copywriting for Optimized Product Listings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span>Consistent Brand Messaging Across All Creatives</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="flex items-center text-purple-600 font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

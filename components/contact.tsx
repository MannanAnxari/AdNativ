import { ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-gray-500 mb-2">CONTACT US</div>
            <h2 className="text-4xl font-bold mb-6">Get a Free consultation to boost your business</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a free consultation with our Amazon marketing experts to discuss your business goals and how we
              can help you achieve them.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">What you'll get:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-1">
                    ✓
                  </div>
                  <span>Comprehensive Amazon strategy tailored to your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-1">
                    ✓
                  </div>
                  <span>Expert advice on optimizing your product listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-1">
                    ✓
                  </div>
                  <span>PPC campaign recommendations to maximize ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-1">
                    ✓
                  </div>
                  <span>Competitive analysis to identify market opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-1">
                    ✓
                  </div>
                  <span>Growth projections based on your current performance</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">6-7</div>
                <p className="text-sm text-gray-600">Average response time (hours)</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">99%</div>
                <p className="text-sm text-gray-600">Customer satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <p className="text-sm text-gray-600">Support availability</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100+</div>
                <p className="text-sm text-gray-600">Countries served</p>
              </div>
            </div>
          </div>

          <div>
            <div className="contact-form-card">
              <div className="mb-6">
                <h3 className="text-xl font-bold">Get your free audit</h3>
                <p className="text-gray-600">Fill out the form below to get started</p>
              </div>

              <form>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="First Name" className="form-input" />
                  <input type="text" placeholder="Last Name" className="form-input" />
                </div>
                <input type="email" placeholder="Email Address" className="form-input" />
                <input type="tel" placeholder="Phone Number" className="form-input" />
                <input type="text" placeholder="Company Name" className="form-input" />
                <input type="url" placeholder="Website URL" className="form-input" />

                <button type="submit" className="black-button w-full">
                  Submit <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


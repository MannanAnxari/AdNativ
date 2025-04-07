export default function CTA() {
  return (
    <section className="py-20" id="contact">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">See how we can help your business grow with digital marketing</h2>
          <p className="text-gray-600 mb-8">
            Schedule a free consultation with our Amazon marketing experts to discuss your business goals.
          </p>
          <a href="#" className="yellow-button inline-block">
            Contact us
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div>
            <div className="text-sm text-gray-500 mb-2">STANDARD RESPONSE TIME</div>
            <div className="text-xl font-bold">6-7 hours</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">CLIENTS</div>
            <div className="text-xl font-bold">6,000+</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">TEAM</div>
            <div className="text-xl font-bold">450+</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">AVERAGE RATING</div>
            <div className="text-xl font-bold">4.9/5</div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Image from "next/image"

export default function DataDriven() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-3xl overflow-hidden mb-8">
          <Image
            src="/team-working.jpg"
            alt="Team working together"
            width={1200}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-gray-500 mb-2">OUR COMMITMENT TO YOU</div>
            <h2 className="text-3xl font-bold mb-6">Data-driven, customer-centric digital services</h2>
            <a href="#services" className="black-button inline-block">
              Learn more
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="service-icon purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">PPC experts</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our team specializes in creating high-performing Amazon PPC campaigns that maximize your ROI.
              </p>
              <a href="#services" className="text-sm font-medium">
                Learn more →
              </a>
            </div>
            <div>
              <div className="service-icon green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Listing optimization</h3>
              <p className="text-gray-600 text-sm mb-4">
                We enhance your product listings to improve visibility and conversion rates.
              </p>
              <a href="#services" className="text-sm font-medium">
                Learn more →
              </a>
            </div>
            <div>
              <div className="service-icon blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Brand analytics</h3>
              <p className="text-gray-600 text-sm mb-4">
                Gain valuable insights into your brand's performance and customer behavior.
              </p>
              <a href="#services" className="text-sm font-medium">
                Learn more →
              </a>
            </div>
            <div>
              <div className="service-icon pink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Customer insights</h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand your customers better to create more effective marketing strategies.
              </p>
              <a href="#services" className="text-sm font-medium">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

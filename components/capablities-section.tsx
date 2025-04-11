import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section className="bg-custom-gradient py-16 md:py-24 mt-[330px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Section */}
        <div className="mb-12 flex justify-center">
          <div className="rounded-2xl overflow-hidden w-full -mt-[20%] -translate-y-[20%]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L6NMw8B1DTQtYbb4vJQiX9ij94mmSV.png"
              alt="Team collaborating at a design table with laptops and creative materials"
              width={1000}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-black">
            OUR CAPABILITIES
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mb-8 text-black">
            Data-driven, customer-centric digital services
          </h1>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium"
          >
            VIEW ALL SOLUTIONS
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-full bg-[#f2f0ff] flex items-center justify-center mb-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 3.5C4.91015 3.5 2 6.41015 2 10C2 13.5899 4.91015 16.5 8.5 16.5C12.0899 16.5 15 13.5899 15 10H8.5V3.5Z"
                    fill="#6366F1"
                  />
                  <path
                    d="M10 2V8.5H16.5C16.5 5.18629 13.8137 2.5 10.5 2.5C10.3329 2.5 10.1666 2.50673 10 2.52L10 2Z"
                    fill="#6366F1"
                  />
                  <path
                    d="M16.5 10C16.5 10.1671 16.4933 10.3334 16.48 10.5H17C17.2761 10.5 17.5 10.2761 17.5 10C17.5 9.72386 17.2761 9.5 17 9.5H16.48C16.4933 9.66663 16.5 9.83292 16.5 10Z"
                    fill="#6366F1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black">
                Paid search marketing
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              Craft campaigns — built just for your business — to ensure real
              and quantifiable ROI.
            </p>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-wider text-black"
            >
              LEARN MORE
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-full bg-[#f2f0ff] flex items-center justify-center mb-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="#6366F1"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 6V10L13 13"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black">
                Search engine optimization
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              Maintain your best spot on the search results page, so you can
              find new customers and re-engage loyal ones.
            </p>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-wider text-black"
            >
              LEARN MORE
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-full bg-[#f2f0ff] flex items-center justify-center mb-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5.5L9 10.5L17.5 5.5"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2.5"
                    y="5.5"
                    width="15"
                    height="10"
                    rx="1"
                    stroke="#6366F1"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black">Email marketing</h3>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              When it comes to reaching your target audience, you can't get much
              closer than direct to their inboxes.
            </p>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-wider text-black"
            >
              LEARN MORE
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl">
            <div className="mb-6">
              <div className="w-10 h-10 rounded-full bg-[#f2f0ff] flex items-center justify-center mb-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5V17.5"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 7.5L10 2.5L15 7.5"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black">
                Conversion rate optimization
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              Craft campaigns — built just for your business — to ensure real
              and quantifiable ROI.
            </p>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-wider text-black"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

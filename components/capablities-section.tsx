"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";

const services = [
  // First slide - 8 services (2 rows of 4)
  [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 3.5C4.91015 3.5 2 6.41015 2 10C2 13.5899 4.91015 16.5 8.5 16.5C12.0899 16.5 15 13.5899 15 10H8.5V3.5Z"
            fill="#126ad2"
          />
          <path
            d="M10 2V8.5H16.5C16.5 5.18629 13.8137 2.5 10.5 2.5C10.3329 2.5 10.1666 2.50673 10 2.52L10 2Z"
            fill="#126ad2"
          />
          <path
            d="M16.5 10C16.5 10.1671 16.4933 10.3334 16.48 10.5H17C17.2761 10.5 17.5 10.2761 17.5 10C17.5 9.72386 17.2761 9.5 17 9.5H16.48C16.4933 9.66663 16.5 9.83292 16.5 10Z"
            fill="#126ad2"
          />
        </svg>
      ),
      title: "Amazon Brand Management",
      description:
      "We establish, position, and protect your brand’s presence in the Amazon marketplace. Through comprehensive brand health audits and strategic store optimization, we ensure compliance with Amazon’s policies while enhancing visibility, competitiveness, and long-term growth.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="15"
            height="15"
            rx="2"
            stroke="#126ad2"
            strokeWidth="2"
          />
          <path
            d="M6 10H14"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 6V14"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Amazon Listing",
      description:
        "Creating scroll-stopping visuals with clear messaging and targeted storytelling is one of our specialties. Images speak to the buyer's needs and compel them to take action.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="8" stroke="#126ad2" strokeWidth="2" />
          <path
            d="M10 6V10L13 13"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Amazon Advertisement (PPC)",
      description:
        "We focus on driving traffic, reducing ad waste, and enhancing sales velocity with data-driven PPC strategies. What do we focus on? ACoS reduction, improved ROAS, and conversions that are real.",

    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 5.5L9 10.5L17.5 5.5"
            stroke="#126ad2"
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
            stroke="#126ad2"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Amazon A+ Content",
      description:
        "Invest in trust building. Boost conversions. We develop enhanced content that showcases your brand value and tells your product story better than your competitors.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2.5V17.5"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 7.5L10 2.5L15 7.5"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Amazon DSP",
      description:
        "We create data-driven display ads that retarget, expand reach, and build awareness beyond search engines—an excellent option for brands looking to scale quickly.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 5.5H3C2.72386 5.5 2.5 5.72386 2.5 6V14C2.5 14.2761 2.72386 14.5 3 14.5H17C17.2761 14.5 17.5 14.2761 17.5 14V6C17.5 5.72386 17.2761 5.5 17 5.5Z"
            stroke="#126ad2"
            strokeWidth="2"
          />
          <path
            d="M6 8.5H14"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 11.5H12"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Amazon Vendor Central Management",
      description:
        "We help Vendor Central members streamline orders, get the best deals, and protect pricing while keeping their catalogues retail-ready.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
            stroke="#126ad2"
            strokeWidth="2"
          />
          <path
            d="M7.5 10L9.16667 11.6667L12.5 8.33333"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Amazon Private Label (PL)",
      description:
        "Our team helps customers launch their own brand under Amazon's umbrella while keeping scalability and market demand at the core.",
   },


    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
            stroke="#126ad2"
            strokeWidth="2"
          />
          <path
            d="M10 6V10H14"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Amazon FBA Support",
      description:
        "Using our tips, you will be able to navigate FBA safely and efficiently. We'll also help you manage inventory, logistics, and performance metrics so you can avoid delays and maximize efficiency.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 5L10 10L17.5 5"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 10L10 15L17.5 10"
            stroke="#126ad2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Amazon Business Support",
      description:
        "Amazon's B2B platform requires smart positioning. We structure listings, pricing, and strategy to accommodate businesses' procurement-style shopping behavior.",
    },
  ],
  // Add more slides if needed
];

export default function CapabilitiesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="bg-custom-gradient py-16 md:py-24 md:mt-[330px] mt-12"
      id="services"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
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
            Our Dedicated Services
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mb-8 text-black">
            Amazon services customized to meet your brand needs.
            </h1>
            <div className="flex items-center justify-between">
              <Button
                text="Let's grow together"
                href="#services"
                type="button"
                showArrow
              />
              <div className="flex items-center gap-4">
                <button
                  ref={prevRef}
                  className="w-10 h-10 rounded-full border border-black flex items-center justify-center"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  ref={nextRef}
                  className="w-10 h-10 rounded-full border border-black flex items-center justify-center"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Section with Swiper */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              className="pb-12"
            >
              {services.map((slideServices, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {slideServices.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-white p-8 rounded-xl h-full"
                      >
                        <div className="mb-6">
                          <div className="w-10 h-10 rounded-full bg-[#f2f0ff] flex items-center justify-center mb-6">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold text-black">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-6">
                          {service.description}
                        </p>
                        {/* <a href="#" className="text-xs font-bold uppercase tracking-wider text-black">
                        LEARN MORE
                      </a> */}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination mt-6 flex justify-center gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

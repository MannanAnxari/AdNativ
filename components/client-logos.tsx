"use client"

import Image from "next/image"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"

// Sample logos array - you can add more logos as needed
const logos = [
  { src: "/clients/1.png", alt: "Client 1" },
  { src: "/clients/2.png", alt: "Client 2" },
  { src: "/clients/3.png", alt: "Client 3" },
  { src: "/clients/4.png", alt: "Client 4" },
  { src: "/clients/5.png", alt: "Client 5" },
  { src: "/clients/6.png", alt: "Client 6" },
  { src: "/clients/1.png", alt: "Client 1" },
  { src: "/clients/2.png", alt: "Client 2" },
  { src: "/clients/3.png", alt: "Client 3" },
  { src: "/clients/4.png", alt: "Client 4" },
  { src: "/clients/5.png", alt: "Client 5" },
  { src: "/clients/6.png", alt: "Client 6" },
]

export function ClientLogos() {
  // For handling Swiper initialization
  const swiperRef = useRef(null)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-7xl border-centered pt-32">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Brands</h2>
          <p className="text-muted-foreground">The best brands choose FivePerks</p>
        </div>

        {/* Logo Slider */}
        <div className="mb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="logo-swiper"
            ref={swiperRef}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="invert"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
 
      </div>
    </section>
  )
}

"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "The entire staff at Numerique has been phenomenal. They are quick with their replies and incredibly helpful.",
      author: "Edward Kennedy",
      position: "Director, Client Experience",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "Working with this team has transformed our digital presence. Their strategic approach and attention to detail is unmatched.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "The results speak for themselves. Our conversion rates have doubled since we started working with this amazing team.",
      author: "Michael Chen",
      position: "E-commerce Manager",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#f8f8f8] rounded-3xl max-w-7xl mx-auto my-12 overflow-hidden" id="feedbacks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8  py-16">
        {/* Stats Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            The proof is in the numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-6">
                <div className="absolute inset-0 rounded-full border border-indigo-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold">37%</div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3V13M8 13L4 9M8 13L12 9"
                      stroke="#6366F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center text-sm">
                Average increase in sales for
                <br />
                our clients
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-6">
                <div className="absolute inset-0 rounded-full border border-indigo-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold">100%</div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3V13M8 13L4 9M8 13L12 9"
                      stroke="#6366F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center text-sm">
                Google and Facebook-
                <br />
                certified team
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-6">
                <div className="absolute inset-0 rounded-full border border-indigo-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold">81%</div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3V13M8 13L4 9M8 13L12 9"
                      stroke="#6366F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-center text-sm">
                Results improved compared
                <br />
                to previous agencies
              </p>
            </div>

            {/* Leads Box */}
            <div className="bg-[#e7f2ff] rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-1">
                  282,000+
                </h3>
                <p className="text-sm">Leads generated so far...</p>
              </div>
              <Button text="Contact Us" href="#about" type="button" showArrow />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative bg-white rounded-3xl p-16">
          {/* Left Side - Testimonial */}
          <div>
            <div className="text-6xl text-blue-500 font-serif mb-6">"</div>
            <div className="min-h-[160px]">
              <p className="text-xl italic mb-8">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <p className="font-bold">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-sm">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Reviews */}
          <div className="flex flex-col justify-end items-end">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm">5000+ Client reviews</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="https://numerique.vamtam.com/wp-content/uploads/2023/05/pexels-mikhail-nilov-9301512-300x300.jpg"
                    alt="Client"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="https://numerique.vamtam.com/wp-content/uploads/2023/05/pexels-mikhail-nilov-9301512-300x300.jpg"
                    alt="Client"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="https://numerique.vamtam.com/wp-content/uploads/2023/05/pexels-mikhail-nilov-9301512-300x300.jpg"
                    alt="Client"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="https://numerique.vamtam.com/wp-content/uploads/2023/05/pexels-mikhail-nilov-9301512-300x300.jpg"
                    alt="Client"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </div>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-medium"
              >
                View all reviews <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Dotted Arrow */}
          <div className="absolute right-[10%] top-[35%] transform -translate-y-1/2 hidden lg:block">
            <Image
              src="https://numerique.vamtam.com/wp-content/uploads/2023/05/Line-arrow-2.svg"
              alt="Dotted arrow"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

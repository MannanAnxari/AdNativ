import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero-section bg-custom-gradient">
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">

          {/* Heading and subtitle */}
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-syne">
            Amazon Services That Grow Your Sales —
            Faster
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We help brands dominate the Amazon jungle smartly and profitably!
            </p>
            <div className="mt-8">
              <Button text="Contact Us Now" href="#contact" type="button" showArrow />
            </div>
          </div>

          <div>
            <div className="w-full">
              <div className="hidden md:block">
                <Image
                  src="/_hero.png"
                  alt="Desktop version"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
              <div className="md:hidden">
                <Image
                  src="/heroPhone.png"
                  alt="Mobile version"
                  width={600}
                  height={300}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-16 py-6 hero-last-section pb-[5rem]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* First section - Thriving Community */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <span className="text-purple-500 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Talk to a Talented Team</h3>
                  {/* <p className="text-gray-600 text-sm">Amazon Sellers</p> */}
                </div>
              </div>

              {/* Middle section - Connect with experts */}
              <div className="md:flex hidden items-center justify-center gap-4">
                <button className="font-medium flex items-center gap-2">
                To Build Your Next Win <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Last section - Contracted Expertise */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left md:text-right md:justify-end gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 md:order-last">
                  <span className="text-blue-500 text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Expertise That Scales With You</h3>
                  {/* <p className="text-gray-600 text-sm">For Premier Retailers</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden mt-16 py-6 border-t border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
                      alt="Team member"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
                      alt="Team member"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
                      alt="Team member"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>
                <button className="font-medium flex items-center gap-2">
                  Connect our experts <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold">2,120,240,368</h3>
                <p className="text-sm">Revenue driven for our clients</p>
              </div>

              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <p className="text-sm">5000+ Client reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero-section pt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading and subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-syne">Marketing without borders</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Amplify your business with our data-centric, performance-driven digital marketing solutions.
          </p>
        </div>

        {/* Main hero content */}
        <div className="relative hidden">
          {/* Main content layout with gap between images */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left megaphone image */}
            <div className="w-full md:w-[42%]">
              <Image
                src="/megaphone-3d.png"
                alt="Marketing megaphone"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Right waves image */}
            <div className="w-full md:w-[58%] md:mt-8">
              <Image
                src="/waves-3d.png"
                alt="Abstract waves"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Curved arrow pointing to trophy */}
          <div className="absolute right-[20%] top-[-8%] hidden md:block">
            <Image src="/curved-arrow.png" alt="Curved arrow" width={250} height={120} className="object-contain" />
          </div>

          {/* Trophy award box */}
          <div className="absolute right-0 top-[5%] hidden md:block">
            <div className="relative">
              <Image src="/trophy-3d.png" alt="Trophy" width={120} height={120} className="object-contain" />
              <div className="absolute bottom-0 left-0 text-center w-full">
                <p className="text-center text-gray-700 font-medium text-sm">
                  Award
                  <br />
                  Wining
                  <br />
                  Agency
                </p>
              </div>
            </div>
          </div>

          {/* Center yellow CTA box */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[280px]">
            <div className="bg-[#ffc107] rounded-[32px] p-6 md:p-8">
              <h3 className="font-bold mb-4 text-black text-center">Get Your Free Audit Today</h3>
              <button className="bg-black text-white rounded-full py-2 px-6 font-medium flex items-center gap-2 mx-auto">
                LET'S TALK <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full">
            <Image
              src="/hero.png"
              alt="Abstract waves"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 py-6 border-t border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team experts */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Team member"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Team member"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
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

            {/* Revenue stats */}
            <div className="text-center">
              <h3 className="text-4xl font-bold">2,120,240,368</h3>
              <p className="text-sm">Revenue driven for our clients</p>
            </div>

            {/* Reviews */}
            <div className="flex items-center justify-center md:justify-end gap-2">
              <div className="flex">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm">5000+ Client reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


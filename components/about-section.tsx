// import { ArrowRight } from "lucide-react"

// export default function AboutSection() {
//   return (
//     <section className="py-20" id="about">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
//           <p className="text-lg text-gray-600 max-w-3xl">
//             Take a bold step forward with AdNativ. We help businesses grow through innovative Amazon marketing
//             strategies.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Take a bold step forward with AdNativ</h3>
//             <p className="text-gray-600 mb-6">
//               We're a team of Amazon marketing specialists dedicated to helping businesses like yours succeed on the
//               world's largest marketplace. With our data-driven approach and years of experience, we deliver exceptional
//               results that drive growth and increase profitability.
//             </p>
//             <a href="#contact" className="green-button">
//               Get Started <ArrowRight className="h-4 w-4" />
//             </a>
//           </div>

//           <div className="grid grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="text-3xl font-bold mb-2">5+</div>
//               <p className="text-sm text-gray-600">Years of Experience</p>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold mb-2">6,000+</div>
//               <p className="text-sm text-gray-600">Clients Served</p>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold mb-2">43M+</div>
//               <p className="text-sm text-gray-600">Revenue Generated</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function WhatWeDoSection() {
  return (
    <section className="bg-white" id="about">
      <div className="mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 ">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-5">
            What makes Fiveperks different?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
                We don't guess. We analyze, act, and adjust. 
                </h1>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-base md:text-lg text-gray-700 mb-10">
                Fiveperks helps Amazon sellers become <strong>top-ranked</strong> from <strong>just being listed</strong>. We're not
just another marketing agency. We're committed to assisting brands to sell smarter,
scale faster, and dominate their categories on Amazon.
                </p>

                <div>
                  <a href="#" className="inline-block font-bold relative">
                    MORE ABOUT US
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-[40px] border border-gray-200 p-10 relative">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-0">Full Service Without Fluff:</h3>
              </div>

              <p className="text-gray-700">
              We don't just give advice, we implement, measure, and improve.

              </p>

              <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6 14.4C19.2 13.8 19.5 13.05 19.5 12.3C19.5 11.4 19.05 10.65 18.45 10.05C18.45 10.05 18.45 10.05 18.45 10.05C18.45 10.05 18.45 10.05 18.45 10.05C17.85 9.45 17.1 9 16.2 9C15.45 9 14.7 9.3 14.1 9.9L12 12L9.9 9.9C9.3 9.3 8.55 9 7.8 9C6.9 9 6.15 9.45 5.55 10.05C5.55 10.05 5.55 10.05 5.55 10.05C5.55 10.05 5.55 10.05 5.55 10.05C4.95 10.65 4.5 11.4 4.5 12.3C4.5 13.05 4.8 13.8 5.4 14.4L12 21L18.6 14.4Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-[40px] border border-gray-200 p-10 relative">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-0">Data-First Decisions:</h3>
              </div>
              <p className="text-gray-700">
              Every decision we make is based on performance analytics and buyer behavior insights.
              </p>

              <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21H3V3H4.5V19.5H21V21Z" fill="#4F46E5" />
                  <path d="M19.5 4.5H15V16.5H19.5V4.5Z" fill="#4F46E5" />
                  <path d="M13.5 9H9V16.5H13.5V9Z" fill="#4F46E5" />
                  <path d="M7.5 12H3V16.5H7.5V12Z" fill="#4F46E5" />
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-[40px] border border-gray-200 p-10 relative">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-0">Full <br />Transparency</h3>
              </div>

              <p className="text-gray-700">
              We provide transparent reporting and communication at every step.
              </p>

              <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    fill="#10B981"
                    fillOpacity="0.2"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V12"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 12H12"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import { useState } from "react"

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState("transparency")

  return (
    <section className="py-20 purple-light-bg">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <div className="flex space-x-2 mb-8">
                <button
                  className={`tab-button ${activeTab === "transparency" ? "active" : ""}`}
                  onClick={() => setActiveTab("transparency")}
                >
                  Transparency
                </button>
                <button
                  className={`tab-button ${activeTab === "results" ? "active" : ""}`}
                  onClick={() => setActiveTab("results")}
                >
                  Results & metrics
                </button>
                <button
                  className={`tab-button ${activeTab === "about" ? "active" : ""}`}
                  onClick={() => setActiveTab("about")}
                >
                  About us
                </button>
              </div>

              {activeTab === "transparency" && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">100% Campaign transparency</h2>
                  <p className="text-gray-600 mb-6">
                    We believe in complete transparency. You'll always know exactly how your campaigns are performing
                    and where your budget is going.
                  </p>
                  <div className="chart-container bg-white rounded-xl p-4 mb-6">
                    <div className="chart-line"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              )}

              {activeTab === "results" && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">Measurable results</h2>
                  <p className="text-gray-600 mb-6">
                    Our data-driven approach ensures that you can see the direct impact of our marketing strategies on
                    your business growth.
                  </p>
                  <div className="bg-white rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold">215%</div>
                        <div className="text-sm text-gray-500">Average sales increase</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">4.2x</div>
                        <div className="text-sm text-gray-500">Average ROAS</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "about" && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">Why AdNativ is your top-choice</h2>
                  <p className="text-gray-600 mb-6">
                    We combine industry expertise with data-driven strategies to deliver exceptional results for our
                    clients across multiple Amazon marketplaces.
                  </p>
                  <div className="bg-white rounded-xl p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
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
                          className="text-purple-600 mt-1"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Amazon marketing specialists with years of experience</span>
                      </li>
                      <li className="flex items-start gap-3">
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
                          className="text-purple-600 mt-1"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Data-driven approach to maximize ROI</span>
                      </li>
                      <li className="flex items-start gap-3">
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
                          className="text-purple-600 mt-1"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Transparent reporting and communication</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <a href="#contact" className="black-button inline-block">
              Get started
            </a>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Why AdNativ is your top-choice</h2>
            <p className="text-gray-600 mb-8">
              Our team of Amazon marketing specialists brings decades of combined experience to help your business
              succeed on the world's largest marketplace.
            </p>
            <div className="bg-white rounded-xl p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-xl">99%</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Client satisfaction rate</h3>
                <p className="text-gray-600 mb-6">Our clients love the results we deliver</p>
                <a href="#contact" className="black-button">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

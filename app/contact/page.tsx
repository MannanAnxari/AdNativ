"use client"

import type React from "react"
import { useState } from "react"
import FooterSection from "@/components/footer"
import Header from "@/components/header"
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    })

    const [formState, setFormState] = useState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false,
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Reset form state if user starts typing again after submission
        if (formState.isSubmitted || formState.isError) {
            setFormState({
                isSubmitting: false,
                isSubmitted: false,
                isError: false,
                message: "",
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Set loading state
        setFormState({
            isSubmitting: true,
            isSubmitted: false,
            isError: false,
            message: "",
        })

        try {
            // Send data to PHP API
            const response = await fetch("/api/send-email.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                // Success state
                setFormState({
                    isSubmitting: false,
                    isSubmitted: true,
                    isError: false,
                    message: data.message || "Thank you for your message! We will get back to you soon.",
                })

                // Reset form data on success
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                })
            } else {
                // Error state with server message
                setFormState({
                    isSubmitting: false,
                    isSubmitted: false,
                    isError: true,
                    message: data.message || "Something went wrong. Please try again.",
                })
            }
        } catch (error) {
            // Network or other error
            setFormState({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: "Failed to connect to the server. Please check your internet connection and try again.",
            })
            console.error("Error submitting form:", error)
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main>
                <section className="py-20 bg-custom-gradient" id="contact">
                    <div className="mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-28">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                                {/* Left Column - Contact Info */}
                                <div className="space-y-8">
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium uppercase tracking-wider text-black mb-4 relative inline-block">
                                            CONTACT
                                            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-purple-600"></span>
                                        </h4>
                                        <h1 className="text-5xl md:text-6xl font-bold leading-none mb-8">
                                            We're here to help

                                            you grow
                                        </h1>
                                        <p className="text-gray-800 max-w-lg text-base leading-relaxed">
                                            Feel free to reach out to us through your preferred method of contact. We are eager to connect
                                            with you and explore how our digital marketing team can contribute to your success.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white rounded-3xl p-10 shadow-lg transform transition-transform hover:scale-[1.02]. duration-300">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                <div className="group">
                                                    <h3 className="text-sm text-gray-600 mb-2">Phone number</h3>
                                                    <a
                                                        href="tel:+1-888-400-5050"
                                                        className="text-lg font-medium relative inline-block group-hover:text-purple-600 transition-colors"
                                                    >
                                                        888-400-5050
                                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                                    </a>
                                                </div>

                                                <div className="group">
                                                    <h3 className="text-sm text-gray-600 mb-2">Email address</h3>
                                                    <a
                                                        href="mailto:marketing@numerique.com"
                                                        className="text-lg font-medium relative inline-block group-hover:text-purple-600 transition-colors"
                                                    >
                                                        marketing@numerique.com
                                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-3xl p-6 shadow-lg transform transition-transform hover:scale-[1.02]. duration-300">
                                            <div className="flex items-start gap-5">
                                                <div className="flex-shrink-0 p-4 bg-slate-100 rounded-full">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="17"
                                                        height="24"
                                                        viewBox="0 0 17 24"
                                                        className="w-6 h-6"
                                                    >
                                                        <g fillRule="nonzero" fill="none">
                                                            <path d="M11.08.4A8.53 8.53 0 0 0 1.99 3l4 3.3L11.09.4Z" fill="#1A73E8"></path>
                                                            <path
                                                                d="M1.99 3A8.3 8.3 0 0 0 0 8.35c0 1.57.31 2.84.85 3.98L6 6.31 1.99 2.99Z"
                                                                fill="#EA4335"
                                                            ></path>
                                                            <path
                                                                d="M8.5 5.17c1.8 0 3.26 1.43 3.26 3.2 0 .78-.3 1.5-.78 2.07l5.06-5.93A8.44 8.44 0 0 0 11.08.4L6 6.3a3.32 3.32 0 0 1 2.5-1.13"
                                                                fill="#4285F4"
                                                            ></path>
                                                            <path
                                                                d="M8.5 11.56a3.23 3.23 0 0 1-3.26-3.2c0-.78.28-1.5.76-2.05L.85 12.34c.88 1.93 2.35 3.48 3.86 5.42l6.27-7.34c-.6.71-1.49 1.14-2.48 1.14"
                                                                fill="#FBBC04"
                                                            ></path>
                                                            <path
                                                                d="M10.87 19.8C13.71 15.42 17 13.44 17 8.36c0-1.4-.35-2.7-.96-3.86L4.71 17.76c.48.62.98 1.33 1.45 2.05C7.9 22.44 7.41 24 8.52 24c1.1 0 .62-1.58 2.35-4.2"
                                                                fill="#34A853"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center">
                                                    <p className="text-lg font-medium">
                                                        915 Broadway Ste 501, New
                                                        <br /> York, NY 10010
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="inline-block text-sm font-medium mt-2 sm:mt-0 border-b border-black hover:text-purple-600 hover:border-purple-600 transition-colors"
                                                    >
                                                        VIEW ON MAP
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Contact Form */}
                                <div className="relative">
                                    {/* Star icon with animation */}
                                    <div className="absolute -top-4 -right-4 z-10 animate-pulse">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 0L25.8 14.2L40 20L25.8 25.8L20 40L14.2 25.8L0 20L14.2 14.2L20 0Z" fill="black" />
                                        </svg>
                                    </div>

                                    {/* Form card with curved edge */}
                                    <div className="relative group">
                                        {/* Main white card */}
                                        <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-10 relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                            {/* Form Status Messages */}
                                            {formState.isSubmitted && (
                                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-green-800">{formState.message}</p>
                                                </div>
                                            )}

                                            {formState.isError && (
                                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-red-800">{formState.message}</p>
                                                </div>
                                            )}

                                            <form className="space-y-6" onSubmit={handleSubmit}>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Name"
                                                        required
                                                        disabled={formState.isSubmitting}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all duration-300
                                disabled:opacity-70 disabled:cursor-not-allowed"
                                                    />
                                                </div>

                                                <div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Email"
                                                        required
                                                        disabled={formState.isSubmitting}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all duration-300
                                disabled:opacity-70 disabled:cursor-not-allowed"
                                                    />
                                                </div>

                                                <div>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        placeholder="Company name"
                                                        disabled={formState.isSubmitting}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all duration-300
                                disabled:opacity-70 disabled:cursor-not-allowed"
                                                    />
                                                </div>

                                                <div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Phone number"
                                                        disabled={formState.isSubmitting}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all duration-300
                                disabled:opacity-70 disabled:cursor-not-allowed"
                                                    />
                                                </div>

                                                <div>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="What can we help you with?"
                                                        rows={4}
                                                        required
                                                        disabled={formState.isSubmitting}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                            transition-all duration-300 resize-none
                                disabled:opacity-70 disabled:cursor-not-allowed"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={formState.isSubmitting}
                                                    className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium 
                            flex items-center justify-center relative overflow-hidden group
                            disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {formState.isSubmitting ? (
                                                        <span className="flex items-center">
                                                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                                            SENDING...
                                                        </span>
                                                    ) : (
                                                        <span className="relative flex items-center">
                                                            GET IN TOUCH
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                                            >
                                                                <path
                                                                    d="M4.16669 10H15.8334"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M10 4.16669L15.8333 10L10 15.8334"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </button>
                                            </form>
                                        </div>

                                        {/* Black curved edge */}
                                        <div className="absolute bottom-0 right-0 w-full h-full z-0 transition-transform duration-500">
                                            <div className="absolute -bottom-3 -right-3 w-[calc(100%-10px)] h-[calc(100%-10px)] bg-black rounded-[40px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </div>
    )
}

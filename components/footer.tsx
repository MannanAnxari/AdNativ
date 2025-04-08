import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            {/* <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              <span className="navbar-logo uppercase">AdNativ</span>
            </div> */}
            <Link href="/" className="flex items-center gap-2 mb-7">
              <Image
                src="/logo.png"
                alt="AdNativ Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Lead your way towards profitable success on Amazon with our expert marketing strategies and data-driven
              approach.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#case-studies"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Amazon SEO
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> PPC Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Listing Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Brand Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-gray-400">info@adnativ.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Marketing Street, Digital City</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
                />
                <button className="bg-purple-600 text-white px-3 py-2 rounded-r-md">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 AdNativ. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 text-sm hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

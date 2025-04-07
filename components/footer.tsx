import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Amazon SEO
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  PPC Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Listing Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Brand Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Review Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  info@adnativ.com
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  +1 (234) 567-890
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black text-sm">
                  123 Marketing Street, Digital City
                </Link>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white"
              >
                <Twitter size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white"
              >
                <Linkedin size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 AdNativ. All rights reserved. Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}


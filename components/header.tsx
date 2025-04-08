"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Make header visible when scrolling up or at top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <header
      className={`
        sticky top-0 z-50 bg-white/80 backdrop-blur-sm
        transition-all duration-300 border-b
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${prevScrollPos > 10 ? 'py-3 shadow-sm' : 'py-5'}
      `}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AdNativ Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
            About Us
          </Link>
          <Link href="#case-studies" className="text-gray-700 hover:text-purple-600 transition-colors">
            Case Studies
          </Link>
          <Link href="#process" className="text-gray-700 hover:text-purple-600 transition-colors">
            Process
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="green-button">
            Free Audit <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="#case-studies" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="#process" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Process
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href="#contact" className="green-button inline-flex" onClick={() => setIsMenuOpen(false)}>
              Free Audit <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-black"
        }`}
      style={{ position: 'sticky' }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 py-4">
          <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center border border-white">
            <span className="text-white text-lg font-bold">A</span>
          </div>
          <span className="navbar-logo uppercase text-white">AdNativ</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="navbar-link text-white hover:text-gray-300 transition-colors">
            H.
          </Link>
          <Link href="#services" className="navbar-link text-white hover:text-gray-300 transition-colors">
            Marketing Solutions
          </Link>
          <Link href="#about" className="navbar-link text-white hover:text-gray-300 transition-colors">
            Who We Are
          </Link>
          <Link href="#work" className="navbar-link text-white hover:text-gray-300 transition-colors">
            Work
          </Link>
          <Link href="#contact" className="navbar-link text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        <div>
          <a
            href="#contact"
            className="free-audit-button bg-black text-white border border-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
          >
            Free Audit <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Button from "./Button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)

      // Determine active section based on scroll position
      const sections = ["home", "services", "about", "case-studies", "process", "feedbacks"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Process", href: "#process" },
    { name: "Feedbacks", href: "#feedbacks" },
  ]

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 w-full
          transition-all duration-300 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
          ${prevScrollPos > 10 ? "py-3 bg-white shadow-md border-b border-gray-100" : "py-4 bg-white md:bg-[#e0f1ff]"}
        `}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-40 flex items-center gap-2">
              <Image src="/logo.png" alt="AdNativ Logo" width={140} height={40} className="h-8 md:h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-full transition-colors
                      ${activeSection === item.href.replace("#", "") || (item.href === "/" && activeSection === "home")
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button text="Free Audit" href="/contact" type="button" showArrow />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-40 flex items-center justify-center w-10 h-10 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Completely separate mobile menu component */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <Image src="/logo.png" alt="AdNativ Logo" width={140} height={40} className="h-8 w-auto" />
            </Link>
            <button onClick={closeMenu} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close menu">
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <nav className="mb-8">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`
                        block text-base font-medium py-3 px-4 rounded-lg transition-colors
                        ${activeSection === item.href.replace("#", "") ||
                          (item.href === "/" && activeSection === "home")
                          ? "bg-blue-50 text-blue-500 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                        }
                      `}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto">
              <Button
                text="Free Audit"
                href="#feedbacks"
                type="button"
                showArrow
                className="w-full justify-center"
                onClick={closeMenu}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

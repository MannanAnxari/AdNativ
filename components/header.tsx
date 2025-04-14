"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Determine active section based on scroll position
      const sections = [
        "home",
        "services",
        "about",
        "case-studies",
        "process",
        "feedbacks",
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-500 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          prevScrollPos > 10
            ? "py-3 bg-white shadow-lg border-b border-gray-100"
            : "py-5 bg-[#ebf5ff]"
        }
      `}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AdNativ Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Case Studies", href: "#case-studies" },
                { name: "Process", href: "#process" },
                { name: "Feedbacks", href: "#feedbacks" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-colors
                    ${
                      activeSection === item.href.replace("#", "") ||
                      (item.href === "/" && activeSection === "home")
                        ? "bg-purple-600 text-white shadow-md"
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
            <Button text="Free Audit" href="#feedbacks" type="button" showArrow />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 bg-white z-40 lg:hidden
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col p-6 pt-24">
          <nav className="flex-1 backdrop-blur-[9px] bg-gray-700 bg-opacity-10 rounded-3xl">
            <ul className="space-y-6">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Case Studies", href: "#case-studies" },
                { name: "Process", href: "#process" },
                { name: "Feedbacks", href: "#feedbacks" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`
                      block text-2xl font-medium py-2 px-4 rounded-lg
                      ${
                        activeSection === item.href.replace("#", "") ||
                        (item.href === "/" && activeSection === "home")
                          ? "bg-purple-100 text-purple-600"
                          : "text-gray-700"
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <Button text="Free Audit" href="#feedbacks" type="button" showArrow />
          </div>
        </div>
      </div>
    </header>
  );
}

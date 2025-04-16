"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ButtonProps {
  text: string
  href?: string
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  showArrow?: boolean
}

export default function Button({
  text,
  href,
  className = "",
  onClick,
  type = "button",
  showArrow = false,
}: ButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center
    bg-black text-white font-medium px-8 py-2.5 rounded-full
    overflow-hidden z-10
    shadow-md
    transition-all duration-300 ease-out
    hover:shadow-lg hover:shadow-black/20 hover:translate-y-[-2px]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
    active:shadow-inner active:translate-y-[1px] active:scale-[0.98]
    group
    ${className}
  `

  const content = (
    <>
      <span
        className={`relative z-10 transition-transform duration-300 ${showArrow ? "group-hover:translate-x-[-2px]" : "group-hover:scale-105"}`}
      >
        {text}
      </span>

      {showArrow && (
        <ArrowRight
          className="
            relative z-10 h-4 w-4 ml-2
            transition-all duration-300
            group-hover:translate-x-[3px] group-hover:scale-110
          "
        />
      )}

      <span
        className="
          absolute inset-0 bg-gradient-to-r from-black to-gray-800
          translate-y-full opacity-0
          transition-all duration-300 ease-out
          group-hover:translate-y-0 group-hover:opacity-100
        "
      ></span>

      <span
        className="
          absolute inset-0 bg-white/10
          scale-0 opacity-0
          transition-all duration-500 ease-out
          group-active:scale-[2.5] group-active:opacity-100 rounded-full
          origin-center
        "
      ></span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {content}
    </button>
  )
}

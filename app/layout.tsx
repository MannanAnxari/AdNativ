import type React from "react"
import type { Metadata } from "next"
import { Syne } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "Fiverperks - Amazon Services Agency",
  description:
  "Amazon services agency specializing in Brand Management, PPC, A+ Content, FBA, and DSP. Boost your sales with faster scaling and improved selling through Fiveperks.",
  // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function TeamSection() {
  return (
    <section className="py-20 bg-[#EAE6FF]">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative rounded-lg overflow-hidden">
            <div className="aspect-square md:aspect-auto md:h-full relative">
              <Image src="/placeholder.svg?height=500&width=500" alt="Team of experts" fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Our Commitment
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Team of over 450 experts</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Our team of Amazon marketing specialists brings decades of combined experience to help your business
              succeed.
            </p>
            <Button asChild className="w-fit rounded-full">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


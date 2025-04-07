import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StatsSection() {
  return (
    <section className="py-20 bg-[#EAE6FF]">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold">5+</span>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold">6,000+</span>
            <p className="text-muted-foreground">Clients Served</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold">43M+</span>
            <p className="text-muted-foreground">Revenue Generated</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild className="rounded-full">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


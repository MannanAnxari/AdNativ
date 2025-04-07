import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import Link from "next/link"

export function GrowthChart() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get on the Roll and Achieve Goals Instantly
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven strategies help businesses like yours achieve sustainable growth and measurable results.
            </p>
            <div>
              <Button asChild className="rounded-full">
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[300px] w-full">
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="w-full">
                      <div className="flex items-end justify-between gap-2">
                        {[40, 65, 55, 70, 85, 75, 90].map((height, i) => (
                          <div key={i} className="w-8 rounded-t-md bg-primary" style={{ height: `${height}px` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg">
              <TrendingUp className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


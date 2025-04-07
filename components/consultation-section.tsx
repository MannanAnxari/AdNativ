import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export function ConsultationSection() {
  return (
    <section className="py-20 bg-primary/10" id="contact">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Get a Free consultation to boost your business
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a free consultation with our Amazon marketing experts to discuss your business goals and how we
              can help you achieve them.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Comprehensive Amazon strategy tailored to your business</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Expert advice on optimizing your product listings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>PPC campaign recommendations to maximize ROI</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Competitive analysis to identify market opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Growth projections based on your current performance</span>
              </li>
            </ul>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Get your free audit</h3>
                  <p className="text-muted-foreground">Fill out the form below to get started</p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Input placeholder="First Name" />
                    </div>
                    <div>
                      <Input placeholder="Last Name" />
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Email Address" type="email" />
                  </div>
                  <div>
                    <Input placeholder="Phone Number" type="tel" />
                  </div>
                  <div>
                    <Input placeholder="Company Name" />
                  </div>
                  <div>
                    <Input placeholder="Website URL" type="url" />
                  </div>
                  <Button type="submit" className="w-full rounded-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-2xl font-bold">6-7</div>
              <p className="text-sm text-muted-foreground">Average response time (hours)</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-2xl font-bold">99%</div>
              <p className="text-sm text-muted-foreground">Customer satisfaction</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-2xl font-bold">24/7</div>
              <p className="text-sm text-muted-foreground">Support availability</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-2xl font-bold">100+</div>
              <p className="text-sm text-muted-foreground">Countries served</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 text-2xl font-bold">5★</div>
              <p className="text-sm text-muted-foreground">Average rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import Image from "next/image"

export default function Insights() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12">
          <div className="text-sm text-gray-500 mb-2">BLOG</div>
          <h2 className="text-3xl font-bold mb-4">Think further with our expert insights</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="aspect-[4/3] relative bg-purple-100">
              <Image src="/placeholder.svg?height=300&width=400" alt="Amazon marketing" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 7, 2025</div>
              <h3 className="text-xl font-bold mb-2">
                The evolution of the Amazon algorithm: What sellers need to know
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how Amazon's search algorithm has evolved and what strategies work best today.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="aspect-[4/3] relative bg-purple-100">
              <Image src="/placeholder.svg?height=300&width=400" alt="PPC strategies" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 5, 2025</div>
              <h3 className="text-xl font-bold mb-2">5 PPC strategies that are revolutionizing Amazon advertising</h3>
              <p className="text-gray-600 text-sm">
                Discover the latest PPC strategies that are delivering exceptional results for Amazon sellers.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="aspect-[4/3] relative bg-purple-100">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Inventory management"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 2, 2025</div>
              <h3 className="text-xl font-bold mb-2">How to optimize your inventory management for Amazon success</h3>
              <p className="text-gray-600 text-sm">
                Learn essential strategies for managing your Amazon inventory to maximize profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

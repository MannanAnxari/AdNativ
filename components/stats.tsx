export default function Stats() {
  return (
    <section className="py-20 purple-light-bg">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">The proof is in the numbers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">37%</div>
            <p className="text-sm text-gray-600">Average increase in conversion rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <p className="text-sm text-gray-600">Client satisfaction rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">81%</div>
            <p className="text-sm text-gray-600">Average increase in organic traffic</p>
          </div>
          <div className="stats-card text-center">
            <div className="text-3xl font-bold mb-2">$82,000+</div>
            <p className="text-sm text-gray-600">Average revenue increase per client</p>
            <a href="#contact" className="black-button text-xs mt-4">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function IdentitySection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6">
            Our Identity & Core Values
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Since 2015, VORP-EA has advocated for justice, equality, and dignity. We believe reconciliation stems from respecting diversity and challenging exclusion.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Respect", desc: "Honouring all perspectives." },
            { title: "Inclusion", desc: "Ensuring marginalized groups lead." },
            { title: "Accountability", desc: "Transparent governance and stewardship." },
            { title: "Innovation", desc: "Adaptive solutions to complex challenges." },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg shadow-md p-6 hover:bg-green-50 transition"
            >
              <h4 className="text-xl font-semibold text-green-700 mb-2">{value.title}</h4>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Guiding Principles */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Our Guiding Principles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Community-led design",
              "Human rights framework",
              "Evidence-based advocacy",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

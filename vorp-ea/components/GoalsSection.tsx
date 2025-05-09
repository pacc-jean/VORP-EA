export default function GoalsSection() {
    const goals = [
      "Facilitate open dialogue among conflicting groups",
      "Train peace ambassadors in local communities",
      "Support trauma healing and mental wellness",
      "Encourage youth leadership and civic engagement",
      "Advocate for justice and human rights reform"
    ]
  
    return (
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Our Goals
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-700 text-lg list-disc list-inside">
            {goals.map((goal, index) => (
              <li key={index} className="leading-relaxed">
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

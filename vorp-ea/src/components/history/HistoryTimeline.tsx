const steps = [
  {
    title: "2024–2025",
    description: "Community consultations in Kilimani, Murang'a, and Kasarani shaped our core pillars.",
  },
  {
    title: "October 2024",
    description: "Official registration; launched first pilot in inter-faith youth dialogues.",
  },
  {
    title: "Early 2025",
    description: "Rolled out VSLA training for aour field agents in Eastleigh, Nairobi.",
  },
  {
    title: "Mid 2025",
    description: "Rolled out Community training for women in Mwiki.",
  },
];

export default function HistoryTimeline() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Journey <em className="italic">thus far</em>
        </h2>

        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-lg">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-8 pb-10 text-left group hover:bg-gray-50 rounded-md transition"
            >
              {/* Circle marker */}
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-green-500 bg-white z-10" />
              {/* Vertical line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-1.5 top-6 h-full w-1 bg-green-200 z-0" />
              )}

              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

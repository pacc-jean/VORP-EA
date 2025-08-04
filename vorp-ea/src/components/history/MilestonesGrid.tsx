const milestones = [
  { year: "2025", detail: "Successfully registered the organisation in Kenya" },
  { year: "2025", detail: "Acquired our first office/training space in Mwiki, Kasarani." },
];

export default function MilestonesGrid() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Milestones & Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-green-600 text-xl font-bold mb-2">{milestone.year}</h3>
              <p className="text-gray-700">{milestone.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

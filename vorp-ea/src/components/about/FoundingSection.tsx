import { Lightbulb, Handshake, Scale, Users } from "lucide-react";

export default function FoundingSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Founding Narrative */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">
            Our Roots, Our Mission
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto my-2" />
          <p className="text-lg md:text-xl text-gray-700">
            Founded in October 2024 and headquartered in Nairobi, VORP-EA is a registered Section 10 NGO dedicated to protecting human rights, fostering reconciliation, and creating equitable opportunities for ethnic, religious, and linguistic minorities across East Africa.
          </p>
        </div>

        {/* Belief Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Trust",
              icon: <Handshake size={32} className="text-green-600 mb-3" />,
              desc: "Building credibility through transparency and honesty.",
            },
            {
              title: "Equity",
              icon: <Scale size={32} className="text-green-600 mb-3" />,
              desc: "Focusing on fairness and justice for the most vulnerable.",
            },
            {
              title: "Collaboration",
              icon: <Users size={32} className="text-green-600 mb-3" />,
              desc: "Working hand-in-hand with communities and partners.",
            },
            {
              title: "Transparency",
              icon: <Lightbulb size={32} className="text-green-600 mb-3" />,
              desc: "Clear communication, open governance, shared impact.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              {item.icon}
              <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

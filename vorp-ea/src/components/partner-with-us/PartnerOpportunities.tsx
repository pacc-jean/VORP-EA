import { Lightbulb, HandCoins, Wrench } from "lucide-react";

const opportunities = [
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "Program Co-Design",
    description:
      "Join us in designing and implementing grassroots initiatives tailored to real needs. From mental health to climate justice, we build together from the ground up.",
  },
  {
    icon: <HandCoins className="w-8 h-8 text-white" />,
    title: "Funding Collaborations",
    description:
      "Support transformative work through grants, CSR programs, or pooled resources that directly benefit marginalized communities and youth-led innovations.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-white" />,
    title: "Technical Expertise",
    description:
      "Offer advisory services, secondments, or short-term placements to strengthen our programs in advocacy, monitoring & evaluation, and policy research.",
  },
];

export default function PartnerOpportunities() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Partnership Opportunities
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We welcome partners who bring resources, skills, and vision. Here are just a few ways you can collaborate with us.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-green-700 text-white p-6 rounded-xl shadow-md transition hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="mb-4">{opportunity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
              <p className="text-sm">{opportunity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

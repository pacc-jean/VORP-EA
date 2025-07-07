import { Building2, Users, BarChart3, Globe } from "lucide-react";

const benefits = [
  {
    icon: <Building2 className="w-8 h-8 text-green-700" />,
    title: "Shared Branding",
    description: "Amplify your visibility through joint campaigns, co-branded initiatives, and aligned messaging across regions.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-700" />,
    title: "Co-Hosted Events",
    description: "Collaborate on summits, roundtables, and grassroots forums with community and institutional stakeholders.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-700" />,
    title: "Data & Insights",
    description: "Access real-time field data, impact metrics, and qualitative research to guide evidence-based programming.",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-700" />,
    title: "Amplified Outreach",
    description: "Leverage our community networks to reach vulnerable groups and scale inclusive solutions across East Africa.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Partner with VORP‑EA?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          From grassroots CBOs to global institutions, partners trust us to deliver impact with integrity, insight, and innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

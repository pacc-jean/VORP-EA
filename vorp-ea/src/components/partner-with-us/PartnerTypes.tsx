import { Users2, Building, Landmark, BookOpenCheck } from "lucide-react";

const partnerTypes = [
  {
    icon: <Users2 className="w-8 h-8 text-green-700" />,
    title: "Community-Based Organizations",
    description:
      "Co-design grassroots initiatives in health, education, and livelihoods with local networks that deeply understand their communities.",
  },
  {
    icon: <Building className="w-8 h-8 text-green-700" />,
    title: "Corporate & Private Sector",
    description:
      "Channel CSR funding into regenerative agriculture, menstrual health, or youth employability—and drive shared value for society and business.",
  },
  {
    icon: <Landmark className="w-8 h-8 text-green-700" />,
    title: "Governments & Multilaterals",
    description:
      "Collaborate on policy reforms in social protection, climate adaptation, and minority rights through technical expertise and program delivery.",
  },
  {
    icon: <BookOpenCheck className="w-8 h-8 text-green-700" />,
    title: "Academic & Research Institutions",
    description:
      "Partner on evidence-based campaigns, impact evaluations, and cross-sector research to build a stronger case for rights-based development.",
  },
];

export default function PartnerTypes() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Who We Partner With
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We work across sectors to build holistic solutions. These are some of the key groups we co-create impact with:
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {partnerTypes.map((type, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{type.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {type.title}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

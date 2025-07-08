import { HeartPulse, GraduationCap, Leaf, ShieldCheck, Users } from "lucide-react";
import { FaDove } from "react-icons/fa";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: <HeartPulse className="w-8 h-8 text-green-700" />,
    title: "Health & Reproductive Rights",
    description:
      "Mobile clinics, HIV/TB screening, and reproductive health education. We train community health workers and provide psychosocial support to vulnerable groups.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-700" />,
    title: "Education & Livelihood Empowerment",
    description:
      "CBC-aligned career guidance, entrepreneurship incubators, and vocational training. We mentor youth leaders and spotlight talents through programs like Tambulika Festival.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-700" />,
    title: "Climate & Environmental Justice",
    description:
      "We promote agroforestry, indigenous seed banks, and regenerative farming, while amplifying marginalized voices in climate policy reform.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
    title: "Social Protection & Advocacy",
    description:
      "From cash transfer pilots to GBV prevention campaigns, we offer legal aid, paralegal training, and strategic litigation for marginalized communities.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-700" />,
    title: "Women & Youth Leadership",
    description:
      "‘Dandia Twende’ ensures no one is left behind, while ‘Bloody Cool Girl’ tackles period poverty through products, education, and policy advocacy.",
  },
  {
    icon: <FaDove className="w-8 h-8 text-green-700" />,
    title: "Community Resilience & Peacebuilding",
    description:
      "We foster social cohesion through inter-community dialogues, conflict resolution training, and youth-led peace initiatives.",
  },
];

export default function ProgramPillars() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Our Program Pillars
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-xl shadow-sm bg-gray-50 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {pillar.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

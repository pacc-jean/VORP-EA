import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Users,
  Video,
  GraduationCap,
} from "lucide-react";

const pillars = [
  {
    icon: <Video className="w-8 h-8 text-green-600" />,
    title: "Workshops & Webinars",
    description:
      "Interactive sessions covering digital storytelling, advocacy strategies, participatory research, and more—facilitated by changemakers from East Africa and beyond.",
  },
  {
    icon: <BookOpenCheck className="w-8 h-8 text-green-600" />,
    title: "Resource Library",
    description:
      "Access downloadable policy briefs, toolkits, research reports, and case studies—curated to equip activists, students, and grassroots leaders alike.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Community Dialogues",
    description:
      "Join monthly peer-led conversations where volunteers, beneficiaries, and experts co-create context-specific solutions that work.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    title: "Mentorship Program",
    description:
      "Connect one-on-one with seasoned practitioners for support in project design, leadership, grant writing, and navigating your impact journey.",
  },
];

export default function LearnSharePillars() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

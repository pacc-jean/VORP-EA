import { motion } from "framer-motion";
import { ShieldCheck, Gift, History } from "lucide-react";

const roadmapItems = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-white" />,
    title: "Donor Portal",
    desc: "A secure login to view donation history, download receipts, and manage your profile. Coming soon!",
    color: "bg-indigo-600",
  },
  {
    icon: <Gift className="w-7 h-7 text-white" />,
    title: "Matching Gifts",
    desc: "Double your impact. We'll be integrating with corporate giving partners to match donations.",
    color: "bg-emerald-600",
  },
  {
    icon: <History className="w-7 h-7 text-white" />,
    title: "Impact Tracker",
    desc: "See how your donation fuels programs with real-time stats and quarterly stories.",
    color: "bg-yellow-500 text-black",
  },
];

export default function FutureRoadmap() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50 px-4" id="future-roadmap">
      <div className="max-w-6xl mx-auto text-center space-y-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          What’s Ahead
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

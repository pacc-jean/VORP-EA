import { HeartHandshake, BookOpenCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <HeartHandshake size={32} className="text-green-600" />,
    title: "Deepen Your Impact",
    description:
      "Directly support vulnerable groups and help drive meaningful change in communities across East Africa.",
  },
  {
    icon: <BookOpenCheck size={32} className="text-green-600" />,
    title: "Build Your Skills",
    description:
      "Gain specialized training in human rights, climate justice, advocacy, and community development.",
  },
  {
    icon: <Users size={32} className="text-green-600" />,
    title: "Expand Your Network",
    description:
      "Collaborate with grassroots leaders, government bodies, and international partners.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="bg-gray-100 py-20 px-6" id="why-join">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Join VORP-EA?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Whether you're volunteering, interning, or building your career, you'll grow your skills while growing communities.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-2xl p-6 shadow-sm border hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

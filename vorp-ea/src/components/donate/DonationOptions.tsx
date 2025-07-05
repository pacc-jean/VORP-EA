import { motion } from "framer-motion";

const options = [
  {
    title: "One-Time Gift",
    desc: "Give any amount—fuel impact immediately.",
    tier: "Flexible",
    color: "bg-indigo-600",
  },
  {
    title: "Monthly Sustainer",
    desc: "Power ongoing programs with steady support.",
    tier: "$10 / $25 / $50+",
    color: "bg-rose-600",
  },
  {
    title: "Fund a Cause",
    desc: "Target your donation to Health, Education, or Environment.",
    tier: "Project-Based",
    color: "bg-emerald-600",
  },
  {
    title: "Tribute Donation",
    desc: "Dedicate your gift in honor of someone you love.",
    tier: "Memorial / Honor",
    color: "bg-yellow-500 text-black",
  },
];

export default function DonationOptions() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50 px-4" id="donation-options">
      <div className="max-w-6xl mx-auto text-center space-y-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Donation Options
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${opt.color}`}
              >
                {opt.tier}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{opt.title}</h3>
              <p className="text-gray-600 text-sm">{opt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function WhyGive() {
  return (
    <section className="py-20 bg-white px-4" id="why-give">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Why Give?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Your gift transforms lives—funding mobile clinics, vocational training for youth, and climate resilience across East Africa.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left text-gray-800 mt-8"
        >
          <li className="bg-red-50 p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            🎒 <strong>KSh 3,000</strong> provides menstrual hygiene supplies for a schoolgirl.
          </li>
          <li className="bg-rose-50 p-6 rounded-xl shadow-sm border-l-4 border-rose-500">
            🩺 <strong>KSh 10,000</strong> trains a health volunteer to reach 500 residents.
          </li>
          <li className="bg-yellow-50 p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            🌱 <strong>KSh 25,000</strong> plants and maintains 100 indigenous trees.
          </li>
        </motion.ul>
      </div>
    </section>
  );
}

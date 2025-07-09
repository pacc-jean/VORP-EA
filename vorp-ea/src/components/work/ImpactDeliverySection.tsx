import { motion } from "framer-motion"
import {
  Users,
  LineChart,
  Handshake
} from "lucide-react"

const impactData = [
  {
    icon: <Users size={32} className="text-indigo-600" />,
    title: "Locally Led",
    description:
      "Every program is co-created with community stakeholders to ensure deep roots and lasting ownership."
  },
  {
    icon: <LineChart size={32} className="text-sky-600" />,
    title: "Data-Driven",
    description:
      "Robust monitoring and evaluation frameworks guide adaptive, responsive, and evidence-based management."
  },
  {
    icon: <Handshake size={32} className="text-emerald-600" />,
    title: "Collaborative",
    description:
      "We build bridges across sectors to strengthen capacity, unlock resources, and multiply our collective impact."
  }
]

export default function ImpactDeliverySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How We Deliver Impact
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

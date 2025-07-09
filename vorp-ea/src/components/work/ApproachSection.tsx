import { motion } from "framer-motion"
import {
  MapPinned,
  Lightbulb,
  BarChart2,
  Megaphone
} from "lucide-react"

const approachData = [
  {
    icon: <MapPinned size={32} className="text-blue-600" />,
    title: "Map & Mobilize",
    description:
      "We identify at-risk communities and co-create action plans with their local leaders for real ownership and long-term change."
  },
  {
    icon: <Lightbulb size={32} className="text-green-600" />,
    title: "Implement & Innovate",
    description:
      "We deliver services and pilot novel models like community-owned health kiosks that scale and sustain themselves."
  },
  {
    icon: <BarChart2 size={32} className="text-purple-600" />,
    title: "Monitor & Evaluate",
    description:
      "Our Theory of Change drives real-time data collection and refinement of strategies based on what truly works."
  },
  {
    icon: <Megaphone size={32} className="text-red-600" />,
    title: "Advocate & Scale",
    description:
      "We amplify evidence through multi-stakeholder forums and legislative engagement across counties and regions."
  }
]

export default function ApproachSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Approach
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {approachData.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md text-left flex gap-4 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="shrink-0">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

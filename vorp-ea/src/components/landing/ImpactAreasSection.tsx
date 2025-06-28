import { motion } from "framer-motion";
import vulnerableImage from "../../assets/images/vulnerable-image.jpg";
import inclusionImage from "../../assets/images/inclusion-image.jpg";
import justfutureImage from "../../assets/images/justfuture-image.jpg";
import {
  ShieldCheck,
  Megaphone,
  Scale,
  AlertCircle
} from "lucide-react";

const impactAreas = [
  {
    title: "Protecting the Vulnerable",
    description:
      "We reach at-risk communities through mobile clinics, emergency relief, and safe shelter initiatives.",
    bgColor: "bg-indigo-600",
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    bgImage: vulnerableImage,
  },
  {
    title: "Promoting Inclusion",
    description:
      "We advocate for women and minority groups to participate fully in education, civic life, and the economy.",
    bgColor: "bg-emerald-600",
    icon: <Megaphone className="h-8 w-8 text-white" />,
    bgImage: inclusionImage,
  },
  {
    title: "Securing a Just Future",
    description:
      "We fight for climate justice, sustainable livelihoods, and policy reform that protects tomorrow.",
    bgColor: "bg-yellow-500",
    icon: <Scale className="h-8 w-8 text-white" />,
    bgImage: justfutureImage,
  },
];

export default function ImpactAreasSection() {
  return (
    <section className="w-full bg-gray-50 py-24" id="impact">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Core Impact Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don’t just respond to crises—we create systems that empower communities to thrive.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 md:opacity-30 md:group-hover:opacity-70 transition-opacity duration-300"
                style={{ backgroundImage: `url(${area.bgImage})` }}
              />
              <div
                className={`relative w-14 h-14 flex items-center justify-center rounded-full ${area.bgColor} mb-5`}
              >
                {area.icon}
              </div>
              <h3 className="relative text-xl font-semibold text-black mb-3">
                {area.title}
              </h3>
              <p className="relative text-gray-800">{area.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Stat Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-indigo-100 border-l-[6px] md:border-l-4 hover:border-l-8 border-indigo-600 p-6 rounded-xl max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-indigo-600 mt-1" />
            <p className="text-indigo-900 text-base md:text-lg font-medium">
              Over <span className="font-bold">40%</span> of East Africans live below the poverty line—our work is laser-focused on breaking these cycles of inequality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

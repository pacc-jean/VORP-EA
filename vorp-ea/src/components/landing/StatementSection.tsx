import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import missionImage from "../../assets/images/mission-image.jpg";
import { Link } from "react-router-dom";

export default function StatementSection() {
  return (
    <section className="w-full bg-white py-24" id="overview">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-green-800 font-semibold uppercase tracking-wider mb-4">
            Our Purpose
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Empowering East Africa, One Voice at a Time
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-xl text-gray-900">Mission:</span>{" "}
              To alleviate poverty, promote access to healthcare services, and
              enhance the socioeconomic welfare of vulnerable East Africans—
              through individual empowerment, community development, and systemic
              change.
            </p>
            <p>
              <span className="font-semibold text-xl text-gray-900">Vision:</span>{" "}
              A society where diversity is celebrated, all voices are heard, and
              every person has equitable access to resources and opportunities.
            </p>
          </div>
          <Link
            to="/history"
            className="inline-flex items-center text-green-500 font-medium mt-6 hover:underline group"
          >
            Read Our Story
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img
            src={missionImage}
            alt="Community empowerment"
            className="w-full h-full object-cover opacity-70 md:opacity-40 md:group-hover:opacity-70 transition-transform duration-500 scale-105 group-hover:scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

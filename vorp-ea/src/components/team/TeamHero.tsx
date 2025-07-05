import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Meet the People Behind the Mission
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            From grassroots volunteers to our leadership board, every team member plays a vital role in transforming lives across East Africa.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/team-hero.jpg"
            alt="Our team at work"
            className="w-full h-auto rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WorkWithUsHero() {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/work-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Join the Movement. <br />
          Build the Future.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          At VORP‑EA, we believe lasting change happens when passionate people join hands with communities across East Africa.
        </p>
        <Link
          to="#opportunities"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition"
        >
          Explore Opportunities
        </Link>
      </motion.div>
    </section>
  );
}

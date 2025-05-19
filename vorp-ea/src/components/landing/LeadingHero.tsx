import { motion } from "framer-motion";

export default function LeadingHero() {
  return (
    <section className="relative bg-gray-900 text-white h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/leadinghero-bg.jpg"
          alt="Community at work"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Rebuilding Hope, <br /> One Voice at a Time
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Empowering East African communities through dialogue, programs, and peacebuilding.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow transition"
            >
              Support Our Work
            </a>
            <a
              href="#"
              className="bg-white text-red-600 hover:text-red-700 px-6 py-3 rounded-full font-semibold border border-white shadow transition"
            >
              What We Do
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

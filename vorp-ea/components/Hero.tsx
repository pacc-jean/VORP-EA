import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#e3f2fd] via-white to-[#fce4ec] py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Healing. Peace. Progress.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Voice of Reconciliation and Pacification East Africa is building bridges where there were walls.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/volunteer"
            className="px-6 py-3 text-blue-600 rounded-xl"
          >
            Get Involved
          </Link>
          <Link
            href="/donate"
            className="px-6 py-3 text-blue-600 rounded-xl"
          >
            Donate Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

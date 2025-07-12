// src/components/history/HistoryHero.tsx
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

export default function HistoryHero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/history-hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ScrollText size={72} className="mx-auto mb-4 text-yellow-500 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          A Legacy in Motion
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          From grassroots conversations to regional impact — our story is one of listening, building, and evolving with purpose.
        </p>
      </motion.div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            className="fill-gray-100"
          />
        </svg>
      </div>
    </section>
  );
}

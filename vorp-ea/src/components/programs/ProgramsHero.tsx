import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProgramsHero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[140vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/programs-hero.jpg')" }} />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Sparkles size={72} className="mx-auto mb-4 text-green-700 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Transforming Communities, One Pillar at a Time
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Explore VORP-EA’s rights-based, community-led programs that champion health, education, equity, and resilience across East Africa.
        </p>
      </motion.div>
      {/* Bottom Wave Drawer */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            >
            <path
                d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
                className="fill-white"
            />
            </svg>
        </div>
    </section>
  );
}

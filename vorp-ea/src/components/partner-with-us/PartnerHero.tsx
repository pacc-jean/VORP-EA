import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function PartnerHero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[140vh] flex items-center justify-center bg-black/60 text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/partnerwith-hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Handshake Icon */}
        <Handshake className="mx-auto mb-4 text-green-400" size={64} />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Strategic Alliances for Lasting Change
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Join hands with VORP-EA and let’s co-create impact across East Africa—through data, policy, programs, and people.
        </p>
      </motion.div>

      {/* Bottom wave divider */}
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

import { motion } from "framer-motion"
import { Hammer } from "lucide-react"

export default function WorkHero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[140vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/work-hero.jpg')" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Hammer size={72} className="mx-auto mb-4 text-yellow-500 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          From the Ground Up, We Build Change
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Mapping need. Mobilizing power. Driving solutions. VORP-EA’s work spans borders and bridges communities with purpose.
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
  )
}

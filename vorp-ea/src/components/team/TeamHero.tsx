import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <section
      className="relative w-full h-[100vh] md:h-[140vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/team-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Meet the People Behind the Mission
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
          From grassroots volunteers to our leadership board, every team member
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
            className="fill-gray-100"
          />
        </svg>
      </div>
    </section>
  );
}

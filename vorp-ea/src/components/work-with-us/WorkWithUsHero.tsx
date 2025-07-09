import { motion } from "framer-motion";

export default function WorkWithUsHero() {
  return (
    <section
      className="relative w-full h-[100vh] md:h-[140vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/work-with-us-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Join the Movement. <br />
          Build the Future.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          At VORP‑EA, we believe lasting change happens when passionate people join hands with communities across East Africa.
        </p>
        <a
          href="#opportunities"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition"
        >
          Opportunities
        </a>
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

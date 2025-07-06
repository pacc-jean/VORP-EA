import { motion } from "framer-motion";

export default function LearnShareHero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[140vh] bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/learn-hero.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Learn. Connect. Transform.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl"
        >
          The Learning Hub is where ideas spark change. Join us for powerful sessions, rich resources, and community-driven knowledge sharing.
        </motion.p>
      </div>
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

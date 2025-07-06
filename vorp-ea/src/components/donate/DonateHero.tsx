import { Heart } from "lucide-react";
import { motion } from "framer-motion";


export default function DonateHero() {
  return (
    <section className="relative bg-gray-900 text-white w-screen max-w-full h-screen overflow-hidden flex items-center justify-center px-6">

        {/* Background Image + Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/donatehero-bg.jpg"
                    alt="Give towards a better future"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
      

        {/* Content */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto z-10"
        >
            <div className="inline-flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-300 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Give Hope. Fuel Change.
            </h1>
            <p className="text-lg mb-6">
            Your donation powers mobile clinics, youth training, and climate justice across East Africa.
            Every shilling counts.
            </p>
            <a
            href="#donate-form"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full text-lg transition duration-300"
            >
            Donate Now
            </a>
        </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { trackEvent } from "../../lib/analytics";

export default function LeadingHero() {
  return (
    <section className="relative bg-gray-900 text-white w-screen max-w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/leadinghero-bg.jpg"
          alt="Community at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl ml-2 md:ml-10 px-2 md:px-24 h-full flex items-start pt-[170px] md:pt-[300px]">
        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Building Peace,<br />
            <span className="text-green-600">Restoring Hope in East Africa</span>
          </h1>
          <p className="text-base md:text-xl text-gray-200">
            Empowering diverse communities through reconciliation, development, and advocacy
          </p>
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            <a
              href="#"
              onClick={() =>
                trackEvent({
                  action: "click_hero_button",
                  category: "LeadingHero",
                  label: "Support Our Work",
                })
              }
              className="bg-gray-900 md:bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-xm md:text-lg rounded-md font-semibold shadow transition duration-300 inline-flex items-center gap-1"
            >
              Support Our Work <span className="text-lg md:text-2xl">&#x203A;</span>
            </a>
            <a
              href="#"
              onClick={() =>
                trackEvent({
                  action: "click_hero_button",
                  category: "LeadingHero",
                  label: "Learn Our Work",
                })
              }
              className="bg-green-700 hover:bg-green-900 text-white px-4 py-2 text-xm md:text-lg rounded-md font-semibold shadow transition duration-300 inline-flex items-center gap-1"
            >
              Learn Our Work <span className="text-lg md:text-2xl">&#x203A;</span>
            </a>
          </div>
        </motion.div>
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
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "../lib/analytics";

const navItems = [
  {
    title: "Join Us",
    items: ["Work With Us", "Learn & Share", "Partner With Us"],
  },
  {
    title: "What We Do",
    items: ["Programs", "Our Work", "Our Impact"],
  },
  {
    title: "Who We Are",
    items: ["About Us", "Our History", "Our Team", "Our Partners"],
  },
];

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        className="relative max-w-7xl mx-auto px-6"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        {/* Row 1: Logo + Nav Links + Donate */}
        <div className="flex items-center justify-between pt-4 pb-2">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-24 w-24" />
          </a>

          {/* Nav Links */}
          <div className="flex-1 flex justify-center items-center space-x-8">
            {navItems.map(({ title }, idx) => (
              <div key={title} className="flex items-center space-x-8">
                {idx > 0 && (
                  <span className="h-6 border-l-2 border-gray-300" />
                )}
                <div
                  className="relative flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHoveredMenu(title)}
                  onClick={() =>
                    trackEvent({
                      action: "click_nav_category",
                      category: "Navigation",
                      label: `Top Nav > ${title}`,
                    })
                  }
                >
                  <span
                    className={`flex items-center gap-1 text-lg font-medium transition-colors ${
                      hoveredMenu === title
                        ? "text-red-600"
                        : "text-gray-900"
                    }`}
                  >
                    {title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        hoveredMenu === title
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Donate Button */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={() =>
                trackEvent({
                  action: "click_donate",
                  category: "CTA",
                  label: "Navbar > Donate Button",
                })
              }
              className="bg-gradient-to-r from-red-500 via-pink-600 to-red-700
                hover:from-pink-600 hover:to-red-800 text-white font-semibold
                px-6 py-3 rounded-full shadow-lg transition duration-300
                transform hover:scale-105 hover:animate-pulse inline-block"
            >
              Donate
            </a>
          </div>
        </div>

        {/* Row 2: Dropdown Drawer */}
        <AnimatePresence>
          {hoveredMenu && (
            <motion.div
              key="dropdown-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 bg-white px-6 pt-0 pb-3 flex justify-center space-x-16 z-40 shadow-sm border-t border-transparent"
              onMouseEnter={() => setHoveredMenu(hoveredMenu)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {navItems.map(({ title, items }) => (
                <div
                  key={title}
                  className="flex flex-col min-w-[120px]"
                  onMouseEnter={() => setHoveredMenu(title)}
                >
                  {items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() =>
                        trackEvent({
                          action: "click_nav_link",
                          category: "Navigation",
                          label: `${title} > ${item}`,
                        })
                      }
                      className={`group relative text-sm mb-1 transition-colors cursor-pointer ${
                        hoveredMenu === title
                          ? "text-gray-900 font-semibold"
                          : "text-gray-400"
                      } hover:text-red-600`}
                    >
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 font-bold text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ width: "1em" }}
                      >
                        &#x276F;
                      </span>
                      <span className="pl-5">{item}</span>
                    </a>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

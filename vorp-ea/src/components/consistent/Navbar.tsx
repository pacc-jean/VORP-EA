import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "../../lib/analytics";
import { Link } from "react-router-dom";

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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`hidden md:block fixed w-full top-0 z-50 transition-colors duration-300 ${
                scrolled ? "bg-white shadow-sm" : "bg-transparent"
            }`}
        >
            <nav
                className="relative"
                onMouseLeave={() => setHoveredMenu(null)}
            >
                {/* Inner nav content container with padding + max width */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className={`flex items-center justify-between pt-4 ${scrolled ? "pb-1" : "pb-2"}`}>
                        <Link to="/" className="flex items-center flex-shrink-0">
                            <img src="/logo.png" alt="Logo" className="h-[150px] w-[150px]" />
                        </Link>

                        <div className="flex-1 flex justify-center items-center space-x-12">
                            {navItems.map(({ title }, idx) => (
                                <div key={title} className="flex items-center space-x-8">
                                    {idx > 0 && <span className="h-6 border-l-2 border-gray-300" />}
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
                                                    : scrolled
                                                    ? "text-black"
                                                    : "text-white"
                                            }`}
                                        >
                                            {title}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                    hoveredMenu === title
                                                        ? "rotate-[-90deg] text-red-600"
                                                        : scrolled
                                                        ? "text-black"
                                                        : "text-white"
                                                }`}
                                            />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

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
                                className={`${
                                    scrolled
                                        ? "bg-gradient-to-r from-red-500 via-pink-600 to-red-700 text-white"
                                        : "bg-white text-red-600"
                                } text-xl font-semibold px-6 py-3 rounded-md shadow-lg transition duration-300 transform hover:scale-105 hover:animate-pulse inline-block`}
                            >
                                Donate
                            </a>
                        </div>
                    </div>
                </div>

                {/* Dropdown spans full screen */}
                <AnimatePresence>
                    {hoveredMenu && (
                        <motion.div
                            key="dropdown-drawer"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-screen absolute left-0 right-0 z-40"
                            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <div
                                className={`px-6 flex justify-center space-x-16 transition-colors duration-300 ${
                                    scrolled
                                        ? "bg-white shadow-sm border-gray-200"
                                        : "bg-transparent border-none"
                                }`}
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
                                                        ? scrolled
                                                            ? "text-gray-900 font-semibold"
                                                            : "text-white font-semibold"
                                                        : scrolled
                                                        ? "text-gray-500"
                                                        : "text-gray-200"
                                                } hover:text-red-500`}
                                            >
                                                <span
                                                    className={`absolute left-0 top-1/2 -translate-y-1/2 font-bold transition-all duration-200 transform
                                                    group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-2
                                                    ${scrolled ? "text-red-600" : "text-red-600"}`}
                                                    style={{ width: "1em" }}
                                                >
                                                    &#x276F;
                                                </span>
                                                <span className="pl-5">{item}</span>
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

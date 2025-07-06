import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  {
    text: "My mentor helped me craft a project that finally got funded. This space is real empowerment.",
    author: "Miriam Achieng",
    role: "Youth Advocate",
    source: "Mentorship Program",
  },
  {
    text: "The Digital Storytelling session unlocked a new way for me to share my refugee experience.",
    author: "Ali Said",
    role: "Community Fellow",
    source: "Workshop Series",
  },
  {
    text: "Having direct access to tools and guidance makes VORP-EA’s Learning Hub unique.",
    author: "Catherine Mwangi",
    role: "Director",
    source: "Resource Library",
  },
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[index];

  return (
    <section className="bg-white py-16 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="mx-auto text-green-600 mb-4" size={32} />
        <AnimatePresence mode="wait">
          {fade && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-xl italic text-gray-800 mb-6">“{quote.text}”</p>
              <div className="font-semibold text-gray-900">
                — {quote.author}, <span className="text-green-600">{quote.role}</span>
              </div>
              {quote.source && (
                <p className="text-sm text-gray-500 mt-1">{quote.source}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

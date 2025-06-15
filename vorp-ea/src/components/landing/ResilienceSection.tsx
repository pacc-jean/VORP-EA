import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import doubleQuotes from "../../assets/double-quotes.png";
import { stories } from "../../assets/resilience-stories";
import { trackEvent } from "../../lib/analytics";

export default function ResilienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll("right"),
    onSwipedRight: () => scroll("left"),
    delta: 40,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      className="py-6 px-6 text-gray-900"
      style={{
        backgroundImage: "url('/grain-texture.png')",
        backgroundSize: "repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Voices of Resilience: <em className="italic">"Community Stories"</em>
            </h2>
          </div>
          <div className="max-w-xl text-lg text-gray-800">
            <p className="mb-4">
              Hear directly from those we serve. Explore how individuals overcome incredible
              challenges, rebuild their lives, and contribute to their communities.
            </p>
            <button
              onClick={() =>
                trackEvent({
                  action: "click",
                  category: "CTA",
                  label: "View All Resilience Stories",
                })
              }
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-3 rounded-md transition"
            >
              View All <span className="text-lg"><ChevronRight size={24} /></span>
            </button>
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-end items-center gap-4 mb-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-md bg-[#032B41] text-white hover:bg-[#054866] transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable Stories w/ swipe handlers */}
        <div {...handlers} ref={scrollRef} className="overflow-x-auto scroll-smooth pb-6">
          <div className="flex gap-8 snap-x snap-mandatory px-1">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="relative snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-64 relative">
                  {/* Custom Quote Image */}
                  <motion.img
                    src={doubleQuotes}
                    alt="Quote marks"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute top-4 left-4 w-10 h-10 opacity-80 pointer-events-none select-none"
                  />
                  <div className="mt-10">
                    <p className="text-gray-700 text-base leading-relaxed line-clamp-4">
                      {story.excerpt}
                    </p>
                  </div>
                  <p className="mt-4 font-semibold text-gray-900">{story.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

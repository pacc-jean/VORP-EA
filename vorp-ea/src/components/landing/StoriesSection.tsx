import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import doubleQuotes from "../../assets/icons/double-quotes.png";
import { stories } from "../../assets/community-stories";
import { HashLink } from "react-router-hash-link";

export default function StoriesSection() {
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
      className="bg-white py-6 px-0 text-gray-900"
    >
      <div className="w-full py-12 px-4 md:px-2">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-8 px-4">
          <div className="w-full md:w-auto">
            <h2 className="text-4xl md:text-7xl font-serif font-semibold text-black leading-tight">
            Beneficiary Voices: <br/> <em className="italic">"Impact Told by the People"</em>
            </h2>
          </div>
          <div className="max-w-xl text-lg text-gray-800">
            <p className="mb-4">
              Stories from real people in real communities. Discover how lives are shifting from hardship to hope through VORP-EA's programs.
            </p>
            <HashLink
              to="/our-impact#beneficiary-voices"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white font-medium px-5 py-3 rounded-md transition"
            >
              View All <span className="text-lg"><ChevronRight size={24} /></span>
            </HashLink>
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-end items-center gap-4 mb-4 px-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-md bg-green-700 md:bg-green-500 text-white hover:bg-green-700 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-md bg-gray-900 md:bg-gray-500 text-white hover:bg-gray-900 transition"
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
                  className="group relative snap-start flex-shrink-0 w-[320px] bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
                  style={{
                    backgroundImage: `url(${story.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "550px",
                  }}
                >
                  <div className="absolute inset-0 bg-white/10 md:bg-white/30 group-hover:bg-white/10 backdrop-blur-xm flex flex-col justify-end p-6 h-full">
                    {/* Text + Button Container */}
                    <div className="flex flex-col transition-all duration-300 space-y-4">
                      {/* Text Content Wrapper */}
                      <div className="relative">
                        <motion.img
                          src={doubleQuotes}
                          alt="Quote marks"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-8 h-8 mb-2 opacity-80 pointer-events-none select-none"
                        />
                        <p className="text-gray-900 text-base leading-relaxed line-clamp-4">
                          {story.excerpt}
                        </p>
                        <p className="mt-4 font-semibold text-black">{story.name}</p>
                      </div>

                      {/* Read More Reveal */}
                      <div
                        className={`
                          transition-all duration-300 ease-in-out 
                          opacity-100 md:opacity-0 
                          md:group-hover:opacity-100 
                          max-h-12 md:max-h-0 
                          md:group-hover:max-h-12 
                          overflow-hidden
                        `}
                      >
                        <HashLink to="/our-impact#beneficiary-voices" smooth>
                          <button className="bg-black text-white text-sm px-4 py-2 rounded-md w-full">
                            Read More
                          </button>
                        </HashLink>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

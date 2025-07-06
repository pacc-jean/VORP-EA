import { useState } from "react";
import { ChevronDown } from "lucide-react";

const opportunities = [
  {
    title: "Volunteer",
    content: `VORP‑EA relies on dedicated volunteers to amplify our mission across East Africa. 
You can lend your skills in community outreach, event facilitation, peer mentoring, or even storytelling. 
Whether you're helping coordinate mental health workshops or supporting displaced families, 
your time directly uplifts vulnerable communities. No effort is too small—your presence matters.`,
  },
  {
    title: "Internships & Fellowships",
    content: `Our internship and fellowship programs offer a deep dive into the world of human rights, 
advocacy, and social development. Based in Nairobi or in one of our rural partner communities, 
you'll work alongside experienced teams in areas like program design, policy analysis, communications, 
and field research. We provide mentorship, training, and access to a wide network of social change agents.`,
  },
  {
    title: "Careers",
    content: `VORP‑EA is scaling impact across the region—and we need bold, committed professionals to grow with us. 
Whether you're a project manager, financial analyst, policy researcher, or operations lead, 
you'll be part of a purpose-driven team working on transformative issues like climate justice, refugee rights, and youth empowerment. 
Expect autonomy, collaboration, and real-world results.`,
  },
];

export default function OpportunitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-100" id="opportunities">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-24">
          Explore Opportunities
        </h2>

        {opportunities.map((item, index) => (
          <div key={index} className="mb-6 border-b border-gray-600 pb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-left text-2xl font-semibold text-gray-800 focus:outline-none"
            >
              {item.title}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`mt-3 text-gray-700 text-lg leading-relaxed transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

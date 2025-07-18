import { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";

import flavianImg from "../../assets/team/flavian.jpg";
import graceImg from "../../assets/team/grace.jpg";
import honneurImg from "../../assets/team/honneur.jpg";
import kelvisImg from "../../assets/team/kelvis.jpg";
import nicoleImg from "../../assets/team/nicole.jpg";
import jeanImg from "../../assets/team/jean.jpg";

interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
  category: "board" | "volunteers";
  twitterUrl?: string;
  linkedinUrl?: string;
}

const members: Member[] = [
  {
    name: "Flavian Ndenga",
    role: "Business Administrator",
    bio: "My name is Flavian Ndenga, a Business Administration Specialist with experience in non-profit operations, program support, and organizational management. Adept at coordinating administrative processes, optimizing resource allocation, and ensuring compliance with donor and internal policies. I demonstrate strong skills in financial oversight, procurement, logistics, and human resources management.",
    image: flavianImg,
    category: "volunteers",
    twitterUrl: "https://twitter.com/flavianndenga",
    linkedinUrl: "https://www.linkedin.com/in/flavian-ndenga-8bb8a622/",
  },
  {
    name: "Grace Kinyua",
    role: "Project Manager",
    bio: "I'm Grace Kinyua, a sociologist at VORP‑EA dedicated to our mission of building on strength, facilitating change and empowering communities.I spearhead mental health initiatives and development talks for adolescents—covering hygiene, SRHR, self-esteem and life skills—while also leading socioeconomic  programs that merge mental wellness with entrepreneurial and financial-resilience training to prepare youth for a brighter future.",
    image: graceImg,
    category: "volunteers",
    twitterUrl: "https://twitter.com/grace_kinyua",
    linkedinUrl: "https://www.linkedin.com/in/grace-kinyua-8b8a622/",
  },
  {
    name: "Rugaruza Honneur",
    role: "Treasurer",
    bio: "Hello! I am Rugaruza Honneur Mugabe a refugee from DR/Congo. I am a volunteer here at VORP-EA. VORP-EA has helped me become one of them and provided me with the skills to study so that I can teach others. VORP-EA is an organization that has helped us reach villages and teach people about health, saving and how to better their lives.",
    image: honneurImg,
    category: "volunteers",
    twitterUrl: "https://twitter.com/honneur_rugaruza",
    linkedinUrl: "https://www.linkedin.com/in/rugaruza-honneur-8b8a622/",
  },
  {
    name: "Kelvis Wanjia",
    role: "Communications Specialist",
    bio: "I am Kelvis Wanjia, a Communications Specialist dedicated to fostering meaningful impact in community development through strategic engagement, mentorship, and storytelling. With a background rooted in communications, I bring a unique lens to community-driven initiatives, translating complex ideas into accessible, empowering narratives that inspire action.Through inclusive dialogue and collaboration, I champion sustainable models of development that are adaptable and community-owned.",
    image: kelvisImg,
    category: "volunteers",
    twitterUrl: "https://twitter.com/kelvis_wanjia",
    linkedinUrl: "https://www.linkedin.com/in/kelvis-wanjia-8b8a622/",
  },
  {
    name: "Rozzie Nicole",
    role: "Human Resources Manager",
    bio: "My name is Rozzie Nicole, and I am a passionate community volunteer working with VORP-EA, an organization dedicated to creating positive change in underprivileged communities. My work mainly focuses on youth mentorship, where I guide and support young people through education and awareness on various social issues. I believe in empowering the next generation to rise above challenges and become agents of change in their communities.",
    image: nicoleImg,
    category: "volunteers",
    twitterUrl: "https://twitter.com/rozzie_nicole",
    linkedinUrl: "https://www.linkedin.com/in/rozzie-nicole-8b8a622/",
  },
  {
    name: "Jean Luc",
    role: "IT Specialist",
    bio: "I am Jean Luc, a dedicated volunteer with a passion for community service and social impact. My journey with VORP-EA has been transformative, allowing me to contribute to various initiatives aimed at uplifting marginalized communities. I believe in the power of collective action and strive to inspire others to get involved and make a difference.",
    image: jeanImg,
    category: "volunteers",
    twitterUrl: "https://twitter.com/jean_luc",
    linkedinUrl: "https://www.linkedin.com/in/jean-luc-8b8a622/",
  },
];

export default function TeamTabs() {
  const [activeTab, setActiveTab] = useState<"board" | "volunteers">("board");

  const filteredMembers = members.filter(
    (member) => member.category === activeTab
  );

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8 flex-wrap gap-2 sm:gap-4">
          <button
            onClick={() => setActiveTab("board")}
            className={`px-4 py-1.5 rounded-full text-xm md:text-lg font-medium md:font-bold transition ${
              activeTab === "board"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Board
          </button>
          <button
            onClick={() => setActiveTab("volunteers")}
            className={`px-4 py-1.5 rounded-full text-xm md:text-lg font-medium md:font-bold transition ${
              activeTab === "volunteers"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Volunteers
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

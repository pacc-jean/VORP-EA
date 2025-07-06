import { Tag } from "lucide-react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

interface Props {
  name: string;
  role: string;
  bio: string;
  image: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  image,
  twitterUrl,
  linkedinUrl,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 100;

  const toggleReadMore = () => setExpanded(!expanded);
  const isLongBio = bio.length > MAX_CHARS;
  const displayedBio = expanded ? bio : bio.slice(0, MAX_CHARS) + (isLongBio ? "..." : "");

  return (
    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-white/10 shadow-lg backdrop-blur-lg border border-white/20">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
        {/* Role tag */}
        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold rounded-full mb-2">
          <Tag className="w-4 h-4" />
          {role}
        </span>

        <h3 className="text-lg font-semibold">{name}</h3>
        {/* Bio with toggle */}
        <p className="text-sm text-gray-200 leading-relaxed transition-all duration-300">
          {displayedBio}
          {isLongBio && (
            <button
              onClick={toggleReadMore}
              className="ml-1 text-xs text-green-400 underline hover:text-green-600 transition"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>

        <div className="flex items-center justify-between mt-4">
          {/* Socials */}
          <div className="flex items-center space-x-4 text-white">
            {twitterUrl && (
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl hover:text-green-600 transition" />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl hover:text-green-600 transition" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

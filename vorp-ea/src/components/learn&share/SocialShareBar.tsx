import {
  FaFacebookF,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLink,
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

const currentUrl = encodeURIComponent(window.location.href);
const message = encodeURIComponent(
  "Check out this amazing Learning Hub from VORP-EA!"
);

const socialLinks = [
  {
    icon: <FaFacebookF />,
    url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    label: "Share on Facebook",
  },
  {
    icon: <FaWhatsapp />,
    url: `https://wa.me/?text=${message}%20${currentUrl}`,
    label: "Share on WhatsApp",
  },
  {
    icon: <FaTelegram />,
    url: `https://t.me/share/url?url=${currentUrl}&text=${message}`,
    label: "Share on Telegram",
  },
  {
    icon: <FaXTwitter />,
    url: `https://twitter.com/intent/tweet?text=${message}&url=${currentUrl}`,
    label: "Share on X",
  },
  {
    icon: <FaInstagram />,
    url: `https://www.instagram.com`, // Instagram doesn't support direct share links
    label: "Share on Instagram",
  },
  {
    icon: <SiBluesky />,
    url: `https://bsky.app/intent/compose?text=${message}%20${currentUrl}`,
    label: "Share on Bluesky",
  },
  {
    icon: <FaLinkedinIn />,
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
    label: "Share on LinkedIn",
  },
  {
    icon: <FaLink />,
    url: currentUrl,
    label: "Copy Link",
    onClick: () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    },
  },
];

export default function SocialShareBar() {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-10 bg-white rounded-xl">
      {socialLinks.map((social, i) => (
        <a
          key={i}
          href={social.url}
          onClick={(e) => {
            if (social.onClick) {
              e.preventDefault();
              social.onClick();
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          title={social.label}
          className="text-xl md:text-2xl text-gray-600 hover:text-green-600 transition duration-200"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

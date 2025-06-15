import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { trackEvent } from "../lib/analytics";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Reports", "Blog"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Contact", "Privacy Policy", "Terms of Service"],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={20} />,
    href: "https://www.facebook.com/VORP-EA",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    href: "#",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/vorp_ke/",
  },
  {
    name: "TikTok",
    icon: <FaTiktok size={20} />,
    href: "https://www.tiktok.com/@vorpea",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={20} />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden bg-white border-t border-gray-200 pt-6 pb-20 md:pt-10 md:pb-2 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        {/* Logo & Description */}
        <div className="flex flex-col space-y-4 max-w-md">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-20 w-20 object-contain" />
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed">
            VORP-EA — Voice of Reconciliation and Pacification East Africa. Bringing communities together with heart & impact.
          </p>
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} VORP-EA. All rights reserved.
          </p>
        </div>

        {/* Navigation Links + Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 flex-1">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="flex flex-col space-y-3">
              <h3 className="font-semibold text-gray-900">{title}</h3>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() =>
                    trackEvent({
                      action: "click_footer_link",
                      category: "Footer",
                      label: `${title} > ${link}`,
                    })
                  }
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-gray-900">Social</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ name, icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({
                      action: "click_social",
                      category: "Footer",
                      label: name,
                    })
                  }
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

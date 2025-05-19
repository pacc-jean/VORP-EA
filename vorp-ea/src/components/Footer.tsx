import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { trackEvent } from "../lib/analytics";

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
    <footer className="bg-white border-t border-gray-200 pt-6 pb-4 md:pt-10 md:pb-2 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 md:gap-[14rem]">
        {/* Logo & Copy */}
        <div className="flex flex-col space-y-4 max-w-xs">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-24 w-24" />
          </a>
          <p className="text-gray-600 text-sm leading-relaxed">
            VORP-EA — Voice of Reconciliation and Pacification East Africa. Bringing communities together with heart & impact.
          </p>
          <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} VORP-EA. All rights reserved.</p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-1 gap-24 max-w-4xl">
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

          {/* Social Icons */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-gray-900">Social</h3>
            <div className="flex space-x-4">
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

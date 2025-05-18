import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Contact", "Privacy Policy", "Terms of Service"],
  },
];

const socialLinks = [
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "#",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    href: "#",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Logo & Copy */}
        <div className="flex flex-col space-y-4 max-w-xs">
          <img src="/logo.png" alt="Logo" className="h-16 w-16" />
          <p className="text-gray-600 text-sm leading-relaxed">
            VORP-EA — Voice of Reconciliation and Pacification East Africa. Bringing communities together with heart & impact.
          </p>
          <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} VORP-EA. All rights reserved.</p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-1 justify-between max-w-4xl">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="flex flex-col space-y-3">
              <h3 className="font-semibold text-gray-900">{title}</h3>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
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

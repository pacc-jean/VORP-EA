import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white text-sm pt-12 pb-16 md:pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between pb-6">
          {/* Left Section: Logo & Prose */}
          <div className="flex-1 px-4">
            <img
              src="/logo.png"
              alt="VORP-EA Logo"
              className="mb-4 w-[200px] h-auto"
            />
            <p className="text-black">
              VORP-EA — Voice of Reconciliation and Pacification East Africa.
              Bringing communities together with heart & impact.
              <br />
              <span className="text-gray-700">Nurturing peace, empowering change.</span>
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-gray-700 mx-4" />

          {/* Middle Section: Quick Links */}
          <div className="flex-1 px-4 pt-8 md:pt-0">
            <h4 className="text-black font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-700">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-700">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-green-700">Programs</Link></li>
              <li><Link to="/impact" className="hover:text-green-700">Impact</Link></li>
              <li><Link to="/work-with-us" className="hover:text-green-700">Work with Us</Link></li>
              <li><Link to="/donate" className="hover:text-green-700">Donate</Link></li>
            </ul>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-gray-700 mx-4" />

          {/* Right Section: Public Emails */}
          <div className="flex-1 px-4 pt-8 md:pt-0">
            <h4 className="text-black font-semibold mb-4">Public Emails</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@vorp-ea.org"
                  className="hover:text-green-700"
                >
                  info@vorp-ea.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:programs@vorp-ea.org"
                  className="hover:text-green-700"
                >
                  programs@vorp-ea.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:partners@vorp-ea.org"
                  className="hover:text-green-700"
                >
                  partners@vorp-ea.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@vorp-ea.org"
                  className="hover:text-green-700"
                >
                  careers@vorp-ea.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:donations@vorp-ea.org"
                  className="hover:text-green-700"
                >
                  donations@vorp-ea.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@vorp-ea.org"
                  className="hover:text-green-700"
                >
                  support@vorp-ea.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 mt-10 border-t border-gray-700 text-center space-y-4">
          {/* Socials */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/VORP-EA" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="hover:text-green-600" />
            </a>
            <a href="https://www.tiktok.com/@vorpea" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20} className="hover:text-green-600" />
            </a>
            <a href="https://www.instagram.com/vorp_ke/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-green-600" />
            </a>
          </div>

          {/* Address */}
          <p className="text-gray-400">
            Fatima Apartments, Arwing Kodhek off Marcus Garvey, Kilimani, Nairobi, Kenya
          </p>

          {/* Contact */}
          <p className="text-gray-400">
            Phone: <span className="text-black">+254 795424196</span> || <span className="text-black">0202025477</span>
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} VORP-EA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

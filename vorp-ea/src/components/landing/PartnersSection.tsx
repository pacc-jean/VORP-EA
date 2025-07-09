import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import undpLogo from "/src/assets/logos/undp-logo.svg";
import whoLogo from "/src/assets/logos/who-logo.svg";
//import oxfamLogo from "/src/assets/logos/oxfam-logo.svg";
import usaidLogo from "/src/assets/logos/usaid-logo.png";
//import localGovLogo from "/src/assets/logos/local-gov-logo.svg";
//import sponsorLogo from "/src/assets/logos/sponsor-logo.svg";

// Replace with real logos
const logos = [
  { name: "UNDP", src: undpLogo },
  { name: "WHO", src: whoLogo },
  //{ name: "Oxfam", src: oxfamLogo },
  { name: "USAID", src: usaidLogo },
  //{ name: "Local Gov", src: localGovLogo },
  //{ name: "Sponsor", src: sponsorLogo },
];

const testimonials = [
  {
    quote: "Partnering with VORP-EA deepened our impact on youth empowerment.",
    name: "Global Fund",
  },
  {
    quote: "Their dedication to inclusive development is unmatched.",
    name: "Oxfam International",
  },
  {
    quote: "We've seen real, lasting change through our collaboration.",
    name: "USAID East Africa",
  },
  {
    quote: "Their mobile clinics saved lives during critical moments.",
    name: "WHO Africa Region",
  },
  {
    quote: "VORP-EA brings communities together like no one else.",
    name: "UNDP Regional Office",
  },
  {
    quote: "Impressive results in vocational training and youth resilience.",
    name: "GIZ",
  },
  {
    quote: "VORP-EA's grassroots model works — it's sustainable and scalable.",
    name: "Bill & Melinda Gates Foundation",
  },
  {
    quote: "Their approach to climate adaptation is pioneering.",
    name: "UNEP",
  },
  {
    quote: "We value the integrity and transparency in every partnership.",
    name: "DFID Kenya",
  },
  {
    quote: "Communities feel seen, heard, and supported.",
    name: "Kenya Red Cross",
  },
  {
    quote: "A game-changer in equitable healthcare delivery.",
    name: "MSF East Africa",
  },
  {
    quote: "Collaboration with VORP-EA elevated our local impact.",
    name: "ActionAid",
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-24" id="partners">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Partners & Supporters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaboration fuels our mission. Together, we amplify impact.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center mb-16"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-12 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-2xl p-6 text-left shadow-md flex flex-col justify-between h-full"
            >
              <Quote className="text-indigo-400 w-6 h-6 mb-4" />
              <p className="text-gray-800 italic mb-3 text-sm leading-relaxed">
                “{t.quote}”
              </p>
              <p className="text-sm font-semibold text-gray-700 mt-auto">— {t.name}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/partner-with-us"
            className="inline-flex items-center justify-center bg-green-700 md:bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Become a Partner
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

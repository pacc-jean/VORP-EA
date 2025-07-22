import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import rukaLogo from "/src/assets/logos/ruka-logo.png";
import peterImg from "/src/assets/images/peter-ruka.jpg";
import kasaraniLogo from "/src/assets/logos/kasaraniboxingclub-logo.png";
import coachIanImg from "/src/assets/images/ian-kbc.jpg";

const partnerCards = [
  {
    name: "RUKA SRHR Network",
    logo: rukaLogo,
    tagline: "Empowering Kenyan Communities Since 2015",
    description: `RUKA SRHR Network is a dynamic, youth-led community-based organization registered in Kenya in November 2015. We're dedicated to driving measurable change in communities by identifying and resolving pressing social issues. Through strategic partnerships with schools, government, corporates, and other civil organizations, we deliver vital programmes focused on basic life skills, menstrual hygiene management, livelihood development, and mentorship.

Our passionate team of trained volunteers, mentors, and community health workers provides essential training and technical assistance in reproductive health and life skills, fostering positive behaviour change. We're committed to building a healthier, more empowered future for all.`,
    founder: {
      name: "Peter Kinyua Muriithi",
      role: "Co-founder & Programme Coordinator",
      bio: `Peter is a dedicated leader within RUKA SRHR Network. He previously served as Executive Managing Officer until 2019. In his current role, he plays a crucial part in shaping and overseeing programmes aimed at fostering positive change in low-income Kenyan communities.`,
      image: peterImg,
    },
  },
  {
    name: "Kasarani Boxing Club",
    logo: kasaraniLogo,
    tagline: "Empowering Youth Through Boxing and Purpose",
    description: `Kasarani Boxing Club is an NCBA-registered organization providing a platform to support youth in Kasarani and promote local boxing talent. Founded by Ian Otieno, the club currently trains 18 amateur boxers of all ages.

Their mission is to unite youth, develop boxing skills, and steer them away from crime, drugs, and early marriage. With a strong community focus, the club creates a safe, empowering environment and actively contributes to regional growth by fostering discipline, resilience, and personal development.`,
    founder: {
      name: "Coach Ian Otieno",
      role: "Founder & Head Coach",
      bio: `Ian has over 5 years of experience training boxers at all levels. As head coach of Kasarani Boxing Club since 2019, he leads youth mentorship through sport. Previously a boxing coach at Nairobi Sports Club (2016–2019), he's certified by Kenya Boxing Association and trained in First Aid and CPR.`,
      image: coachIanImg,
    },
  },
];

const testimonials = [
  {
    quote: "Our collaboration with VORP-EA allowed us to scale up our outreach and truly transform communities.",
    name: "RUKA SRHR Network",
  },
  {
    quote: "Working with VORP-EA helped us give Kasarani youth more than just boxing — we gave them purpose.",
    name: "Kasarani Boxing Club",
  },
  {
    quote: "We’ve seen the real impact of their gender and mentorship programs in our parish community.",
    name: "Shrine of Mary Help of Christians - Don Bosco Upperhill",
  },
  {
    quote: "VORP-EA's grassroots approach aligns perfectly with our efforts to support the youth of Kasarani.",
    name: "Kasarani Sub-County Office",
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
            Our Partners & Collaborators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work hand in hand with changemakers committed to lasting social transformation.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid gap-12 md:grid-cols-2">
          {partnerCards.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col"
            >
              {/* Logo and Tagline */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-20 w-20 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.tagline}</p>
                </div>
              </div>

              {/* Org Description */}
              <p className="text-gray-700 text-sm whitespace-pre-line mb-6">
                {partner.description}
              </p>

              {/* Founder Info */}
              <div className="flex items-start gap-4">
                <img
                  src={partner.founder.image}
                  alt={partner.founder.name}
                  className="w-24 h-24 border border-black rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-800 font-medium">{partner.founder.name}</p>
                  <p className="text-sm text-gray-600">{partner.founder.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{partner.founder.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            What Our Partners Say
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-indigo-50 p-6 rounded-xl shadow-md"
              >
                <Quote className="text-indigo-400 w-5 h-5 mb-3" />
                <p className="text-sm italic text-gray-700 mb-2">“{t.quote}”</p>
                <p className="text-sm font-medium text-gray-800">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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

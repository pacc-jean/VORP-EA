import { MailIcon } from "lucide-react";
import { motion } from "framer-motion";

import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function TeamGalleryCTA() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Behind the Scenes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-green-100 border border-green-300 p-8 rounded-2xl shadow-lg text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Inspired to Make a Difference?
          </h3>
          <p className="text-gray-700 mb-6">
            Join the passionate people behind VORP-EA’s impact. Whether you're a student, professional, or changemaker—we need you.
          </p>
          <a
            href="mailto:careers@vorp-ea.org"
            className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
          >
            <MailIcon className="w-5 h-5 mr-2" />
            Volunteer with Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

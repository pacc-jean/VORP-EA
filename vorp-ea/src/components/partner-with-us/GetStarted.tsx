import { MailIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MailIcon className="mx-auto text-green-600 mb-4" size={40} />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            If your organization is passionate about impact and innovation, let’s explore possibilities together.
            Reach out with your collaboration idea or request more info.
          </p>

          <a
            href="mailto:partners@vorp-ea.org?subject=Partnership Inquiry"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Email Us at partners@vorp-ea.org
          </a>
        </motion.div>
      </div>
    </section>
  );
}

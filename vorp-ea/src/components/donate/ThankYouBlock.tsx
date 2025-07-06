import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function ThankYouBlock() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white px-4" id="thank-you">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center bg-red-100 rounded-full w-16 h-16 mx-auto mb-4">
            <HeartHandshake className="w-8 h-8 text-red-600" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Giving
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your generosity directly funds life-changing programs across East Africa. From health outreach to climate action — you're part of the solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white border border-gray-200 shadow-lg rounded-2xl px-6 py-8 text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">What’s Next?</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>📬 You'll receive a welcome email shortly.</li>
              <li>🧾 Your tax receipt is sent automatically.</li>
              <li>📖 We'll keep you updated with real impact stories every quarter.</li>
              <li>🔐 Donor Portal (coming soon!) to track donations & download receipts.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

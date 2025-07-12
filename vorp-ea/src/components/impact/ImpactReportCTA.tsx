import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ImpactReportCTA() {
  return (
    <section className="bg-green-600 py-16 text-white px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Want to Dig Deeper?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg text-green-100"
        >
          Download the full impact report to explore how lives are being transformed across East Africa — in numbers, in stories, and in strategy.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          href="/impact-report.pdf"
          download
          className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-green-100 transition"
        >
          <Download size={20} />
          Download Impact Report
        </motion.a>
      </div>
    </section>
  );
}

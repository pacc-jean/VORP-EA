import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-green-700 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold">
          Want to dive deeper into our story?
        </h3>
        <p className="text-lg text-green-100">
          Learn how VORP-EA grew from a vision into a region-wide force for reconciliation, equity, and justice.
        </p>
        <Link
          to="/history"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Explore Our History
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

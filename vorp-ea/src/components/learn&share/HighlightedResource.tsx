import { FileText, Download } from "lucide-react";

export default function HighlightedResource() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-green-50 border border-green-200 rounded-2xl shadow-md p-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <FileText size={48} className="text-green-600" />
          <h3 className="text-2xl font-bold text-gray-800">
            Youth Mental Health Toolkit
          </h3>
          <p className="text-gray-700 max-w-xl">
            A hands-on guide for peer educators addressing mental wellness in
            high-risk communities. Packed with actionable strategies, role-play prompts, and facilitator tips.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <a
              href="/resources/youth-mental-health-toolkit.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <Download size={20} />
              Download PDF
            </a>
            <a
              href="/resources"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition"
            >
              <FileText size={20} />
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

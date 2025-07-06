import { Lightbulb, Share2 } from "lucide-react";

export default function LearnShareCTA() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Ready to Learn or Share What You Know?
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Whether you're looking to gain new skills or pass on your experience,
          the VORP-EA Learning Hub is your platform. Join a session or help lead one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:support@vorp-ea.org?subject=Join Learning Session&body=Hi VORP-EA team, I’d like to join upcoming learning opportunities..."
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            <Lightbulb className="w-5 h-5" />
            Join a Session
          </a>

          <a
            href="mailto:support@vorp-ea.org?subject=Facilitate or Share a Resource&body=Hi VORP-EA team, I’d love to facilitate a workshop or contribute to the resource library..."
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-600 text-green-700 text-lg font-semibold rounded-lg hover:bg-green-100 transition"
          >
            <Share2 className="w-5 h-5" />
            Facilitate or Share
          </a>
        </div>
      </div>
    </section>
  );
}

import { Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-gray-500 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl text-white text-center">
        <Mail className="mx-auto mb-4" size={40} />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          Whether you’re looking to volunteer, intern, or build a career with us,
          we’d love to hear from you. Email your application letter and CV to{" "}
          <a
            href="mailto:careers@vorp-ea.org"
            className="underline font-semibold hover:text-green-300 transition"
          >
            careers@vorp-ea.org
          </a>{" "}
          and let us know which opportunity you’re applying for.
        </p>

        <div className="bg-white/20 rounded-xl p-6 text-left mb-6">
          <h3 className="text-xl font-semibold mb-2 text-green-300">
            What to include in your email:
          </h3>
          <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
            <li>
              Subject line:{" "}
              <strong>Application - [Volunteer/Internship/Career]</strong>
            </li>
            <li>A short introduction about yourself</li>
            <li>Your updated CV (PDF format preferred)</li>
            <li>
              A brief application letter (why you're interested and what you
              bring)
            </li>
            <li>Any specific area or role you're applying for</li>
          </ul>
        </div>

        <a
          href="mailto:careers@vorp-ea.org"
          className="inline-block bg-white text-green-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          Send Your Application
        </a>
      </div>
    </section>
  );
}

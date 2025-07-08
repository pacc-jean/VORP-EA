import { Mail } from 'lucide-react'

export default function ProgramsCTA() {
  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="mx-auto mb-4 h-10 w-10 text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Got Questions or Ideas?
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          We’re always open to feedback and fresh perspectives. Whether you’re curious
          about one of our programs or have a bold new initiative we should consider—
          let’s talk.
        </p>
        <a
          href="mailto:programs@vorp-ea.org"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          Reach Out to Us
        </a>
      </div>
    </section>
  )
}

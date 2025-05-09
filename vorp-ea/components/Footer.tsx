import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-2">VORP-EA</h3>
          <p className="leading-relaxed">
            Voice of Reconciliation and Pacification East Africa. 
            Promoting peace, healing, and progress for every community.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/programs" className="hover:text-blue-400">Programs</Link></li>
            <li><Link href="/volunteer" className="hover:text-blue-400">Volunteer</Link></li>
            <li><Link href="/donate" className="hover:text-blue-400">Donate</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>info@vorp-ea.org</p>
          <p className="italic mt-4">“Peace begins with understanding.”</p>
        </div>
      </div>
      <div className="text-center text-xs mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} VORP-EA. All rights reserved.
      </div>
    </footer>
  )
}

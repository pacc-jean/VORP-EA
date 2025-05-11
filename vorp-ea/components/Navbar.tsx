import Link from 'next/link'
//import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  // Debugging screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const isLarge = window.innerWidth >= 1024;  // 1024px is the 'lg' breakpoint
      setIsLargeScreen(isLarge)
    }

    checkScreenSize() // Check on initial render

    // Add event listener for screen resize
    window.addEventListener('resize', checkScreenSize)

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Desktop Nav Links */}
        {isLargeScreen ? (
          <div className="flex space-x-6 ml-auto"> {/* Adjusted to align links to the right */}
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs</Link>
            <Link href="/volunteer" className="text-gray-700 hover:text-blue-600 font-medium">Volunteer</Link>
            <Link href="/donate" className="text-gray-700 hover:text-blue-600 font-medium">Donate</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        ) : (
          // MOBILE Hamburger Icon (Visible on small screens)
          <button
            className="block lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* MOBILE Menu */}
      {!isLargeScreen && menuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-4 shadow-md">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/programs" className="block text-gray-700 hover:text-blue-600 font-medium">Programs</Link>
          <Link href="/volunteer" className="block text-gray-700 hover:text-blue-600 font-medium">Volunteer</Link>
          <Link href="/donate" className="block text-gray-700 hover:text-blue-600 font-medium">Donate</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </div>
      )}
    </nav>
  )
}

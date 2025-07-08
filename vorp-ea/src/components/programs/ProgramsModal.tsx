import {
  X,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useRef, useEffect } from 'react'

interface Step {
  title: string
  shortDescription: string
  longDescription: string
  timeline?: string
}

interface ProgramsModalProps {
  steps: Step[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function ProgramsModal({
  steps,
  currentIndex,
  onClose,
  onNavigate,
}: ProgramsModalProps) {
  const currentStep = steps[currentIndex]
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const desktopScrollRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [onClose])

  // Auto-scroll for mobile (horizontal)
  useEffect(() => {
    const container = mobileScrollRef.current
    if (!container) return

    const buttons = container.querySelectorAll('button')
    const activeButton = buttons[currentIndex]
    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const offset =
        buttonRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        buttonRect.width / 2

      container.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }, [currentIndex])

  // Auto-scroll for desktop (vertical)
  useEffect(() => {
    const container = desktopScrollRef.current
    if (!container) return

    const buttons = container.querySelectorAll('button')
    const activeButton = buttons[currentIndex]
    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      // Only scroll if the button is out of view
      if (
        buttonRect.top < containerRect.top ||
        buttonRect.bottom > containerRect.bottom
      ) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [currentIndex])

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-6xl h-[85vh] flex flex-col md:flex-row overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition z-50"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Mobile Horizontal Stepper */}
        <div className="md:hidden px-4 py-6 bg-white">
          <h3 className="text-lg font-semibold mb-6 text-green-600 text-center">
            Explore Programs
          </h3>
          <div
            className="flex items-center space-x-8 relative overflow-x-auto scroll-smooth"
            ref={mobileScrollRef}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative min-w-max"
              >
                {/* Connector line */}
                {index !== 0 && (
                  <div className="absolute -left-8 top-2 w-8 h-0.5 bg-green-300" />
                )}

                {/* Step dot */}
                <button
                  onClick={() => onNavigate(index)}
                  className={`h-4 w-4 rounded-full border-4 z-10 transition ${
                    index === currentIndex
                      ? 'border-green-600 bg-white animate-pulse'
                      : 'border-black bg-white'
                  }`}
                />

                {/* Label */}
                <span
                  className={`mt-2 text-xs font-medium transition whitespace-nowrap ${
                    index === currentIndex ? 'text-green-700' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                    <span className="block text-xs text-gray-400">
                        {step.shortDescription}
                    </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Sidebar Stepper */}
        <div
          className="hidden md:block w-1/3 px-4 py-6 overflow-y-auto border-r scroll-smooth"
          ref={desktopScrollRef}
        >
          <h3 className="text-lg font-semibold mb-6 text-green-600">
            Explore Programs
          </h3>
          <div className="flex flex-col bg-white rounded-2xl">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className="relative pl-8 pb-10 text-left group hover:bg-gray-50 rounded-md transition"
              >
                {/* Circle marker */}
                <div
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 ${
                    index === currentIndex
                      ? 'border-green-600 bg-white animate-pulse'
                      : 'border-black bg-white'
                  } z-10`}
                />
                {/* Vertical line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-1.5 top-6 h-full w-1 bg-green-200 z-0" />
                )}

                <div>
                  <h3
                    className={`text-base font-semibold transition ${
                      index === currentIndex
                        ? 'text-green-700'
                        : 'text-gray-900 group-hover:text-green-700'
                    }`}
                  >
                    {step.title}
                    <span className="block text-sm text-gray-500">
                      {step.shortDescription}
                    </span>
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            {currentStep.title}
          </h2>
          <p className="text-gray-700 mb-4">{currentStep.longDescription}</p>
          {currentStep.timeline && (
            <p className="text-sm text-gray-500 italic">
              {currentStep.timeline}
            </p>
          )}

          {/* Mobile Nav Buttons */}
          <div className="flex justify-between md:hidden mt-6">
            <button
              onClick={() =>
                onNavigate((currentIndex - 1 + steps.length) % steps.length)
              }
              className="text-green-600 hover:text-green-800"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => onNavigate((currentIndex + 1) % steps.length)}
              className="text-green-600 hover:text-green-800"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Desktop Nav Arrows */}
        <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col space-y-4">
          <button
            onClick={() =>
              onNavigate((currentIndex - 1 + steps.length) % steps.length)
            }
            className="text-green-600 hover:text-green-800 transition"
            aria-label="Previous"
          >
            <ChevronUp size={28} />
          </button>
          <button
            onClick={() => onNavigate((currentIndex + 1) % steps.length)}
            className="text-green-600 hover:text-green-800 transition"
            aria-label="Next"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </div>
  )
}

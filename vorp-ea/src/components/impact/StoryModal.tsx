import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { StoryType } from "../../assets/community-stories"

type Props = {
  story: StoryType | null
  onClose: () => void
}

export default function StoryModal({ story, onClose }: Props) {
  if (!story) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-4xl flex flex-col md:flex-row"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left: Image */}
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              src={story.image}
              alt={story.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2 w-full p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-black">{story.name}</h3>
                {story.location && (
                  <p className="text-sm text-gray-500 italic">{story.location}</p>
                )}
              </div>
              <button onClick={onClose} className="text-gray-600 hover:text-black">
                <X size={20} />
              </button>
            </div>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line overflow-y-auto max-h-[60vh] md:max-h-[400px] pr-2">
              {story.fullStory}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

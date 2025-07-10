import { PhotoProvider, PhotoView } from 'react-photo-view'
import { motion } from 'framer-motion'

// Vite magic: imports all images in the gallery folder
const images = import.meta.glob('../../assets/gallery/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default'
})

const galleryImages = Object.values(images) as string[]

export default function PhotoGallerySection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          In the Field
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Glimpses into the moments that define our work—from bold actions to quiet resilience.
        </p>

        <PhotoProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow hover:shadow-xl transition duration-300 cursor-zoom-in"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <PhotoView src={src}>
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  )
}

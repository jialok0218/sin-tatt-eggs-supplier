'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ImageModal } from '@/components/ImageModal'
import { useImageModal } from '@/hooks/useImageModal'

interface ImageData {
  src: string
  alt: string
}

interface GalleryGridProps {
  images: ImageData[]
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const { isModalOpen, modalImage, openModal, closeModal } = useImageModal()

  if (images.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 text-center">
          <p>No images available</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-5">
            <span className="text-gray-800">OUR</span>{' '}
            <span className="text-red-600">GALLERY</span>
          </h2>
          <p className="text-gray-700">
            Capturing moments and memories at Sin Tatt Eggs Supplier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 6}
              />
            </motion.div>
          ))}
        </div>

        <ImageModal
          isOpen={isModalOpen}
          imageUrl={modalImage}
          onClose={closeModal}
        />
      </div>
    </section>
  )
}


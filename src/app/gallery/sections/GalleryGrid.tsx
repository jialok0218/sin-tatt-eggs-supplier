'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ImageModal } from '@/components/ImageModal'
import { useImageModal } from '@/hooks/useImageModal'

interface ImageData {
  src: string
  alt: string
  category: string
}

interface GalleryGridProps {
  images: ImageData[]
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const { isModalOpen, modalImage, openModal, closeModal } = useImageModal()
  const [currentPage, setCurrentPage] = React.useState(1)
  const [activeTab, setActiveTab] = React.useState('all')
  const imagesPerPage = 9

  // Filter images based on active tab
  const filteredImages = React.useMemo(() => {
    if (activeTab === 'all') return images
    return images.filter(image => image.category === activeTab)
  }, [images, activeTab])

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage
  const indexOfFirstImage = indexOfLastImage - imagesPerPage
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage)
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage)

  // Reset to first page when changing tabs
  React.useEffect(() => {
    setCurrentPage(1)
  }, [activeTab])

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

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

        {/* Add Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 mx-2 rounded-full ${
              activeTab === 'all' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-6 py-2 mx-2 rounded-full ${
              activeTab === 'team' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Team
          </button>
          <button
            onClick={() => setActiveTab('production')}
            className={`px-6 py-2 mx-2 rounded-full ${
              activeTab === 'production' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Production
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentImages.map((image, index) => (
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

        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
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


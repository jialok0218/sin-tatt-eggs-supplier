'use client'

import React from 'react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string | null
  onClose: () => void
  alt?: string
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
  alt = 'Modal Image'
}) => {
  if (!isOpen || !imageUrl) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl">
        <Image
          src={imageUrl}
          alt={alt}
          width={800}
          height={800}
          className="rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  )
}
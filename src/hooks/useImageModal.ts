import { useState } from 'react'

export const useImageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (image: string) => {
    setModalImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setModalImage(null)
    setIsModalOpen(false)
  }

  return {
    isModalOpen,
    modalImage,
    openModal,
    closeModal
  }
}
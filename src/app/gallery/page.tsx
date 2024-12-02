import React from 'react'
import { GalleryHero } from './sections/GalleryHero'
import { GalleryGrid } from './sections/GalleryGrid'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gallery',
  }
}

// Mark as server component
const Page = async () => {
  // Get all files from the gallery directory
  const galleryDir = path.join(process.cwd(), '/src/assets/gallery')
  const imageFiles = fs.readdirSync(galleryDir)

  const images = await Promise.all(
    imageFiles.map(async (file) => {
      const imageModule = await import(`@/assets/gallery/${file}`)
      return {
        src: imageModule.default,
        alt: file.split('.')[0],
        category: 'all'  // Since we're not using folders to categorize
      }
    })
  )

  return (
    <>
      <GalleryHero />
      <GalleryGrid images={images} />
    </>
  )
}

export default Page
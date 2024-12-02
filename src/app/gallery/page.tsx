import React from 'react'
import { GalleryHero } from './sections/GalleryHero'
import { GalleryGrid } from './sections/GalleryGrid'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gallery',
  };
}

const Page = async () => {
  const galleryDir = path.join(process.cwd(), '/src/assets/gallery')
  const imageFiles = fs.readdirSync(galleryDir)

  const images = await Promise.all(
    imageFiles.map(async (file) => {
      const imageModule = await import(`@/assets/gallery/${file}`)
      return {
        src: imageModule.default.src,
        alt: file.split('.')[0]
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
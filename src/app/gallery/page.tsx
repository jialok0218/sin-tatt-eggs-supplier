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

const Page = async () => {
  const baseDir = path.join(process.cwd(), '/src/assets/gallery')
  
  // Read images from both directories
  const teamDir = path.join(baseDir, 'team')
  const productionDir = path.join(baseDir, 'production')
  
  const teamFiles = fs.readdirSync(teamDir)
  const productionFiles = fs.readdirSync(productionDir)

  const teamImages = teamFiles.map((file) => ({
    src: `/assets/gallery/team/${file}`,
    alt: file.split('.')[0],
    category: 'team'
  }))

  const productionImages = productionFiles.map((file) => ({
    src: `/assets/gallery/production/${file}`,
    alt: file.split('.')[0],
    category: 'production'
  }))

  const allImages = [...teamImages, ...productionImages]

  return (
    <>
      <GalleryHero />
      <GalleryGrid images={allImages} />
    </>
  )
}

export default Page
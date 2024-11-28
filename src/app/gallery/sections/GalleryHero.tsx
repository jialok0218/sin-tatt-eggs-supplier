'use client'

import React from 'react'
import { PageHero } from '@/components/PageHero'
import galleryHeroBackground from '@/assets/background1.jpg'

export const GalleryHero = () => {
  return (
    <PageHero 
      backgroundImage={galleryHeroBackground.src}
      primaryTitle="Gallery"
      secondaryTitle="Our Journey in Pictures"
      description="Explore our facilities, products, and team through our visual story."
    />
  )
}
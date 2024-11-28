'use client'

import React from 'react'
import { PageHero } from '@/components/PageHero'
import ProductHeroBackground from '@/assets/productHeroBackground.jpg'

export const ProductHero: React.FC = () => {
  return (
    <PageHero 
      backgroundImage={ProductHeroBackground.src}
      primaryTitle="Our Products"
      secondaryTitle="Quality Eggs for Every Need"
      description="Discover our range of fresh, high-quality eggs sourced from the finest farms."
    />
  )
}
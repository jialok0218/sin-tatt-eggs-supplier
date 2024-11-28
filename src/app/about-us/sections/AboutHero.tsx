'use client'

import React from 'react'
import { PageHero } from '@/components/PageHero'
import companyBackground from '@/assets/companyBackground.png'

export const AboutHero: React.FC = () => {
  return (
    <PageHero 
      backgroundImage={companyBackground.src}
      primaryTitle="About Us"
      secondaryTitle="Sin Tatt Eggs Supplier Sdn. Bhd."
      description="Your trusted partner in quality egg distribution since 1979."
    />
  )
}
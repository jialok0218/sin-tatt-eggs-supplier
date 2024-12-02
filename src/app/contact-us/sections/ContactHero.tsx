'use client'

import React from 'react'
import { PageHero } from '@/components/PageHero'
import ContactHeroBackground from '@/assets/DSC00022.jpg'

export const ContactHero = () => {
  return (
    <PageHero 
      backgroundImage={ContactHeroBackground.src}
      primaryTitle="Contact Us"
      secondaryTitle="Get in Touch With Our Team"
      description="We're here to help and answer any questions you might have."
    />
  )
}
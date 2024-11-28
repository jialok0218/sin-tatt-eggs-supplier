'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PageHeroProps {
  backgroundImage: string
  primaryTitle: string
  secondaryTitle: string
  description: string
}

export const PageHero: React.FC<PageHeroProps> = ({
  backgroundImage,
  primaryTitle,
  secondaryTitle,
  description
}) => {
  return (
    <section className="relative w-full h-[750px] -mt-[250px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        }}
        className="w-full h-full bg-cover bg-center bg-no-repeat relative"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="container mx-auto h-full flex items-center px-8 relative z-10">
          <div className="mt-[300px] md:mt-[300px] md:w-[478px]">
            <motion.h1 
              className="hero-title-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {primaryTitle}
            </motion.h1>
            <motion.h1 
              className="hero-title-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {secondaryTitle}
            </motion.h1>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
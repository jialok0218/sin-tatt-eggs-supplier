'use client'

import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import storyline1979 from '@/assets/storyline1979.png'
import storyline1983_1 from '@/assets/storyline1983-1.png'
import storyline1983_2 from '@/assets/storyline1983-2.png'
import storyline1988 from '@/assets/storyline1988.png'
import storyline2008_1 from '@/assets/storyline2008_1.png'
import storyline2008_2 from '@/assets/storyline2008_2.png'
import storylinePresent_1 from '@/assets/storylinePresent_1.png'
import storylinePresent_2 from '@/assets/storylinePresent_2.png'
import storylinePresent_3 from '@/assets/storylinePresent_3.png'
import storylinePresent_4 from '@/assets/storylinePresent_4.png'
import { ImageModal } from '@/components/ImageModal'
import { useImageModal } from '@/hooks/useImageModal'

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  images: string[]; // Array of images
}

export const StoryLine = () => {
  const ref = useRef(null)
  const lineRef = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isLineInView = useInView(lineRef, { once: true })

  const { isModalOpen, modalImage, openModal, closeModal } = useImageModal()

  const timelineEvents: TimelineEvent[] = [
    {
      year: "1979",
      title: "The Beginning",
      description: "Sin Tatt Eggs Supplier Sdn Bhd started its journey at 1171 Bee Bee Park, operating door-to-door sales with a single van.",
      images: [storyline1979.src]
    },
    {
      year: "1983",
      title: "First Expansion",
      description: "Expanded operations to include wholesale distribution, marking our first major business growth.",
      images: [storyline1983_1.src, storyline1983_2.src]
    },
    {
      year: "1988",
      title: "Market Growth",
      description: "Further expanded our market reach and established stronger presence in the local egg supply industry.",
      images: [storyline1988.src]
    },
    {
      year: "2008",
      title: "Modern Facilities",
      description: "Upgraded to modern facilities and equipment to enhance production efficiency and quality control.",
      images: [storyline2008_1.src, storyline2008_2.src]
    },
    {
      year: "Present",
      title: "Driven to Deliver Excellence",
      description: "Now operating with 30 dedicated team members and 13 lorries, serving customers throughout Malaysia from our base at Kawasan Perindustrian Tandop.",
      images: [storylinePresent_1.src, storylinePresent_2.src, storylinePresent_3.src, storylinePresent_4.src]
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          OUR STORY
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            ref={lineRef}
            className="absolute left-[20px] md:left-1/2 w-[2px] bg-gray-200"
            style={{ originY: 0 }}
            initial={{ height: 0 }}
            animate={isLineInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`flex items-center mb-24 relative 
                ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} 
                flex-row`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="absolute w-4 h-4 bg-red-600 rounded-full -ml-[7px] md:-ml-2 left-[20px] md:left-1/2 top-[2.5rem]"
                initial={{ scale: 2, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 2, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute w-6 h-6 bg-red-200 rounded-full -ml-1 -mt-1 animate-ping opacity-75" />
              </motion.div>

              <div className="hidden md:block md:w-1/2" />

              <div
                className={`w-full md:w-1/2 pl-12 md:pl-16 md:pr-16 
                  ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} 
                  text-left`}
              >
                <h3 className="text-5xl font-bold text-red-600 mb-2">
                  {event.year}
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h4>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.images.map((image, imageIndex) => (
                      <div
                        key={`${event.year}-image-${imageIndex}`}
                        className="relative w-full h-[200px] cursor-pointer"
                        onClick={() => openModal(image)} 
                      >
                        <Image
                          src={image}
                          alt={`${event.year} - ${event.title} - Image ${
                            imageIndex + 1
                          }`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover rounded-lg"
                          priority={image === storyline1979.src}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImage}
        onClose={closeModal}
      />
    </section>
  )
}

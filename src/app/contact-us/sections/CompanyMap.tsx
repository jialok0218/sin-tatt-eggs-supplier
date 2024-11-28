'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const CompanyMap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const mapUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL

  if (!mapUrl) {
    console.warn('Google Maps URL is not defined in environment variables')
  }

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-5">
            <span className="text-gray-800">OUR</span>{' '}
            <span className="text-red-600">LOCATION</span>
          </h2>
          <p className="text-gray-700">
            Visit us at our office
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg"
        >
          {mapUrl ? (
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Map loading...</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}


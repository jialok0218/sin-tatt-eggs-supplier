'use client'

import React from 'react'
import Image from 'next/image'
import sinTattLogo from '@/assets/sin-tatt-logo.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export const CompanyProfile: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-5">
              <span className="text-gray-800">COMPANY</span>{' '}
              <span className="text-red-600">PROFILE</span>
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              <strong>Sin Tatt Eggs Supplier Sdn. Bhd.</strong>, located at No. 545, Kawasan Perindustrian Tandop, has been a cornerstone in the egg supply industry since 1979. With a dedicated team of 30 members and a fleet of 13 lorries, we ensure the delivery of fresh and high-quality eggs across the region. Our dedicated team works together to deliver excellence in meeting customer needs.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              As we look to the future, we remain focused on innovation and quality, striving to achieve greater success in the years to come.
            </p>
            <Link href="/contact-us">
              <motion.button
                className="btn-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative h-[400px] w-full rounded-lg overflow-hidden"
          >
            <Image
              src={sinTattLogo}
              alt="Sin Tatt Logo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
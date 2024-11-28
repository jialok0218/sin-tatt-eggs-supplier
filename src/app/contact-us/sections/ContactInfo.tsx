'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMail } from "react-icons/hi"
import { HiMapPin } from "react-icons/hi2"
import { BsTelephone } from "react-icons/bs"

export const ContactInfo: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactCards = [
    {
      icon: <HiMail className="w-12 h-12 text-red-500" />,
      title: "Email",
      info: "sa.ste545@gmail.com",
      delay: 0.2
    },
    {
      icon: <HiMapPin className="w-12 h-12 text-red-500" />,
      title: "Location",
      info: "545, Kawasan Perusahaan Tandop Baru, Alor Star, 05050, Alor Setar, Kedah",
      delay: 0.4
    },
    {
      icon: <BsTelephone className="w-12 h-12 text-red-500" />,
      title: "Contact No.",
      info: "04-772 1836",
      delay: 0.6
    }
  ]

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
            <span className="text-gray-800">GET IN</span>{' '}
            <span className="text-red-600">TOUCH</span>
          </h2>
          <p className="text-gray-700">
            Feel free to reach out to us through any of these channels
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: card.delay }}
              className="card flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700">
                {card.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
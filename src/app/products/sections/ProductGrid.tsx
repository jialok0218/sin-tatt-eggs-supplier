'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import eggProduct from '@/assets/eggProduct.png'
import Link from 'next/link'

interface Product {
  name: string
  description: string
  image: string
  grades?: string[]
}

const products: Product[] = [
  {
    name: "Fresh Brown Egg",
    description: "Premium quality brown eggs, sorted by grade for different uses.",
    image: eggProduct.src,
    grades: ["Grade AA", "Grade A", "Grade B", "Grade C", "Grade D", "Grade E"]
  },
  {
    name: "Sandy Egg",
    description: "Specially sourced sandy eggs with unique texture and quality.",
    image: eggProduct.src
  },
  {
    name: "Omega Egg",
    description: "Enriched with Omega-3 fatty acids for enhanced nutritional value.",
    image: eggProduct.src
  },
  {
    name: "Liquid Egg",
    description: "Convenient liquid egg products for commercial and home use.",
    image: eggProduct.src
  },
  {
    name: "Selenium-rich Egg",
    description: "Eggs enriched with selenium for additional health benefits.",
    image: eggProduct.src
  }
]

export const ProductGrid: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const productVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotate: -10,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-5">
            <span className="text-gray-800">OUR</span>{' '}
            <span className="text-red-600">PRODUCT RANGE</span>
          </h2>
          <p className="text-gray-700">
            Discover our selection of premium quality eggs
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={productVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700">
                  {product.description}
                </p>
                {product.grades && (
                  <div className="mt-4">
                    <p className="font-bold text-black mb-2">Available Grades:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.grades.map((grade) => (
                        <motion.span
                          key={grade}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                        >
                          {grade}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700">
            For more product information, please contact{' '}
            <Link 
              href="/contact-us" 
              className="font-bold text-red-600 hover:text-red-700 transition-colors duration-300 underline"
            >
              here
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
} 
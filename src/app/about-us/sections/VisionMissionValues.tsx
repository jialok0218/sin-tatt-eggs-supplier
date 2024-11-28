'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const VisionMissionValues: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              OUR <span className="text-red-600">VISION</span>
            </h2>
            <p className="text-gray-600">
              To be one of the leading egg producers and the most reliable suppliers of fresh and high-quality eggs and poultry products in the country.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              OUR <span className="text-red-600">MISSION</span>
            </h2>
            <p className="text-gray-600">
              To continuously improve and invest in People and Technologies to produce fresh, high-quality, and safe poultry products for our valued customers.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8">
            CORE <span className="text-red-600">VALUES</span>
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>To provide a safe and hygienic working environment for the employees.</li>
            <li>To constantly invest in modern technologies and facilities to achieve energy saving.</li>
            <li>To maximize the profits by achieving Economies of Scale in production.</li>
            <li>To visibly contribute towards social sustainable development.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
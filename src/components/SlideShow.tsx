'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import background1 from '@/assets/background1.jpg'
import background2 from '@/assets/background2.jpg'
import background3 from '@/assets/background3.jpg'
import { StaticImageData } from 'next/image';

const images: StaticImageData[] = [
  background1,
  background2,
  background3
];

export const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={images[currentImage].src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${images[currentImage].src})`,
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 0,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
  };
  
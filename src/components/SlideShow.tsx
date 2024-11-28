'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import background1 from '@/assets/background1.jpg'
import background2 from '@/assets/background2.jpg'
import background3 from '@/assets/background3.jpg'
import background4 from '@/assets/background4.jpg'
import background5 from '@/assets/background5.jpg'
import { StaticImageData } from 'next/image';

const images: StaticImageData[] = [
  background1,
  background2,
  background3,
  background4,
  background5
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
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundImage: `url(${images[currentImage].src})`,
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 0,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
  };
  
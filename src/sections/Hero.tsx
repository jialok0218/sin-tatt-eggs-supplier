'use client';

import yolk from '@/assets/yolk.png';
import eggShell1 from '@/assets/eggShell1.png';
import eggShell2 from '@/assets/eggShell2.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });

const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section  ref={heroRef} className="pt-4 pb-10 md:pt-5 md:pb-10 overflow-x-clip">
            <div className="container">
                <div className="md:flex items-center">
                      <div className="mt-[200px] md:w-[478px] md:mt-44"> 
                         <motion.h1 
                            className="hero-title-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Sin Tatt
                        </motion.h1>
                        <motion.h1 
                            className="hero-title-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Your Source of <span className="text-yellow-500">Quality Eggs</span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-white tracking-tight mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Bringing fresh, quality eggs to your business daily.
                        </motion.p>
                <div className="flex gap-1 items-center mt-[30px]">
                    <Link href="/products">
                        <button className="btn-primary">Discover More</button>
                    </Link>
                </div>
                </div>
                <div className="mt-24 md:h-[648px] md:flex-1 relative">
                <motion.img
                            src={yolk.src}
                            alt="Egg Yolk"
                            width={600} 
                            height={600} 
                            className="md:block hidden absolute md:max-w-none md:left-0 md:top-24 lg:left-0"
                            animate={{ 
                                translateY: [-30, 30],
                            }}
                            transition={{ 
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 2, 
                                ease: "easeInOut"
                            }}
                        />
                <motion.img
                    src={eggShell1.src} 
                    alt="First Egg Shell" 
                    width={220}
                    height={220}
                    className="md:block hidden -top-8 -left-32 md:absolute rotate-[30deg]"
                    style={{
                        translateY: translateY
                    }}
                    />
                <motion.img
                    src={eggShell2.src} 
                    alt="Second Egg Shell" 
                    width={220}
                    className="md:block hidden absolute top-[524px] left-[448px] rotate-[30deg]"
                    style={{
                        rotate: 30,
                        translateY: translateY
                    }}
                    />
                </div>
                </div>
            </div>
       </section>
    );
};
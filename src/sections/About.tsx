'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import eggBucket from '@/assets/eggBucket.png';
import { useRef } from 'react';

export const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-24 bg-gradient-to-b from-white to-orange-100 text-center">
            <div className="container">
                <motion.h2
                    className="section-title mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                    }}
                    className="w-[300px] h-[300px] mx-auto mb-8"
                >
                    <Image
                        src={eggBucket}
                        alt="Eggs in a nest"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
                <motion.p
                    className="section-description mt-5 mb-5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <strong>Sin Tatt Eggs Supplier Sdn. Bhd.</strong>, located at No. 545, Kawasan Perindustrian Tandop, has been a cornerstone in the egg supply industry since 1979. With a dedicated team of 30 members and a fleet of 13 lorries, we ensure the delivery of fresh and high-quality eggs across the region. Our dedicated team works together to deliver excellence in meeting customer needs.
                </motion.p>
                <motion.p
                    className="section-description mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                >
                    As we look to the future, we remain focused on innovation and quality, striving to achieve greater success in the years to come.
                </motion.p>
                <Link href="/about-us">
                    <motion.button
                        className="btn-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        Explore More
                    </motion.button>
                </Link>
            </div>
        </section>
    );
};
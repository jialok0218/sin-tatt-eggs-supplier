'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import logistics from '@/assets/logistics.png';
import quality from '@/assets/quality.png';
import pricing from '@/assets/pricing.png';
import afterSales from '@/assets/afterSales.png';
import ServicesBackground from '@/assets/background7.jpg';

const services = [
    {
        image: logistics,
        alt: "Efficient Logistics",
        title: "Efficient Logistics",
        description: "Our fleet of 13 lorries ensures timely and reliable delivery across the region, meeting all customer needs."
    },
    {
        image: quality,
        alt: "Quality Assurance",
        title: "Quality Assurance",
        description: "We source only the freshest eggs, ensuring top quality and satisfaction for our customers."
    },
    {
        image: pricing,
        alt: "Reasonable Pricing",
        title: "Reasonable Pricing",
        description: "We offer competitive pricing without compromising on quality, ensuring value for money for our customers."
    },
    {
        image: afterSales,
        alt: "After Sales Service",
        title: "After Sales Service",
        description: "Our commitment to excellent service extends beyond the sale, ensuring customer satisfaction and support."
    }
];

export const ServiceHighlights = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-24 relative text-center">
            <div className="absolute inset-0">
                <Image
                    src={ServicesBackground}
                    alt="Services Background"
                    fill
                    className="object-cover blur-[10px]"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            </div>
            <div className="container relative z-10">
                <motion.h2
                    className="section-title mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <span className="text-yellow-400">"Eggsquisite"</span> <span className="text-white">Service, Reliable Delivery</span> 
                </motion.h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 justify-center mt-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white shadow-lg rounded-3xl"
                            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                            transition={{
                                duration: 2,
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: index * 0.2, // Stagger the animations
                            }}
                        >
                            <div className="flex justify-center items-center h-32 mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-orange-600 p-8">
                                {service.title}
                            </h3>
                            <p className="text-gray-800">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
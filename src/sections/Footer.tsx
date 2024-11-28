'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiMail } from "react-icons/hi";
import { HiMapPin } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import Link from 'next/link'

export const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <footer ref={ref} className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    {/* First two sections remain unchanged */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-yellow-500">Sin Tatt Eggs Supplier Sdn. Bhd.</h3>
                        <p className="text-gray-300">
                            Your trusted partner in quality egg supply since establishment. 
                            Delivering fresh eggs daily to businesses across Northern Malaysia.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</Link></li>
                            <li><Link href="/about-us" className="text-gray-300 hover:text-yellow-500 transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="text-gray-300 hover:text-yellow-500 transition-colors">Products</Link></li>
                            <li><Link href="/gallery" className="text-gray-300 hover:text-yellow-500 transition-colors">Gallery</Link></li>
                            <li><Link href="/contact-us" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-yellow-500">Contact Us</h3>
                        <div className="space-y-2 text-gray-300">
                            <p className="flex items-center">
                                <HiMapPin className="w-5 h-5 mr-2 text-yellow-500" />
                                545, Kawasan Perusahaan Tandop Baru, Alor Star, 05050, Alor Setar, Kedah
                            </p>
                            <p className="flex items-center">
                                <BsTelephone className="w-4 h-4 mr-2 text-yellow-500" />
                                04-772 1836
                            </p>
                            <p className="flex items-center">
                                <HiMail className="w-5 h-5 mr-2 text-yellow-500" />
                                sa.ste545@gmail.com
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p>© {new Date().getFullYear()} Sin Tatt Eggs Supplier Sdn. Bhd. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};
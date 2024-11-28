'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from '@/assets/menu.svg';
import SinTattLogo from '@/assets/sin-tatt-logo.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about-us', label: 'About Us' },
        { path: '/products', label: 'Products' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact-us', label: 'Contact Us' },
    ];

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="py-5 bg-transparent relative">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image 
                            src={SinTattLogo} 
                            alt="SinTatt Logo" 
                            className="h-28 w-auto"
                            priority
                            />
                    </Link>
                    <button 
                        onClick={toggleDrawer}
                        className="md:hidden z-50"
                    >
                        <Image 
                            src={MenuIcon} 
                            alt="Menu" 
                            width={20} 
                            height={20} 
                        />
                    </button>
                    <nav className="hidden md:flex gap-6 text-white text-2xl font-black items-center space-x-4">
                        {navItems.map((item) => (
                            <Link 
                                key={item.path}
                                href={item.path}
                                className={`navbar-item ${pathname === item.path ? 'navbar-active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Drawer */}
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={toggleDrawer}
                                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                                />
                                
                                {/* Drawer */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'tween', duration: 0.3 }}
                                    className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
                                >
                                    <div className="flex flex-col p-4">
                                        <button 
                                            onClick={toggleDrawer}
                                            className="self-end text-2xl mb-8"
                                        >
                                            ×
                                        </button>
                                        {navItems.map((item) => (
                                            <Link 
                                                key={item.path}
                                                href={item.path}
                                                onClick={toggleDrawer}
                                                className={`py-2 px-4 text-lg font-semibold ${
                                                    pathname === item.path 
                                                    ? 'text-red-600' 
                                                    : 'text-gray-800'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

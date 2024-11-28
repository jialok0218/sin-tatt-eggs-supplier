'use client';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // Make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && 
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 z-50"
                    aria-label="Back to top"
                >
                    <IoIosArrowUp size={24} />
                </button>
            }
        </>
    );
}; 
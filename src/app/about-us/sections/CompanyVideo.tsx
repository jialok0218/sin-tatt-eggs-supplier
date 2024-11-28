'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CompanyVideo: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section className="pb-24 bg-white"> 
            <div className="container">
                <motion.h2 
                    ref={ref}
                    className="text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    HISTORY OF <span className="text-red-600">SIN TATT</span>
                </motion.h2>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <video 
                        width="800" 
                        controls 
                        className="rounded-lg shadow-lg" 
                        controlsList="nodownload"
                    >
                        <source
                            src="/sin-tatt-company-video.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    )
}

export default CompanyVideo

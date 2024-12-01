'use client';
import React from "react";
import egg1 from "@/assets/egg1.png"
import egg2 from "@/assets/egg2.png"
import Image from "next/image"
import { motion } from "framer-motion"


const testimonials = [
    {
        name: "James Tan",
        text: "As a restaurant owner, their consistent egg quality and reliable delivery have been crucial for our kitchen operations. Couldn&apos;t be happier!",
        image: egg1
    },
    {
        name: "Mohd. Hafiz",
        text: "Their eggs are exceptional! The freshness is noticeable, and my bakery customers can taste the difference in our pastries.",
        image: egg2
    },
    {
        name: "Shanti Kumaran",
        text: "Best wholesale egg supplier we've worked with. Their temperature-controlled delivery ensures perfect quality every time.",
        image: egg1
    },
    {
        name: "Steven Wong",
        text: "Sin Tatt's premium eggs have consistently exceeded our quality standards. Their prompt delivery service ensures we always have fresh stock.",
        image: egg2
    },
    {
        name: "Nurul Aisyah",
        text: "Their selection is impressive. Our hotel guests love the variety we can offer at breakfast.",
        image: egg1
    },
    {
        name: "Rajesh Kumar",
        text: "Great customer service! They've always been responsive and accommodating to our cafe's varying order volumes.",
        image: egg2
    },
    {
        name: "Michael Lee",
        text: "The packaging is excellent - we had minimal breakage issues since switching to their service. Perfect for our distribution needs.",
        image: egg1
    },
    {
        name: "Siti Aminah",
        text: "Competitive pricing and consistent quality. Our food processing facility has benefited greatly from their reliable supply chain.",
        image: egg2
    },
    {
        name: "Priya Shankar",
        text: "Their reliable delivery system gives us complete confidence in the eggs's quality. Our customers appreciate the consistency.",
        image: egg1
    }
]

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TesttimonialsColumn = (props: { 
    className?: string; 
    testimonials: typeof testimonials 
    duration?:number
}) => (
    <div className={props.className}>
        <motion.div 
        animate={{
            translateY: "-50%",
        }}
        transition={{
            duration: props.duration || 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
                    {props.testimonials.map(({ text, name, image }, index) => (
            <div className="card" key={`${name}-${index}`}>
                <div>{text}</div>
                <div className="flex flex-col items-center mt-5">
                    <Image 
                        src={image} 
                        alt={`${name}'s avatar`}
                        className="h-10 w-10 rounded-full"
                    />
                    <div className="font-medium tracking-tight leading-5">
                        {name}
                    </div>
                    <div className="text-sm text-gray-500">
                        Customer
                    </div>
                </div>
            </div>
        ))}
            </React.Fragment>
        ))}
        </motion.div>
    </div>
)


export const Testimonials = () => {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container">
                <h2 className="section-title mt-5">What our customers say</h2>
                <p className="section-description mt-5">
                    We are proud of our work and the feedback we've received from our customers.
                </p>
                <div className="flex justify-center gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
                    <TesttimonialsColumn testimonials={firstColumn} duration={15}/>
                    <TesttimonialsColumn testimonials={secondColumn} 
                    className="hidden md:block" 
                    duration={19}
                    />
                 <TesttimonialsColumn testimonials={thirdColumn} 
                 className="hidden lg:block" 
                 duration={17}
                 />
                </div>
            </div>
        </section>
    )
}

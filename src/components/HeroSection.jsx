import React from 'react'
import { RiVideoLine } from "react-icons/ri";
import AnimatedLottie from '../components/AnimatedLottie';

function HeroSection() {
    return (
        <div className='pt-16 px-9 md:px-32 flex flex-col md:flex-row w-full border-2 gap-4'>
            <div className='topBox md:pt-24 md:pb-12 flex flex-col md:w-[40%] '>
                <h1 className='mb-4 text-[38px] font-bold text leading-tight text-wrap md:text-[50px]'>Create and sell custom products</h1>
                {["100% free to use", "900+ High-Quality Products", "Largest global print network"].map((text, index) => (
                    <div key={index} className='flex gap-2 mb-2'>
                        <p>✓</p>
                        <p>{text}</p>
                    </div>
                ))
                }
                <div className='flex gap-2 text-xl font-medium mt-6 mb-2'>
                    <button className='border-2 bg-green-500 px-3 py-2 rounded-sm hover:bg-green-600'>Start For Free</button>
                    <div className='flex gap-1 items-center py-2 px-3 text-xl font-medium border-2 border-slate-500 '>
                        <RiVideoLine />
                        <button className='hover:text-green-500'>How its work?</button>
                    </div>
                </div>
                <p className='text-green-500  font-semibold'>Trusted by over 8M sellers around the world</p>
            </div>
            <div className='animation-container md:w-[60%] '>
            <AnimatedLottie/>
            </div>


        </div>
    )
}

export default HeroSection

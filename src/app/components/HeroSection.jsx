"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello, I&apos;m{" "}
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'Nicole',
                            1000,
                            'UX/UI Designer',
                            1000,
                            'Web Developer',
                            1000,
                            'Software Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Hi, my name is Nicole L. Castro. I am 21 years old and an aspiring UI/UX designer and a passionate Web Designer/Developer and Software Developer.
                </p>
                <div>
                    <button 
                        className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3"
                        onClick={() => window.open('https://drive.google.com/file/d/1jG57WG9rRitziNZnI6rKrucZll_J2MWk/view?usp=sharing')}
                    >
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                        src="/images/pro2.png"
                        alt="Nicole L. Castro image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={150}
                        height={200}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection

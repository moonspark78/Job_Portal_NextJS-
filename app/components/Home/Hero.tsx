import Image from 'next/image'
import React from 'react'
import HeroImg from "@/public/images/hero.svg"

const Hero = () => {
  return (

    <div className='pt-[5rem] pb-[3rem]'>
        <div className='w-[100%] h-[60vh] flex flex-col it justify-center'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
                {/*  content */}
                <div>
                    <h1 className='text-[29px] sm:text-[35px] lg:text-[43px] xl:text-[60px] text-[#05264e] leading-[3rem] 
                    lg:leading-[4rem] font-extrabold'>
                        The <span className='text-blue-500'>Easiest way</span> <br /> To Get Your New Job
                    </h1>
                </div>
                {/* image */}
                <div className='hidden lg:block'>
                    <Image src={HeroImg} alt='hero-img' width={700} height={400}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero 
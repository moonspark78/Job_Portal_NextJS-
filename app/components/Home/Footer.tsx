import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]
        items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
            {/* 1st part of the footer */}
            <div>
                <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>
                    Jobify
                </h1>
                <p className='text-[14px] text-white text-opacity-70'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur porro,
                    provident iste dolorum a distinctio sint expedita deleniti asperiores perspiciatis.
                </p>
                {/* social icon */}
                <div className='mt-[1.5rem] flex items-center space-x-3'>
                    <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                        <FaFacebookF className='text-white cursor-pointer'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-sky-600 rounded-full flex items-center justify-center flex-col'>
                        <FaTwitter className='text-white cursor-pointer'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                        <FaYoutube className='text-white cursor-pointer'/>
                    </div>
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                        <FaInstagram className='text-white cursor-pointer'/>
                    </div>
                </div>
            </div>
            {/* 2nd part of footer */}
            <div>
                <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>About US</h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
                    Job
                </p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
                    Privacy
                </p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
                    Police
                </p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
                    Application
                </p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>
                    Candidates
                </p>
            </div>
            {/* 3rd part of footer */}
        </div>
    </div>
  )
}

export default Footer
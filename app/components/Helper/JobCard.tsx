import { Job } from '@/data';
import Image from 'next/image';
import React from 'react'
import { FaMapLocation } from 'react-icons/fa6';

interface Props{
    job: Job;
}




const JobCard = ({job}:Props) => {
  return (
    <div className='p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all 
    duration-300 border-gray-500 rounded-lg border-opacity-10'>
        <div className='flex items-center space-x-6'>
            {/* Image */}
            <div>
                <Image src={job?.image} alt='iconn' width={50} height={50}/>
            </div>
            {/* Content */}
            <div>
                <h1 className='text-[17px] font-semibold mb-[0.4rem]'>
                    {job?.title}
                </h1>
                <div className='flex items-center md:space-x-10 space-x-4'>
                    <div className='flex items-center space-x-2'>
                        <FaMapLocation className='w-[0.8rem] h-[0.8rem] text-pink-700'/>
                        <p className='text-[14px] text-black font-semibold text-opacity-60'>
                            {job?.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobCard
import React from 'react'

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
            </div>
        </div>
    </div>
  )
}

export default Footer
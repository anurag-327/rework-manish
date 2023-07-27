import React from 'react'
import ArrowRight from '../assets/right.svg'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[40px] my-[10%] px-[180.5px]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[72px] leading-[120%] font-bold'>don’t hesitate, <span className='text-purple-700'>get in touch</span></h1>
        <p className='text-slate-600 text-center leading-[120%] text-[24px]'>One of our customer service representatives will be happy to assist you.</p>
      </div>
      <button className=' w-[200px] bg-purple-600 flex items-center justify-center gap-[9.367px] px-[20px] py-[14px] rounded-full text-white text-[22.81px] font-semibold'>contact us <span><img src={ArrowRight} alt="" /></span></button>
    </div>
  )
}

export default Contact

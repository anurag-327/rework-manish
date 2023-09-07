import React from 'react'
import purpleArrow from '../assets/purple-arrow.svg'
const Contact = () => {
  return (
    <div className='flex flex-col bg-[#5C27C0] px-8 py-5 md:w-[80%] w-[90%]  mx-auto rounded-3xl text-white items-center justify-center gap-[40px] my-[10%] '>
      <div className='flex flex-col items-center'>
        <h1 className='md:text-[72px] leading-[120%] text-[45px] text-center  font-bold'>don’t hesitate, <span className=''>get in touch</span></h1>
        <p className=' text-center leading-[120%] mt-2 text-[24px]'>One of our customer service representatives will be happy to assist you.</p>
      </div>
      <button className=' w-[200px] bg-white text-blue-600 flex items-center justify-center gap-[9.367px] px-[20px] py-[14px] rounded-full  text-[22.81px] font-semibold'>
        contact us <span><img src={purpleArrow} alt="" /></span></button>
    </div>
  )
}

export default Contact

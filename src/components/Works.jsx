import React from 'react'
import workFirst from '../assets/work-1.png'
import workSecond from '../assets/work-2.png'
import workThird from '../assets/work-3.png'
import workFourth from '../assets/work-4.png'
import purpleArrow from '../assets/purple-arrow.svg'
import Card from './Card'
const Works = () => {
  return (
    <div className='w-screen bg-purple-700 md:h-screen h- md:bg-transparent'>
      <div className='bg-purple-700 h-[50%]'>
        <h1 className='leading-[125%] text-[64px] pt-[82px] text-center text-white'>steps to earn</h1>
      </div>
      <div className="cards gap-[32px] bg-purple-700 md:bg-transparent  flex md:flex-row flex-col  md:mx-[112px] py-4 md:py-0 sm:mx-[50px]  relative top-[-20%]">
        <Card number={1} cardImg={workFirst} title={"Sign Up"} content={"Follow the link below to sign up and get access of the current job postings"} />
        <Card number={2} cardImg={workSecond} title={"Upload Details"} content={"Shortlist the most qualified candidate and upload their details for the top companies"} />
        <Card number={3} cardImg={workThird} title={"Selection Process"} content={"Candidate profile goes through AI-powered shortlisting and selection process"} />
        <Card number={4} cardImg={workFourth} title={"Get Rewards"} content={"Viola! As soon as the candidate gets selected you get your benefits"} />
      </div>
      <div className='flex items-center justify-center mt-2 bg-white'>
            <button type="button" className="py-2.5 px-5 mt-4 mr-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-blue-600  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Get Started <img src={purpleArrow} alt="" className="inline-block" /></button>
      </div>
      
    </div>
  )
}

export default Works

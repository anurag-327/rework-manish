import React from 'react'
import workFirst from '../assets/work-1.png'
import workSecond from '../assets/work-2.png'
import workThird from '../assets/work-3.png'
import workFourth from '../assets/work-4.png'

const WorksCard = ({number, cardImg, title, content}) => {
  return (
    <div className='py-[56px] px-[24px] flex flex-col gap-[24px] bg-white shadow-2xl rounded-2xl items-center justify-center z-10'>
      <div className='rounded-full w-[50px] border-[4px] py-[10px] flex justify-center items-center z-20 border-purple-700 relative top-[-28%] bg-white'>{number}</div>
      <img src={cardImg} className='h-[64px] w-[64px]' alt="" />
      <h1 className='text-black text-[24px] leading-[120%]'>{title}</h1>
      <p className='text-slate-600 leading-[120%] text-[20px] text-center'>{content}</p>
    </div>
  )
}

const Works = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='bg-purple-700 h-[50%]'>
        <h1 className='leading-[125%] text-[64px] pt-[82px] text-center text-white'>steps to earn</h1>
      </div>
      <div className="cards flex gap-[32px] mx-[112px] relative top-[-20%]">
        <WorksCard number={1} cardImg={workFirst} title={"Sign Up"} content={"Follow the link below to sign up and get access of the current job postings"} />
        <WorksCard number={2} cardImg={workSecond} title={"Upload Details"} content={"Shortlist the most qualified candidate and upload their details for the top companies"} />
        <WorksCard number={3} cardImg={workThird} title={"Selection Process"} content={"Candidate profile goes through AI-powered shortlisting and selection process"} />
        <WorksCard number={4} cardImg={workFourth} title={"Get Rewards"} content={"Viola! As soon as the candidate gets selected you get your benefits"} />
      </div>
      <div className='bg-white h-[50%]'>
        
      </div>
    </div>
  )
}

export default Works

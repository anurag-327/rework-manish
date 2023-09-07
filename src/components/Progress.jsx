import React from 'react'
import AI_progress from '../assets/AI_progress.svg'
import Hand_progress from '../assets/Hand_progress.svg'
import purpleArrow from '../assets/purple-arrow.svg'

const ImageDiv = ({ imgLink }) => {
  return (
    <div className='my-[5%] hidden md:block mx-auto w-full'>
      <img src={imgLink} alt="" />
    </div>
  )
}

const ContentDiv = ({ title, purple, content,imgLink }) => {
  return (
    <div className='my-[12%] mx-[40px] md:mx-[100px] flex flex-col gap-[32px]'>
      <h1 className='text-[40px] text-center md:text-[64px]  md:text-left leading-[115%] '>{title} <span className='text-purple-800'>{purple}</span></h1>
      <img src={imgLink} alt="" className="block md:hidden" />
      <p className='text-[20px] text-left leading-[120%] '>{content}</p>
      <button className='flex mx-auto md:mx-0 w-[162px] my-[5%] py-[7px] px-[15px] border-[2.5px] gap-[9.367px] rounded-full border-purple-900 justify-between text-purple-900 font-bold text-lg '>get started <img src={purpleArrow} alt="" className='my-auto' /></button>
    </div>
  )
}

const Progress = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row  gap-[20px] md:gap-[54px] w-screen md:justify-between justify-center items-center '>
        <ContentDiv imgLink={AI_progress} title={"unleashing the power of "} purple={"artificial intelligence"} content={"Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies and maximize your earning"} />
        <ImageDiv imgLink={AI_progress} />
        
      </div>
      <div className='flex flex-col md:flex-row  gap-[20px] md:gap-[54px] w-screen md:justify-between justify-center items-center '>
        <ImageDiv imgLink={Hand_progress} />
        <ContentDiv imgLink={Hand_progress} title={"prioritizing progress of the "} purple={"community"} content={"Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies and maximize your earning"} />
      </div>
     
    </div>
  )
}

export default Progress

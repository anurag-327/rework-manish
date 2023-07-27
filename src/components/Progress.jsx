import React from 'react'
import AI_progress from '../assets/AI_progress.svg'
import Hand_progress from '../assets/Hand_progress.svg'
import purpleArrow from '../assets/purple-arrow.svg'

const Image = ({ imgLink }) => {
  return (
    <div className='my-[5%] w-full'>
      <img src={imgLink} alt="" />
    </div>
  )
}

const Content = ({ title, purple, content }) => {
  return (
    <div className='my-[12%] mx-[100px] flex flex-col gap-[32px]'>
      <h1 className='text-[64px] text-left leading-[115%] '>{title} <span className='text-purple-800'>{purple}</span></h1>
      <p className='text-[15px] text-left leading-[120%] '>{content}</p>
      <button className='flex w-[162px] my-[5%] py-[7px] px-[15px] border-[2.5px] gap-[9.367px] rounded-full border-purple-900 justify-between text-purple-900 font-bold text-lg '>get started <img src={purpleArrow} alt="" className='my-auto' /></button>
    </div>
  )
}

const Progress = () => {
  return (
    <div>
      <div className='flex gap-[54px] w-screen justify-between'>
        <Content title={"unleashing the power of "} purple={"artificial intelligence"} content={"Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies and maximize your earning"} />
        <Image imgLink={AI_progress} />
      </div>
      <div className='flex gap-[54px] w-screen justify-between'>
        <Image imgLink={Hand_progress} />
        <Content title={"prioritizing progress of the "} purple={"community"} content={"Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies and maximize your earning"} />
      </div>
    </div>
  )
}

export default Progress

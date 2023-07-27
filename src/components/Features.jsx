import React from 'react'
import cardFirst from '../assets/card-1.png'
import cardSecond from '../assets/card-2.png'
import cardThird from '../assets/card-3.png'

const FeaturesCards = ({title, content, cardImg}) => {
  return (
    <div className='pt-[48px] w-[28%] px-[32px] pb-[64px] flex flex-col gap-[12px] items-center justify-center shadow-2xl rounded-xl'>
      <img src={cardImg} alt="" />
      <h1 className='text-[32px] leading-normal'>{title}</h1>
      <p className='text-center text-[20px] text-slate-600 leading-[120%]'>{content}</p>
    </div>
  )
}

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen gap-[50px] my-[10%]'>
      <h1 className='text-[64px] text-center leasing-[125%]'>amazing <span className='text-purple-800'>features</span></h1>
      <div className='flex gap-[16px] md:flex-row items-center justify-center mx-auto'>
        <FeaturesCards cardImg={cardFirst} title={"Automated sales"} content={"Providing you unlimited access to steady stream of jobs so that you can source more, to earn more."} />
        <FeaturesCards cardImg={cardSecond} title={"Highest commission"} content={"Offering the top commission with no sales or admin work. Best benefits for the best resourcing efforts."} />
        <FeaturesCards cardImg={cardThird} title={"Community perks"} content={"With our community, you get to enjoy milestone based increment, insurance coverage, and free training programs"} />
      </div>
    </div>
  )
}

export default Features

import React from 'react'
import HeroImg from '../assets/home.svg'
import purpleArrow from '../assets/purple-arrow.svg'
import check from '../assets/check-mark-circle-2.svg'
import First from '../assets/image_39.png'
import Second from '../assets/image_42.png'
import Third from '../assets/image_43.png'
import clutch from '../assets/clutch.png'
import { Star, StarHalf } from 'phosphor-react'


const FloatingDivs = ({classname, img, title, content}) => {
  return (
    <div className={`flex backdrops md:mt-0 mt-4 shadow-2xl md:shadow-none border-2 border-purple-600 border-l border-r  md:border-r-0 border-t border-b px-[16.1px] py-[6.69px] m-[3.2px] justify-center items-center gap-[10.7px] ${classname}`}>
      <div className='img_div'>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className='text-[16.057px] font-bold'>{title}</h3>
        <p className='font-Quicksand text-[10.57px] text-slate-700'>{content}</p>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="flex flex-col justify-between w-screen overflow-x-hidden md:flex-row">
      <div>
        <h1 className='font-sans font-extrabold text-[54px]  text-center md:text-[59px] mt-[110px] md:mt-[142px] md:text-left mx-[50px] md:mx-[100px]'>It's your turn to <span className='text-purple-800 my-[32px]'> Moonlight </span></h1>
        <div className='mx-[100px] my-[32px]'>
          <button className='flex my-[10px] py-[7px] px-[15px] mx-auto md:mx-0 border-[2.5px] gap-[9.367px] rounded-full border-purple-900 justify-between text-purple-900 font-bold text-lg '>get started <img src={purpleArrow} alt="" className='my-auto' /></button>
          <p className="hidden md:flex text-slate-500"><span><img src={check} alt="" className='pr-[8px] h-[24px] w-[24px]' /></span> No credit card details required</p>
        </div>
        <div className=' flex-col  flex md:px-[100px] px-[40px] justify-center items-start gap-[6px] my-[50px]'>
          <div className="flex gap-3 p-2 mx-auto mb-6 border-2 border-gray-400 rounded-md md:mx-0 ratingbar">
            <div>
              <span>REVIEWED ON</span>
              <img src={clutch}  alt=""/>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1">
                <Star size={28} color="#efe92e" weight="fill" />
                <Star size={28} color="#efe92e" weight="fill" />
                <Star size={28} color="#efe92e" weight="fill" />
                <Star size={28} color="#efe92e" weight="fill" />
                <StarHalf size={28} color="#efe92e" weight="fill" />
              </div>
              <div className="font-semibold">
                4.7 RATING
              </div>
            </div>
          </div>
          <p className='text-slate-400 mx-auto md:mx-0 text-[16px]'>Trusted by recruiters</p>
          <div className="mx-auto box md:mx-0 ">
            <div className="frame-wrapper">
              <div className="frame">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://generation-sessions.s3.amazonaws.com/d77526522320b39e0c27510a1af04643/img/ellipse-765@2x.png"
                />
                <img
                  className="img"
                  alt="Ellipse"
                  src="https://generation-sessions.s3.amazonaws.com/d77526522320b39e0c27510a1af04643/img/ellipse-761@2x.png"
                />
                <img
                  className="img"
                  alt="Ellipse"
                  src="https://generation-sessions.s3.amazonaws.com/d77526522320b39e0c27510a1af04643/img/ellipse-762@2x.png"
                />
                <img
                  className="img"
                  alt="Ellipse"
                  src="https://generation-sessions.s3.amazonaws.com/d77526522320b39e0c27510a1af04643/img/ellipse-763@2x.png"
                />
                <img
                  className="img"
                  alt="Ellipse"
                  src="https://generation-sessions.s3.amazonaws.com/d77526522320b39e0c27510a1af04643/img/ellipse-764@2x.png"
                />
                <div className="group">
                  <div className="overlap-group">
                    <div className="element">
                      <span className="text-wrapper">10K</span>
                      <span className="span">&nbsp;</span>
                      <span className="text-wrapper">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
            <FloatingDivs img={First} title={"AI-Powered Shortlisting"} content={"Save time spent in manually sourcing & screening candidates."} classname={"md:absolute mx-auto top-[50%]"} />
            <FloatingDivs img={Second} title={"Backed by Community"} content={"Build XL-sized pipelines of relevant candidates."} classname={"md:absolute top-[65%] mx-auto  left-[55%]"} />
            <FloatingDivs img={Third} title={"Hassle-free Payouts"} content={"Eliminate hefty closure fees & expensive database subscriptions."} classname={"md:absolute mx-auto top-[80%]"} />
       
        
        <img src={HeroImg} className='heroImg hidden md:block h-auto w-auto mt-[49px] -z-50' alt="Hero" />
      </div>
    </div>
  )
}

export default Hero

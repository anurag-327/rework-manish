import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import { Pagination, FreeMode, Autoplay } from 'swiper/modules';

const Praises = ({praise, praiseImg, name, post}) => {
  return (
    <div className="flex items-center justify-center flex-col rounded-xl shadow-2xl gap-[52px]">
      <p className='text-center text-[24px] leading-[120%] text-slate-600 mx-[113px]'>{praise}</p>
      <div className='flex flex-col gap-[8px] text-center py-[3%]'>
        <p className='leading-[120%] text-[24px] font-bold'>{name}</p>
        <p className='leading-[120%] text-[24px]'>{post}</p>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className='flex flex-col gap-[96px] my-[7%]'>
      <h1 className='text-center mt-[80px] mx-auto text-[64px] leading-[125%]'>praises for <span className="text-purple-700">rework</span></h1>
      <div className='praises flex flex-wrap justify-center mx-auto items-center w-[847.84px] h-auto'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
          autoplay={true}
          className='mySwiper'
        >
        <SwiperSlide>
          <Praises praise={"“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"} name={"Rohit Shrivastav"} post={"HR, Google"} />
        </SwiperSlide>
        <SwiperSlide>
          <Praises praise={"“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"} name={"Rohit Shrivastav"} post={"HR, Google"} />
        </SwiperSlide>
        <SwiperSlide>
          <Praises praise={"“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"} name={"Rohit Shrivastav"} post={"HR, Google"} />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonials

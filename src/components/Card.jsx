const Card = ({number, cardImg, title, content}) => {
    return (
      <div className='py-[24px] px-[24px] flex flex-col gap-[16px] w-[80%] md:w-[400px] mx-auto bg-white shadow-2xl rounded-2xl items-center justify-center z-10'>
        <div className='rounded-full hidden text-[20px] md:flex flex  shadow-inner text-white w-[80px] bg-[#5C27C0] aspect-square border-[4px] py-[10px] justify-center items-center z-20 border-purple-700 relative top-[-25%] '>{number}</div>
        <img src={cardImg} className='h-[64px] w-[64px]' alt="" />
        <h1 className='text-black text-[24px] leading-[120%]'>{title}</h1>
        <p className='text-slate-600 leading-[120%] text-[20px] text-center'>{content}</p>
      </div>
    )
  }
  export default Card
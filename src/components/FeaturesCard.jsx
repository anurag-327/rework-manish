const FeaturesCards = ({title, content, cardImg}) => {
    return (
      <div className='pt-[48px]  w-[90%]  md:w-[28%] px-[32px] pb-[64px] flex flex-col gap-[12px] items-center justify-center shadow-2xl rounded-xl'>
        <img src={cardImg} alt="" />
        <h1 className='text-[32px] leading-normal'>{title}</h1>
        <p className='text-center text-[20px] text-slate-600 leading-[120%]'>{content}</p>
      </div>
    )
  }
  export default FeaturesCards
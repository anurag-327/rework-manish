const Review = ({praise, praiseImg, name, post}) => {
    return (
      <div className="flex bg-purple-700 sm:text-black sm:bg-white text-white text-black items-center justify-center flex-col rounded-xl border-2 border-gray-400 py-5 gap-[52px]">
        <p className='text-center text-white text-[24px] leading-[120%] sm:text-slate-600  mx-[30px] md:mx-[113px]'>{praise}</p>
        <div className='flex flex-col gap-[8px] text-center py-[3%]'>
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" className="w-[100px] mx-auto" alt="company logo"/>
          <p className='leading-[120%] text-[24px] font-bold'>{name}</p>
          <p className='leading-[120%] text-[24px]'>{post}</p>
        </div>
      </div>
    )
  }
  export default Review
  
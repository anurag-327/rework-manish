import React, { useState } from 'react'
import rework from '../assets/rework.svg'

const Navbar = () => {

  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }

  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <div className={`${navColor ? "sticky" : ""} w-screen px-[100px] py-[12px] flex justify-between fixed top-0 left-0`}>
      <img src={rework} className="rework cursor-pointer" />
      <ul className="list-none my-[10px]">
        <li className="inline-block mx-[24px] py-[4px] w-[115px] h-[35px] text-slate-500 cursor-pointer hover:text-lg transition-ease-in-out duration-500">
          For Recruiters
        </li>
        <li className="inline-block mx-[24px] py-[4px] w-[115px] h-[35px] text-slate-500 cursor-pointer hover:text-lg transition-ease-in-out duration-500">
          For Employers
        </li>
        <li className="inline-block mx-[24px] py-[4px] w-[115px] h-[35px] text-slate-500 cursor-pointer hover:text-lg transition-ease-in-out duration-500">
          Our Team
        </li>
        <li className="inline-block mx-[24px]">
          <button className="px-[20px] py-[10.267px] rounded-3xl border-purple-950 border-[2.347px] text-purple-900 font-bold">
            Sign In
          </button>
        </li>
        <li className="inline-block mx-[24px]">
          <button className="px-[20px] py-[10.267px] rounded-3xl border-purple-950 border-[2.347px] bg-purple-950 text-white font-bold">
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar

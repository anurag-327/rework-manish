import React, { useState } from 'react'
import rework from '../assets/rework.svg'

const Navbar = () => 
{
  function openDrawer()
  {
      
      document.querySelector(".Drawer").classList.toggle("hidden")
  }
  return (

<nav className="fixed top-0 z-50 w-full bg-white border-gray-200 shadow-md dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
  <a className="block text-teal-600" href="#">
         <img src={rework} className="cursor-pointer reworkAI" />
  </a>
    <button onClick={openDrawer}  type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="items-center justify-center hidden w-full gap-5 md:flex Drawer md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
               <a
                 className="text-gray-500 transition hover:text-gray-500/75"
                 href="#"
               >
                 Talent Finder
               </a>
             </li>

             <li>
               <a
                 className="text-gray-500 transition hover:text-gray-500/75"
                 href="#"
               >
                 Reinsure
               </a>
             </li>

             <li>
               <a
                 className="text-gray-500 transition hover:text-gray-500/75"
                 href="#"
               >
                 For recruiters
               </a>
             </li>

             <li>
               <a
                 className="text-gray-500 transition hover:text-gray-500/75"
                 href="#"
               >
                 For Employees
               </a>
             </li>

             <li>
               <a
                 className="text-gray-500 transition hover:text-gray-500/75"
                 href="#"
               >
                 Our Team
               </a>
             </li>
      </ul>
      <div className="flex flex-col items-center gap-5 md: md:flex-row">
          <div className="hidden sm:flex">
            <a
              className="rounded-full border-2 border-purple-700 bg-white px-5 py-2.5 text-sm font-medium text-purple-700 shadow"
              href="#"
            >
              Sign in
            </a>

            <div className="hidden sm:flex">
              <a
                className="rounded-full bg-purple-700 px-5 py-2.5 text-sm font-medium text-white"
                href="#"
              >
                Sign up
              </a>
            </div>
          </div>
          </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar


    // <div className="bg-white z-50 w-screen px-[100px] py-[12px] flex justify-between fixed top-0 left-0">
    // //   <img src={rework} className="cursor-pointer rework" />
    // //   <ul className="list-none my-[10px]">
    // //     <li className="inline-block mx-[24px] py-[4px] w-[115px] h-[35px] text-slate-500 cursor-pointer hover:text-lg transition-ease-in-out duration-500">
    // //       For Recruiters
    // //     </li>
    // //     <li className="inline-block mx-[24px] py-[4px] w-[115px] h-[35px] text-slate-500 cursor-pointer hover:text-lg transition-ease-in-out duration-500">
    // //       For Employers
    // //     </li>
    // //     <li className="inline-block mx-[24px] py-[4px] w-[115px] h-[35px] text-slate-500 cursor-pointer hover:text-lg transition-ease-in-out duration-500">
    // //       Our Team
    // //     </li>
    // //     <li className="inline-block mx-[24px]">
    // //       <button className="px-[20px] py-[10.267px] rounded-3xl border-purple-950 border-[2.347px] text-purple-900 font-bold">
    // //         Sign In
    // //       </button>
    // //     </li>
    // //     <li className="inline-block mx-[24px]">
    // //       <button className="px-[20px] py-[10.267px] rounded-3xl border-purple-950 border-[2.347px] bg-purple-950 text-white font-bold">
    // //         Sign Up
    // //       </button>
    // //     </li>
    // //   </ul>
    // // </div>
//     <header className="fixed top-0 z-50 w-full bg-white shadow-md">
//   <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16">
//       <div className="flex-1 md:flex md:items-center md:gap-12">
//         <a className="block text-teal-600" href="#">
//         <img src={rework} className="cursor-pointer rework" />
//         </a>
//       </div>

//       <div className="md:flex md:items-center md:gap-12">
//         <nav  className="hidden md:block">
//           <ul className="flex items-center gap-6 text-sm">
//             <li>
//               <a
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="#"
//               >
//                 Talent Finder
//               </a>
//             </li>

//             <li>
//               <a
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="#"
//               >
//                 Reinsure
//               </a>
//             </li>

//             <li>
//               <a
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="#"
//               >
//                 For recruiters
//               </a>
//             </li>

//             <li>
//               <a
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="#"
//               >
//                 For Employees
//               </a>
//             </li>

//             <li>
//               <a
//                 className="text-gray-500 transition hover:text-gray-500/75"
//                 href="#"
//               >
//                 Our Team
//               </a>
//             </li>

            
//           </ul>
//         </nav>

//         

//           <div className="block md:hidden">
//             <button
//               className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 h-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 stroke-width="2"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
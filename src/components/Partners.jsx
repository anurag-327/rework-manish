import React from 'react'
import nokia from '../assets/nokia.png'
import google from '../assets/google.png'
import yamaha from '../assets/yamaha.png'
import amazon from '../assets/amazon.png'
import ibm from '../assets/ibm.png'
const Partners = () => {
  return (
   <div className="flex flex-col items-center justify-start w-screen gap-2 py-5 mt-8 bg-purple-700">
    <h2 className="font-semibold text-white">Trusted by 1000+ brands including</h2>
    <div className="flex gap-5 mx-auto ">
      <img src={nokia} alt="nokia"/>
      <img src={google} alt="nokia"/>
      <img src={amazon} alt="nokia"/>
      <img src={yamaha} alt="nokia"/>
      <img src={ibm} alt="nokia"/>
    </div>

   </div>
  );
}

export default Partners

import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import './GlowButton.css';

const GlowButton = ({showText3}) => {
  return (
    <>
    {showText3 && <div className='flex glow-button-mobile'>
    <div className='flex btn md:absolute md:top-[243px] top-[50px] px-[30px] py-[20px] rounded-[15px] bg-[#066042] md:text-[22px] text-[1px] text-white font-normal cursor-pointer fade-in delay'><span className='py-[6px] pr-[10px]'><FaTelegramPlane/></span>Join waitlist</div>
    </div>}
    </>
  )
}

export default GlowButton
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import './Menu.css'

const Menu = ({fadeIn, moveToTopRight, showText5}) => {
    return (
        <div className="container-logo">
            <div
                className={`text-logo md:text-[32px] text-[24px] text-[#FF9F3F] font-extrabold ${fadeIn ? 'fade-in-logo' : ''} ${moveToTopRight ? 'move-to-top-right' : ''}`}
            >
                inshallah

            </div>
            {showText5 && <div className='text fade-in-2 delay-1'>
                <div className='absolute md:right-[100px] right-[25px] md:top-[30px] top-[25px] md:text-[30px] text-[20px] text-[#FF9F3F]'><FaTwitter /></div>
                <div className='absolute md:right-[50px] right-[25px] md:top-[30px] top-[65px] md:text-[30px] text-[20px] text-[#FF9F3F]'><FaTelegramPlane /></div>
            </div>}

        </div>
    )
}

export default Menu
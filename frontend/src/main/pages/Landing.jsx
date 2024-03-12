import React, { useState, useEffect } from 'react';
import Desert from '../../assets/bg-desert.png'
import Alliance from '../../assets/alliance_2.png'

import Menu from '../components/Menu';
import GlowButton from '../components/GlowButton';
import './Landing.css';

const Landing = () => {
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showText5, setShowText5] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [moveToTopRight, setMoveToTopRight] = useState(false);

    useEffect(() => {
        // Start the animation after a short delay
        const timeout = setTimeout(() => {
          setFadeIn(true);
        }, 500);
    
        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
      }, []);
    
      useEffect(() => {
        // Start the movement animation after the fade-in animation completes
        if (fadeIn) {
          const timeout = setTimeout(() => {
            setMoveToTopRight(true);
          }, 500); // Adjust this delay as required
    
          // Clean up the timeout to avoid memory leaks
          return () => clearTimeout(timeout);
        }
      }, [fadeIn]);
  
    useEffect(() => {
      // Simulate fading in each text one by one
      const timer1 = setTimeout(() => setShowText1(true), 1600);
      const timer2 = setTimeout(() => setShowText2(true), 1600);
      const timer3 = setTimeout(() => setShowText3(true), 2500);
      const timer4 = setTimeout(() => setShowText4(true), 1800);
      const timer5 = setTimeout(() => setShowText5(true), 1000);
  
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }, []); // Run this effect only once when component mounts
    return (
        <>
            {/* Background Image */}
            <img src={Desert} alt="" className='wave-bg fixed'/>

            {/* content overlay above the background */}
            <div className="content-overlay">

            <div className='image-overlay'></div>

            {/* Menu & Logo with animation */}        
            <Menu fadeIn={fadeIn} moveToTopRight={moveToTopRight} showText5={showText5}/>

            {/* Main Content */}
                <div className={`text-container md:top-[170px] top-[125px] md:left-[30px] md:text-left text-center`}>

                {/* Sub-center Content */}
                    {showText1 && <label className='main-text text-white md:text-[64px] text-[50px] md:leading-[70px] leading-[50px] font-semibold text fade-in-2 delay-1'>Halal Ethereum
                        <br/>Staking
                    </label>}
                    {showText2 && <p className='font-normal md:text-[24px] text-[8px] text-white pt-[22px] pb-[33px] text fade-in delay-2'>Maximize yield. Minimize riba.</p>}
                    <GlowButton showText3={showText3}/>

                {/* Sub-bottom Content */}
                    <div className='flex alliance-logo'>
                        {showText4 && <div className='relative md:top-[200px] top-[100px] text-[#FF9F3F] md:text-[24px] text-[18px] font-normal font-sans text fade-in-2 delay-3'>
                            Backed by the best
                            <img src={Alliance} alt="" className='mt-[20px] md:w-[253px] w-[160px]' />
                        </div>}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Landing
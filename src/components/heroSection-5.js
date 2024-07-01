import React from "react";
import Sales from '../assets/images/sales.png';

function HeroSection5(){
    return(
        <>
        <div className='max-w-screen-xl  mx-auto justify-center items-center'>
        <div className="max-w-7xl pl-3 pr-3">
          <div className="bg-dark-blue justify-center items-center">
            <div className="flex">
              <div className="text-white pl-11 pb-[80px]">
             <h1 className="pt-[120px] font-[Lato] font-black text-[69px] leading-[76px]">Book a meeting <span className="text-[#FFC145]">to get started</span></h1>
             <p className="mt-9 font-[Sans] text-xl font-normal leading-[30px]">Speak to an expert to find out how Digital Consumer Intelligence will change the way you work.</p>
             <button type="submit" class="mt-11 uppercase font-[Sans] w-auto bg-[#FFC145] text-black text-[16px] px-12 py-5 font-bold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#FFC145]">book a meeting</button>
             </div>
             <img src={Sales} alt="error_img" className="max-w-2xl mt-9"/>
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default HeroSection5;
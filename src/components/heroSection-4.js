import React from "react";
import Profile1 from '../assets/images/profile-1.png';
import Flag1 from '../assets/images/flag-1.png';
import Profile2 from '../assets/images/profile-2.png';
import Profile3 from '../assets/images/profile-3.png';
import Flag2 from '../assets/images/flag-2.png';

function HeroSection4(){
    return(
        <>
        <div className='max-w-screen-xl mx-auto justify-center items-center'>
            <br/><br/>
            <div className="font-[SansBold] text-[#0066BA] font-extrabold mt-6 text-sm text-center tracking-[7px] uppercase">our sales team</div>
            <h2 className="text-center font-[Lato] text-[32px] font-black text-[#1B1D28] leading-[60px] mt-2">We Are Available For You Everytime</h2>
            {/* Img+Description */}
            <br></br><br></br>
            <div className="flex justify-around items-center">
            {/* Person-1 */}
                <div className="font-[Sans]">
                <div className="relative">
                <img src={Profile1} alt="avatar" className="w-[74px] h[74px]" />
                <img src={Flag1} alt="error_flag" className="w-[26px] h-auto rounded-full border-2 border-white absolute -mt-7 ml-14" />
                </div>
                <h2 className="text-[#0D0D0D] font-bold text-lg leading-[25px] mt-2">6:45 PM</h2>
                <p className="text-[#0D0D0D] font-bold text-sm leading-6 mt-1">Cameron Williamson</p>
                <h3 className="uppercase text-[#666666] text-xs leading-[19px] mt-1">New Jersey, United states</h3>
                <p className=" text-[#666666] text-xs leading-[19px] mt-1">Cameron@dma.com</p>
                <br></br>
                <button className="uppercase px-5 py-3 border-[1.5px] border-[#0066BA] text-[#0066BA] text-xs font-bold">schedule a call</button>
                </div>
            {/* Person-2 */}
            <div className="font-[Sans]">
                <div className="relative">
                <img src={Profile2} alt="avatar" className="w-[74px] h[74px]" />
                <img src={Flag1} alt="error_flag" className="w-[26px] h-auto rounded-full border-2 border-white absolute -mt-7 ml-14" />
                </div>
                <h2 className="text-[#0D0D0D] font-bold text-lg leading-[25px] mt-2">6:15 AM</h2>
                <p className="text-[#0D0D0D] font-bold text-sm leading-6 mt-1">Kathryn Murphy</p>
                <h3 className="uppercase text-[#666666] text-xs leading-[19px] mt-1">New york, United states</h3>
                <p className=" text-[#666666] text-xs leading-[19px] mt-1">Kathryn@dma.com</p>
                <br></br>
                <button className="uppercase px-5 py-3 border-[1.5px] border-[#0066BA] text-[#0066BA] text-xs font-bold">schedule a call</button>
                </div>
            {/* Person-3 */}
            <div className="font-[Sans]">
                <div className="relative">
                <img src={Profile3} alt="avatar" className="w-[74px] h[74px]" />
                <img src={Flag2} alt="error_flag" className="w-[26px] h-auto rounded-full border-2 border-white absolute -mt-7 ml-14" />
                </div>
                <h2 className="text-[#0D0D0D] font-bold text-lg leading-[25px] mt-2">6:15 PM</h2>
                <p className="text-[#0D0D0D] font-bold text-sm leading-6 mt-1">Eleanor Pena</p>
                <h3 className="uppercase text-[#666666] text-xs leading-[19px] mt-1">New Delhi, India</h3>
                <p className=" text-[#666666] text-xs leading-[19px] mt-1">Eleanor@dma.com</p>
                <br></br>
                <button className="uppercase px-5 py-3 border-[1.5px] border-[#0066BA] text-[#0066BA] text-xs font-bold">schedule a call</button>
                </div>           
            </div>
            <br></br><br></br>
        </div>
        </>
    );
}

export default HeroSection4;
import React from "react";
import VS from '../assets/images/vs.png';
import Brain from '../assets/images/brain-bulb.svg';
import Three from '../assets/images/three-stars.svg';
import Faces from '../assets/images/faces.svg';
import Five from '../assets/images/five-stars.svg';

function HeroSection1() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto items-center justify-center">
                {/* Headings+Text */}
                <div className="pl-3 sm:pl-9 pt-14 pr-9">
                    <div className="font-[SansBold] text-[#0066BA] font-extrabold text-sm">A&nbsp;&nbsp;B&nbsp;&nbsp;O&nbsp;&nbsp;U&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U&nbsp;&nbsp;S</div>
                    <h4 className="font-[Lato] text-dark-blue text-[56px]">Culture is not about a vibe.</h4>
                    <p className="font-[Sans] text-[26px] leading-8 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim id aenean adipiscing ut eu.
                        Risus, facilisi dui sit et pellentesque. Commodo elit ornare molestie amet varius dui lectus.
                        Interdum tempor, neque, magna hendrerit pulvinar neque, quis sit nisi.</p>
                </div>
                <br></br><br></br>
                {/* Images+Points */}
                <div className="lg:flex justify-between pl-3 pr-2 pt-5 pb-4">
                    {/* Part-1 and Group-1 */}
                  <div className="lg:flex gap-2 lg:flex-col items-center mb-5">
                  <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                  <div className="flex justify-center">
                   <img src={Brain} alt="error" className="h-28" />
                  </div>
                 <div className="">
                <div className="flex justify-center"><h3 className="text-dark-blue font-[Poppins] text-3xl font-bold leading-[45px]">SUPERFICIAL CULTURE</h3></div>
                <div className="flex justify-center"><h2 className="font-[Poppins] text-[22px] font-bold leading-[33px]">COOKIE-CUTTER SOLUTIONS</h2></div>
                <div className="flex justify-center"><img src={Three} alt="error" className="p-[12px]" /></div>
                </div>
              </div>
            <div className="pl-3 w-full flex justify-center font-[Sans] font-medium text-[28px] text-[#171717]">
            <div className="w-[500px]">
                {/* Items */}
                <div className="flex items-center justify-center border-l-8 h-16 border-[#DFE0E4] pl-4 mb-4 border-b">
                    <p className="w-full pl-2">Managed Top-down</p>
                </div>
                <div className="flex items-center justify-center border-l-8 h-16 border-[#DFE0E4] pl-4 mb-4 border-b">
                    <p className="w-full pl-2">Breakroom foosball</p>
                </div>
                <div className="flex items-center justify-center border-l-8 h-16 border-[#DFE0E4] pl-4 mb-4 border-b">
                    <p className="w-full pl-2">Boiler-plate strategy</p>
                </div>
                <div className="flex items-center justify-center border-l-8 h-16 border-[#DFE0E4] pl-4 border-b">
                    <p className="w-full pl-2">Sales-driven mentality</p>
                </div>
               </div>
              </div>
             </div>
                    {/* VS */}
                    <div className="2xl:flex xl:flex-row flex justify-center">
                        <img src={VS} alt="error" className="w-[96px] h-[96px]"/>
                    </div>
                    <br></br>
                    {/* Part-2 and Group-2 */}
                    <div className="lg:flex gap-2 lg:flex-col items-center">
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <div className="flex justify-center">
                     <img src={Faces} alt="error" className="h-[110px]" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-dark-blue font-[Poppins] text-3xl font-bold leading-[45px]">UNCOMMON CULTURE</h3>
                      <h2 className="font-[Poppins] text-[22px] font-bold leading-[33px]">SUSTAINABLE SOLUTIONS</h2>
                      <div className="flex justify-center"><img src={Five} alt="error" className="p-[12px]" /></div>
                    </div>
                   </div>
                   <div className="pl-3 w-full flex justify-center font-[Sans] font-medium text-[28px] text-[#171717]">
                   <div className="w-[500px]">
                    {/* Items */}
                    <div className="flex items-center justify-center border-l-8 h-16 border-l-[#FFA600] pl-4 mb-4 border-b-[#DFE0E4] border-b-[1px]">
                      <p className="w-full pl-2">No contacts, ever</p>
                   </div>
                   <div className="flex items-center justify-center border-l-8 h-16 border-l-[#071E3E] pl-4 mb-4 border-b-[#DFE0E4] border-b-[1px]">
                      <p className="w-full pl-2">Autonomy & responsibility</p>
                   </div>
                   <div className="flex items-center justify-center border-l-8 h-16 border-l-[#00B4EE] pl-4 mb-4 border-b-[#DFE0E4] border-b-[1px]">
                      <p className="w-full pl-2">No external investors</p>
                  </div>
                   <div className="flex items-center justify-center border-l-8 h-16 border-l-[#B00500] pl-4 border-b-[#DFE0E4] border-b-[1px]">
                      <p className="w-full pl-2">Small team approach</p>
                   </div>
                  </div>
                 </div>
                </div>
                </div>
                <br></br>
               </div>
        </>
    );
}

export default HeroSection1;
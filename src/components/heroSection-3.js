import React from "react";
import OR from "../assets/images/or.png";

function  HeroSection3(){
    return(
    <>
    <div className='bg-customgray max-w-full'>
     <div className='max-w-screen-xl mx-auto justify-center items-center'>
        <br></br><br></br>
        <div className="font-[SansBold] text-[#0066BA] font-extrabold mt-6 text-sm text-center tracking-[7px] uppercase">superior work for best results.</div>
        <h2 className="text-center font-[Lato] text-[40px] font-extrabold text-[#1B1D28] leading-[60px] mt-3">Apply To Work With Us</h2>
        <p className="text-center font-[Sans] text-[20px] font-normal text-[#666666] leading-[30px] mt-6">Interested in joining one of the absolute best teams in the industry<br></br>
        Send us your contact information and let's get the conversation started.</p>
        {/* Form */}
        <div class="flex justify-center items-center">
        <form class="p-7 w-full max-w-2xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-[Sans]">
                <div>
                    <input type="text" placeholder="First Name" class="bg-[#F5F5F5] mt-1 p-4 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white focus:border-[#0066BA] focus:ring-[#0066BA]" />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" class="bg-[#F5F5F5] mt-1 p-4 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white focus:border-[#0066BA] focus:ring-[#0066BA]" />
                </div>
                <div>
                    <input type="email" placeholder="Email ID" class="bg-[#F5F5F5] mt-1 p-4 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white focus:border-[#0066BA] focus:ring-[#0066BA]" />
                </div>
                <div>
                    <input type="tel" placeholder="Phone Number" class="bg-[#F5F5F5] mt-1 p-4 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white focus:border-[#0066BA] focus:ring-[#0066BA]" />
                </div>
                <div class="md:col-span-2 flex items-center justify-between bg-white px-9 py-6 border border-gray-300 shadow-sm">
                    <input type="url" id="linkedin-profile" name="linkedin-profile" placeholder="LinkedIn Profile URL" class="bg-[#F5F5F5] mt-1 p-4 block w-[200px] border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white focus:border-[#0066BA] focus:ring-[#0066BA]" />
                    <img src={OR} alt="error_or" className="w-12 h-12" />
                    <button type="button" class="bg-dark-blue text-white py-4 px-9 w-[200px] text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-dark-blue">Upload Resume</button>
                </div>
            </div><br></br><br></br>
            <div class="flex justify-center items-center">
                <button type="submit" class="font-[Lato] w-[250px] bg-[#FFC145] text-black text-xl px-12 py-3 font-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#FFC145]">APPLY NOW</button>
            </div>
        </form>
    </div>
    </div>
    </div>
    </>
    );
}
 
export default HeroSection3;
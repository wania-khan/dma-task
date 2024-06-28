import React from "react";

function  HeroSection3(){
    return(
    <>
     <div className='max-w-screen-xl mx-auto justify-center items-center bg-[#F5F5F5]'>
        <br></br><br></br>
        <div className="font-[SansBold] text-[#0066BA] font-extrabold mt-6 text-sm text-center tracking-[7px] uppercase">superior work for best results.</div>
        <h2 className="text-center font-[Lato] text-[40px] font-extrabold text-[#1B1D28] leading-[60px] mt-3">Apply To Work With Us</h2>
        <p className="text-center font-[Sans] text-[20px] font-normal text-[#666666] leading-[30px] mt-6">Interested in joining one of the absolute best teams in the industry<br></br>
        Send us your contact information and let's get the conversation started.</p>
        {/* Form */}
        <div class="flex justify-center items-center">
        <form class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-[Sans]">
                <div>
                    <input type="text" id="first-name" name="first-name" placeholder="First Name" class="bg-[#F5F5F5] mt-1 p-3 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white" />
                </div>
                <div>
                    <input type="text" id="last-name" name="last-name" placeholder="Last Name" class="bg-[#F5F5F5] mt-1 p-3 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white" />
                </div>
                <div>
                    <input type="email" id="email-id" name="email-id" placeholder="Email ID" class="bg-[#F5F5F5] mt-1 p-3 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white" />
                </div>
                <div>
                    <input type="tel" id="phone-number" name="phone-number" placeholder="Phone Number" class="bg-[#F5F5F5] mt-1 p-3 block w-full border border-gray-300 shadow-sm placeholder-[#5A6474] text-sm focus:bg-white" />
                </div>
                <div class="md:col-span-2 flex items-center bg-white p-6">
                    <label for="linkedin-profile" class="block text-sm font-medium text-gray-700 mr-2">LinkedIn Profile URL</label>
                    <input type="url" id="linkedin-profile" name="linkedin-profile" placeholder="LinkedIn Profile URL" class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                    <span class="mx-2">OR</span>
                    <button type="button" class="bg-blue-800 text-white p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload Resume</button>
                </div>
            </div>
            <div class="mt-6">
                <button type="submit" class="w-full bg-yellow-500 text-white p-3 rounded-md font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">APPLY NOW</button>
            </div>
        </form>
    </div>
    </div>
    </>
    );
}
 
export default HeroSection3;
import React from "react";
import DMA from '../assets/images/dma.jpg';
import Globe from '../assets/images/globe.png';

function Footer(){
    return(
        <>
        <div>
        <div className='max-w-screen-xl mx-auto justify-center items-center'>
        <div className="items-center justify-center flex my-4">
            <img src={DMA} alt="error_jpg" className="w-64" />
        </div>
        <div className="grid grid-cols-2 pl-7 sm:max-w-7xl sm:flex justify-around items-start">
            {/* 1st Portion */}
            <div className="text-dark-blue">
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">what we do</h2>
            <p className="font-[Sans] text-sm leading-7">SEO</p>
            <p className="font-[Sans] text-sm leading-7">PPC</p>
            <p className="font-[Sans] text-sm leading-7">Reputation Management</p>
            <p className="font-[Sans] text-sm leading-7">Social Media</p>
            <p className="font-[Sans] text-sm leading-7">Web Development</p>
            <p className="font-[Sans] text-sm leading-7">Marketing Automation</p>
            </div>
            {/* 2nd Portion */}
            <div className="text-dark-blue">
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">industries</h2>
            <p className="font-[Sans] text-sm leading-7">Luxury Communities</p>
            <p className="font-[Sans] text-sm leading-7">Assisted Living</p>
            <p className="font-[Sans] text-sm leading-7">E-Commerce</p>
            <p className="font-[Sans] text-sm leading-7">Crypto</p>
            <p className="font-[Sans] text-sm leading-7">Others</p>
            </div>
            {/* 3rd Portion */}
            <div className="text-dark-blue">
                <div>
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">company</h2>
            <p className="font-[Sans] text-sm leading-7">About Us</p>
            <p className="font-[Sans] text-sm leading-7">History</p>
            <p className="font-[Sans] text-sm leading-7">Leadership</p>
            <p className="font-[Sans] text-sm leading-7">Inclusion & Diversity</p>
                </div>
                <br></br>
                <div>
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">news</h2>
            <p className="font-[Sans] text-sm leading-7">News</p>
            <p className="font-[Sans] text-sm leading-7">Press & Media</p>
                </div>
            </div>
            {/* 4th Portion */}
            <div className="text-dark-blue">
                <div>
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">careers</h2>
            <p className="font-[Sans] text-sm leading-7">Careers</p>
            <p className="font-[Sans] text-sm leading-7">Job Search</p>
                </div>
                <br></br>
                <div>
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">contact us</h2>
            <p className="font-[Sans] text-sm leading-7">Support</p>
            <p className="font-[Sans] text-sm leading-7">Business & Inquiries</p>
            <p className="font-[Sans] text-sm leading-7">Employee Access</p>
                </div>
            </div>
            {/* 5th Portion */}
            <div className="text-dark-blue">
                <div className="">
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">blog</h2>
            <p className="font-[Sans] text-sm text-[#666666] leading-[18px]">All our latest data stories <br></br> and insights straight</p>
                </div>
                <br></br>
                <div>
            <h2 className="font-[Lato] font-black text-base leading-6 uppercase mb-2">The DMA Bulletin</h2>
            <p className="font-[Sans] text-sm text-[#666666] leading-[18px]">All our latest data stories &<br></br> insights straight to your inbox</p>
            <input type="email" placeholder="Enter your Email" class="mt-1 p-2 block w-full border border-[#D0D0D0] placeholder-[#D0D0D0] text-[11px] focus:border-[#0066BA] focus:ring-[#0066BA]" />
            <div className="flex items-center space-x-2 mt-3">
            <img src={Globe} alt="error_globe" className="w-4" />
            <span className="text-[#0066BA] text-[13px] leading-4 font-bold">English</span>
        </div>
            </div>
            </div>
        </div>
        <br></br>
        </div>
        </div>
        </>
    );
}

export default Footer;
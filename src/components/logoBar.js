import React from "react";
import Logo1 from '../assets/images/logo-1.png';
import Logo2 from '../assets/images/logo-2.png';
import Logo3 from '../assets/images/logo-3.png';
import Logo4 from '../assets/images/logo-4.png';
import Logo5 from '../assets/images/logo-5.png';
import Logo6 from '../assets/images/logo-6.png';
import Cursor from '../assets/images/pointer.png';

function LogoBar(){
    return(
        <>
        <div className='xl:border-b-2 xl:shadow-sm'>
        <div className='max-w-screen-xl mx-auto justify-center items-center lg:block hidden'>
            <div className="max-w-9xl inline-flex justify-center items-center p-8">
            <p className="font-bold text-sm uppercase leading-[21px] pl-11 pr-3">Trusted by the best clientle list:</p>
            <div className="flex flex-row justify-evenly items-center">
            <img src={Logo1} alt="error_logo" className="w-[120px]"/>
            <img src={Logo2} alt="error_logo" className="w-[120px] pl-4"/>
            <div className="relative">
            <img src={Logo3} alt="error_logo" className="w-[150px] pl-4"/>
            <img src={Cursor} alt="error_pointer" className="absolute w-[14px] ml-[102px] -mt-5"/>
            </div>
            <img src={Logo4} alt="error_logo" className="w-[140px] pl-4"/>
            <img src={Logo5} alt="error_logo" className="w-[150px] pl-4"/>
            <img src={Logo6} alt="error_logo" className="w-[140px] pl-4"/>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default LogoBar;
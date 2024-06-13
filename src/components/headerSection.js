import React from 'react';
import Phone from '../assets/images/phone-solid.svg';

function headerSection(){
    return(
    <>
    <div className='bg-[#181E4E]'>
    <div className='max-w-screen-xl mx-auto justify-center items-center text-[#FFF]'>
       <div>
        <p>DMA |</p>
        <p>Digital Marketing Agency</p>
       </div>
       <div className=''>
        {/* Button-1: Call */}
        <div className='flex items-center'>
            <button className='mr-2'><img src={Phone} alt='error' className='w-3 h-3' /></button>
            <span>800-569-2754</span>
        </div>
        {/* Button-2: Request Quote */}
       <div className=''>
        <button className=''>REQUEST A FREE CODE</button>
       </div>
       </div>
    </div>
    </div>
    </>
    );
}

export default headerSection;
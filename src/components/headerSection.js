import React from 'react';
import Phone from '../assets/images/phone-solid.svg';
import DMA from '../assets/images/DMA-logo.svg';

function headerSection() {
  return (
    <>
    <div className='max-w-screen-xl mx-auto justify-center items-center bg-[#181E4E]'>
      <div className="pt-4 pb-4 pl-4 pr-4 flex justify-between items-center text-[#FFF]">
        <div className="">
          <div><img src={DMA} alt='error' /></div>
        </div>
        <div className="flex items-center space-x-6 font-[Sans]">
          <div className="flex items-center">
            <button className="mr-2">
              <img src={Phone} alt="Phone Icon" className="w-3 h-3" />
            </button>
            <span>800-569-2754</span>
          </div>
          <div className='border-solid border-[1px] rounded-sm border-[#FFC145]'>
        <button className='text-[#FFC145] pl-4 pr-4 pb-2 pt-2 font-semibold'>REQUEST A FREE QUOTE</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default headerSection;
import React from 'react';
import Phone from '../assets/images/phone-solid.svg';

function headerSection() {
  return (
    <>
      <div className="bg-[#181E4E] p-5 flex justify-between items-center text-[#FFF]">
        <div className="pl-9">
          <p className="text-3xl font-extrabold">DMA</p>
          {/* <p>Digital Marketing Agency</p> */}
        </div>
        <div className="flex items-center space-x-4 pr-6">
          <div className="flex items-center">
            <button className="mr-2">
              <img src={Phone} alt="Phone Icon" className="w-3 h-3" />
            </button>
            <span>800-569-2754</span>
          </div>
          <div className="border-solid rounded-sm border-[#FFC145]">
            <button className="text-[#FFC145]">REQUEST A FREE CODE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default headerSection;
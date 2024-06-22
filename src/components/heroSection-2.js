import React from "react";
import Img1 from '../assets/images/pic-1.png';
import Img2 from '../assets/images/pic-2.png';
import Img3 from '../assets/images/pic-3.png';

function HeroSection2(){
    return(
    <>
    <div className="max-w-screen-xl mx-auto justify-center items-center">
    <div className="grid grid-cols-3 gap-4 p-9 pl-14 pr-14">
    <div
        className="p-4 h-[340px] relative"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #000000 75%), url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-9">
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Understanding Your Business</h2>
          <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px]">LEARN MORE</button>
        </div>
      </div>
      <div className="relative bg-[#181E4E] pl-6 pt-6 h-[340px]">
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Best Practices & Latest Innovations</h2>
          <h3 className="text-white font-[Sans] font-normal text-lg leading-7 pt-[6px] pb-[10px]">Superior work for best results.</h3>
          <p className="text-white font-[Sans] font-normal text-sm leading-[21px] pr-[185px]">We are committed to using the best practices and staying on top of the latest innovations in digital marketing. ...</p>
          <br></br>
          <button className="mt-2 font-[Sans] font-bold text-sm leading-[21px] text-white">LEARN MORE</button>
          <img src={Img2} alt="error_img" className="absolute bottom-0 -right-[6px] w-[240px] h-[203px]" />
        </div>
        <div
          className="relative p-4 h-[340px] w-[340px] flex flex-col justify-end"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, #000000 85%), url(${Img3}), linear-gradient(180deg, #184158, #184158)`,
            backgroundSize: 'cover, cover, cover',
            backgroundPosition: 'center, center, center',
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-end p-9">
            <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Transparency and Forward Strategies</h2>
            <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px]">LEARN MORE</button>
          </div>
        </div>
      <div className="bg-purple-200 p-4 col-span-3">
        <p className="text-2xl font-[Lato]">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <p className="mt-2 font-[Sans]">Johan Horak, Marketing Manager</p>
      </div>
      <div className="bg-purple-300 p-4 ">
        <p className="text-2xl font-[Lato]">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <button className="mt-2 font-[Sans]">LEARN MORE</button>
      </div>
      <div className="bg-purple-300 p-4 ">
        <p className="text-2xl font-[Lato]">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <p className="mt-2 font-[Sans]">Johan Horak, Marketing Manager</p>
      </div>
      <div className="bg-gray-200 p-4 ">
        <h2 className="text-2xl font-[Lato]">Understanding Your Business</h2>
        <button className="mt-2 font-[Sans]">LEARN MORE</button>
      </div>
      <div className="bg-purple-200 p-4 col-span-2">
        <p className="text-2xl font-[Lato]">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <p className="mt-2 font-[Sans]">Johan Horak, Marketing Manager</p>
      </div>
      <div className="bg-gray-200 p-4">
        <h2 className="text-2xl font-[Lato]">Happy Client</h2>
        <p className="font-[Sans]">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
      </div>
      <div className="bg-blue-400 p-4 col-span-2">
        <h2 className="text-2xl font-[Lato]">Client Words: Transparency and Forward Strategies</h2>
        <button className="mt-2 font-[Sans]">LEARN MORE</button>
      </div>
      <div className="bg-purple-300 p-4">
        <p className="text-2xl font-[Lato]">Lorem Ipsum is simply dummy text of the printing...</p>
        <button className="mt-2 font-[Sans]">LEARN MORE</button>
      </div>
      <div className="bg-gray-200 p-4">
        <h2 className="text-2xl font-[Lato]">Understanding Your Business</h2>
        <button className="mt-2 font-[Sans]">LEARN MORE</button>
      </div>
      <div className="bg-purple-200 p-4 col-span-3">
        <p className="text-2xl font-[Lato]">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <p className="mt-2 font-[Sans]">Johan Horak, Marketing Manager</p>
      </div>
    </div>  
    </div>
    </>
    );
}

export default HeroSection2;
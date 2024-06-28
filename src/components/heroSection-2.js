import React from "react";
import Img1 from '../assets/images/pic-1.png';
import Img2 from '../assets/images/pic-2.png';
import Img3 from '../assets/images/pic-3.png';
import Img4 from '../assets/images/pic-4.png';
import Img5 from '../assets/images/pic-5.png';
import Img6 from '../assets/images/pic-6.png';
import Img7 from '../assets/images/pic-7.jpeg';
import Img8 from '../assets/images/pic-8.jpeg';
import Img9 from '../assets/images/pic-9.jpeg';

function HeroSection2(){
    return(
    <>
    <div className="max-w-screen-xl mx-auto justify-center items-center">
    <div className="grid grid-cols-3 gap-4 p-9 pl-14 pr-14">
      {/* Block-1 */}
    <div
        className="p-4 h-[340px] col-span-1 relative"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #000000 75%), url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-9">
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Understanding Your Business</h2>
          <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px] cursor-pointer">LEARN MORE</button>
        </div>
      </div>
      {/* Block-2 */}
      <div className="relative bg-[#181E4E] pl-6 pt-6 h-[340px] col-span-1">
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Best Practices & Latest Innovations</h2>
          <h3 className="text-white font-[Sans] font-normal text-lg leading-7 pt-[6px] pb-[10px]">Superior work for best results.</h3>
          <p className="text-white font-[Sans] font-normal text-sm leading-[21px] pr-[185px]">We are committed to using the best practices and staying on top of the latest innovations in digital marketing. ...</p>
          <br></br>
          <button className="mt-2 font-[Sans] font-bold text-sm leading-[21px] text-white cursor-pointer">LEARN MORE</button>
          <img src={Img2} alt="error_img" className="absolute bottom-0 -right-[6px] w-[240px] h-[203px]" />
        </div>
        {/* Block-3 */}
        <div
          className="relative p-4 h-[340px] col-span-1 flex flex-col justify-end"
          style={{
            backgroundImage: `url(${Img3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-end p-9">
            <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Transparency and Forward Strategies</h2>
            <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px] cursor-pointer">LEARN MORE</button>
          </div>
        </div>
        {/* Block-4 */}
      <div className="bg-[#6D6388] h-[340px] pl-9 pr-9 pt-16 col-span-2">
        <p className="text-2xl text-white font-[Lato] font-bold leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <br></br>
        <p className="mt-2 text-white font-[Sans] text-[22px] leading-[33px] font-bold">Johan Horak</p>
        <p className="text-white font-[Sans] font-normal leading-[33px]">Marketing Manager</p>
      </div>
      {/* Block-5 */}
      <div
        className="p-4 h-[340px] col-span-1 relative"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 140, 255, 0) 0%, rgba(24, 30, 78, 0.8) 99.99%, rgba(0, 28, 255, 0.8) 100%), url(${Img4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-9">
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting.</h2>
          <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px] cursor-pointer">LEARN MORE</button>
        </div>
      </div>
      {/* Block-6 */}
      <div
        className="p-4 h-[340px] relative col-span-1"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #000000 75%), url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-9">
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Understanding Your Business</h2>
          <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px] cursor-pointer">LEARN MORE</button>
        </div>
      </div>
      {/* Block-7 */}
      <div className="relative bg-[#181E4E] pl-9 pt-14 h-[340px] col-span-2">
      <p className="text-2xl text-white font-[Lato] font-bold leading-9 pr-[280px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's</p>
          <br></br>
        <p className="mt-2 text-white font-[Sans] text-[22px] leading-[33px] font-bold">Johan Horak</p>
        <p className="text-white font-[Sans] font-normal leading-[33px]">Marketing Manager</p>
          <img src={Img5} alt="error_img" className="absolute bottom-0 right-0 h-[340px] w-auto" />
        </div>
      {/* Block-8 */}
      <div className="relative bg-[#4B587C] pt-8 pr-8 pl-8 h-[340px] col-span-1">
          <h3 className="text-white font-[Sans] font-normal text-lg leading-7 pt-[6px] pb-[10px] text-opacity-80">Happy Client</h3>
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
          <br></br><br></br><br></br><br></br>
          <button className="mt-2 font-[Sans] font-bold text-sm leading-[21px] text-white cursor-pointer">LEARN MORE</button>
          <img src={Img6} alt="error_img" className="absolute bottom-0 right-0 w-[215px] h-[224px]" />
      </div>
      {/* Block-9 */}
      <div className="relative pl-8 pr-8 h-[340px] col-span-1" style={{
          backgroundImage: `url(${Img7})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
    <div className="absolute inset-0 flex flex-col justify-end p-9">
    <h3 className="text-white font-[Sans] font-normal text-lg leading-7 text-opacity-80">Client Words</h3>
    <h2 className="text-2xl text-white font-[Lato] font-bold leading-9 pr-9">Transparency and Forward Strategies.</h2>
    <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px] cursor-pointer">LEARN MORE</button>
    </div>
      </div>
      {/* Block-10 */}
      <div className="relative pl-9 pr-8 h-[340px] col-span-1" style={{backgroundImage: `url(${Img8})`, backgroundSize: 'cover',
          backgroundPosition: 'center'}}>
        <div className="absolute inset-0 flex flex-col justify-end p-9">
        <p className="text-xl text-white font-[Lato] font-bold leading-9 pr-9">Lorem Ipsum is simply dummy text of the printing.</p>
        </div> 
      </div>
      {/* Block-11 */}
      <div className="relative pl-9 pr-8 h-[340px] col-span-1" style={{backgroundImage: `url(${Img9})`, backgroundSize: 'cover',
          backgroundPosition: 'center'}}>
        <div className="absolute inset-0 flex flex-col justify-end p-9">
          <h2 className="text-2xl text-white font-[Lato] font-bold leading-9">Understanding Your Business</h2>
          <button className="mt-4 text-white font-[Sans] text-sm text-left font-bold leading-[21px] cursor-pointer">LEARN MORE</button>
        </div>
      </div>
      {/* Block-12 */}
      <div className="bg-[#4B587C] h-[340px] pl-9 pr-9 pt-16 col-span-2">
        <p className="text-2xl text-white font-[Lato] font-bold leading-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <br></br>
        <p className="mt-2 text-white font-[Sans] text-[22px] leading-[33px] font-bold">Johan Horak</p>
        <p className="text-white font-[Sans] font-normal leading-[33px]">Marketing Manager</p>
      </div>
    </div>  
    </div>
    </>
    );
}

export default HeroSection2;
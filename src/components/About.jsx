import React from 'react';

function About() {
  return (
    <div className="w-full p-10 sm:p-20 bg-[#CDEA68] rounded-tl-3xl text-black">
      <h1 className='font-["Neue_montreal"] text-[6vw] sm:text-[4vw] leading-[6vw] sm:leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full flex flex-col sm:flex-row border-t-[1px] border-[#a1b562] mt-10 sm:mt-20"> 
        <div className="sm:w-1/2 w-full">
          <h1 className="text-5xl sm:text-7xl mt-3">Our approach:</h1>
          <button className="transform: scaleX(1.5)  bg-zinc-900 flex rounded-full px-8 py-4 sm:px-10 sm:py-6 mt-6 sm:mt-10 text-white uppercase gap-4 sm:gap-10 items-center ">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="sm:w-1/2 w-full h-[40vh] sm:h-[70vh] rounded-3xl bg-[#a1b562] mt-6 sm:mt-2"></div>
      </div>
    </div>
  );
}

export default About;

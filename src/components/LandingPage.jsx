import React from 'react';

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.8"
      className="w-full h-screen overflow-hidden bg-zinc-900 pt-1 relative px-5 sm:px-10 md:px-20 gap-5"
    >
      <div className="textStructure mt-20 sm:mt-32 md:mt-52 px-5 sm:px-10 md:px-20 relative">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center relative">
              {index === 1 && (
                <div className="absolute inset-x-0 top-[-5vw] sm:top-[-3vw] md:top-[-1vw] flex justify-center">
                  <div className="w-[30vw] h-[15vw] sm:w-[20vw] sm:h-[10vw] md:w-[9vw] md:h-[6vw] rounded-full"></div>
                </div>
              )}
              <h1 className="uppercase text-[12vw] sm:text-[10vw] md:text-[7vw] leading-[13vw] sm:leading-[11vw] md:leading-[8vw] font-['Founder_Grotesk_X-Condensed'] font-bold text-center text-white">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-gray-800 mt-10 sm:mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center py-5 px-5 sm:px-10 md:px-20 relative">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p
            className="text-xs sm:text-sm md:text-md font-light tracking-tight leading-tight mb-4 md:mb-0 text-center text-white"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start mt-4 md:mt-0">
          <div className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 border-2 border-gray-700 font-light text-xs sm:text-sm capitalize rounded-full text-center text-white hover:bg-gray-700 cursor-pointer">
            Start The Project
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

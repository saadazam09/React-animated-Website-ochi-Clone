import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  
  return (
    <div className="w-full py-20 bg-[#004D43]">
      <div className="border-t-2 border-b-2 border-zinc-300 gap-10 flex overflow-hidden whitespace-nowrap">

      <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[20vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 -mb[3.5vw] font-semibold'>
          WE Are Ochi
        </motion.h1>


        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[20vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 -mb[3.5vw] font-semibold'>
          WE Are Ochi
        </motion.h1>

      </div>
    </div>
  );
}

export default Marquee;

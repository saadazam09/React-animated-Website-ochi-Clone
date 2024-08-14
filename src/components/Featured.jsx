import React, { useState } from 'react';

function Featured() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  const boxClasses = (index) =>
    `flex-1 min-w-[300px] h-[36vw] bg-cover bg-center p-4 transition-transform duration-500 ${
      activeBox === index ? 'scale-75' : 'scale-100 hover:scale-105'
    }`;

  return (
    <div className="w-full h-screen flex flex-col lg:flex-col">
      <div className="w-full px-5 md:px-10 lg:px-20 py-10 border-b-[1px] border-zinc-700 text-black">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Neue-Montreal'] tracking-tighter font-semibold">
          Featured Projects
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 py-10 px-5">
        <div
          className={boxClasses(0)}
          onClick={() => handleBoxClick(0)}
          style={{
            backgroundImage: "url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')",
          }}
        ></div>
        <div
          className={boxClasses(1)}
          onClick={() => handleBoxClick(1)}
          style={{
            backgroundImage: "url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')",
          }}
        ></div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 py-10 px-5">
        <div
          className={boxClasses(2)}
          onClick={() => handleBoxClick(2)}
          style={{
            backgroundImage: "url('https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png')",
          }}
        ></div>
        <div
          className={boxClasses(3)}
          onClick={() => handleBoxClick(3)}
          style={{
            backgroundImage: "url('https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Featured;

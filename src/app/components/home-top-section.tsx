"use client"
import { useState, useEffect } from 'react';

function Topsection() {
  const [showName, setShowName] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section id='tophome'  className="relative top-10 flex justify-between w-[90%] m-10 items-center align-middle">
      <div className="grid gap-10">
        <h2 className="text-8xl text-blue-600">
          Hello, I'm a
          </h2>
        <span className="relative inline-block text-7xl mb-[70px] w-[600px]">
            <span
              className={`absolute inset-0 transition-opacity duration-[750ms] ${
                showName ? "opacity-100" : "opacity-0"
              }`}
            >
              Yassine Mouhib
            </span>
            <span
              className={`absolute inset-0 transition-opacity duration-[750ms] ${
                showName ? "opacity-0" : "opacity-100"
              }`}
            >
              Web Developer
            </span>
          </span>

        <div className="flex gap-10">
          <a href='https://www.linkedin.com/in/yassine-mouhib-114a75284/' className="bg-blue-600 px-[10px] py-[10px] rounded-md duration-[300ms] ease-in-out hover:bg-white hover:text-blue-600">
            Hire Me
          </a>
          <a href='/newcv.pdf' className="bg-blue-600 px-[10px] py-[10px] rounded-md duration-[300ms] ease-in-out hover:bg-white hover:text-blue-600">
            Download CV
          </a>
        </div>
      </div>
      <div className="w-[350px] h-[350px] rounded-full bg-gray-300 flex items-center justify-center">
        <img
          className="w-full h-full rounded-full mix-blend-multiply"
          src="4200_3_03.jpg"
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default Topsection;

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

function Topsection() {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="tophome"
      className="relative top-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center w-[90%] mx-auto mt-10 gap-10"
    >
      {/* Text Content */}
      <div className="flex flex-col gap-6 text-center lg:text-left max-w-[800px]">
        <h2 className="text-3xl md:text-5xl lg:text-7xl text-blue-600 font-bold">
          Hello, I&apos;m a
        </h2>
        <span className="relative inline-block text-2xl md:text-4xl lg:text-6xl font-semibold w-full lg:w-[600px] h-16">
          <span
            className={`absolute inset-0 transition-opacity duration-500 ${
              showName ? "opacity-100" : "opacity-0"
            }`}
          >
            Yassine Mouhib
          </span>
          <span
            className={`absolute inset-0 transition-opacity duration-500 ${
              showName ? "opacity-0" : "opacity-100"
            }`}
          >
            Web Developer
          </span>
        </span>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <a
            href="https://www.linkedin.com/in/yassine-mouhib-114a75284/"
            className="bg-blue-600 px-6 py-3 rounded-md text-white text-sm md:text-base hover:bg-white hover:text-blue-600 border border-blue-600 transition-all duration-300"
          >
            Hire Me
          </a>
          <a
            href="https://none159.github.io/public/newcv.pdf"
            className="bg-blue-600 px-6 py-3 rounded-md text-white text-sm md:text-base hover:bg-white hover:text-blue-600 border border-blue-600 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-shrink-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full bg-gray-300 flex items-center justify-center">
        <Image
          className="w-full h-full rounded-full object-cover"
          height={300}
          width={300}
          src="4200_3_03.jpg"
          alt="Profile"
          priority={true}
        />
      </div>
    </section>
  );
}

export default Topsection;

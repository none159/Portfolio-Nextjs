import React from "react";
import Image from "next/image";

function Aboutme() {
  return (
    <section id="about" className="relative top-[200px] px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start w-full max-w-[1200px] mx-auto gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="20945770.jpg"
            width={500}
            height={500}
            alt="About Me"
            className="w-full h-full object-cover rounded"
            priority={true}
          />
        </div>

        {/* Content Section */}
        <div className="grid gap-6 lg:w-[60%] text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white bg-blue-600 p-5">
            About Me
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white">
            Hi, I&apos;m Yassine Mouhib, a passionate and dedicated web developer
            with a strong foundation in modern technologies and a continuous
            drive to learn and grow. Over the years, I&apos;ve honed my skills by
            working on diverse projects, from crafting responsive websites and
            interactive applications to integrating seamless user experiences.
            My expertise lies in leveraging tools like React, Next.js, and
            various backend solutions to bring ideas to life.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white">
            Beyond coding, I thrive on solving problems and collaborating with
            others to create meaningful digital solutions. I&apos;m always open to
            new challenges and opportunities to make a difference through
            innovation. Whether it&apos;s a complex technical hurdle or a
            creative project idea, I approach every task with enthusiasm and
            commitment. When I&apos;m not coding, you might find me exploring new
            technologies, sharing knowledge with others, or diving into my next
            project with full energy and passion.
          </p>

          {/* Skills Section */}
          <div className="grid gap-4">
            <h4 className="text-xl font-semibold border-b-2 w-fit border-blue-600 sm:mx-auto lg:mx-0 inline-block">
              Skills
            </h4>
            <ul className="grid gap-1 text-sm sm:text-base lg:text-lg text-white">
              <li>- React</li>
              <li>- Next.js</li>
              <li>- JavaScript</li>
              <li>- TypeScript</li>
              <li>- MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;

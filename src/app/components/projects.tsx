"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Ecoist",
    image: "16544.jpg",
    visit: "https://ecommerce-frontend-theta-plum.vercel.app",
    repo: "https://github.com/none159/Ecommerce",
  },
  {
    id: 2,
    name: "SocialDash",
    image: "5516.jpg",
    visit: "",
    repo: "https://github.com/none159/socialdash",
  },
  {
    id: 3,
    name: "React Portfolio",
    image: "19198859.jpg",
    visit: "https://none159.github.io/myportfolio/",
    repo: "https://github.com/none159/myportfolio",
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="project" className="relative top-[350px] text-center px-4">
      <h2 className="text-4xl font-bold mb-10 text-white">My Projects</h2>
      <div className="relative flex items-center justify-center gap-8 w-full max-w-[1200px] mx-auto h-[400px]">
        {/* Left Navigation */}
        <div
          onClick={handlePrev}
          className="absolute left-4 z-10 bg-white ease-in-out duration-[350ms] text-4xl font-bold hover:bg-blue-600 hover:text-white text-blue-600 cursor-pointer px-[20px] py-[10px] transition-transform transform hover:scale-110 rounded-full shadow-md"
          aria-label="Previous Project"
        >
          &#8249;
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => {
          const isCenter = index === currentIndex;

          const position = isCenter
            ? "z-9 scale-100 blur-0"
            : index === (currentIndex + 1) % projects.length ||
              index === (currentIndex - 1 + projects.length) % projects.length
            ? "z-5 scale-75 blur-sm"
            : "z-0 scale-50 blur-md opacity-50";

          return (
            <div
              key={project.id}
              className={`relative transition-all duration-500 transform ${position}`}
              aria-hidden={!isCenter}
            >
              <div className="relative group">
                <Image
                  width={300}
                  height={300}
                  src={`/${project.image}`}
                  alt={project.name}
                  className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-lg object-cover shadow-lg"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 ${
                    isCenter ? "opacity-0 group-hover:opacity-100" : "hidden"
                  } transition-opacity duration-[350ms]`}
                >
                  {project.visit && (
                    <a
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-10 text-white bg-blue-600 rounded-full px-6 py-2 hover:bg-blue-700"
                    >
                      Visit
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-10 text-white bg-blue-600 rounded-full px-6 py-2 hover:bg-blue-700"
                  >
                    Repo
                  </a>
                </div>
              </div>
              {isCenter && (
                <h2 className="mt-4 text-2xl font-semibold text-blue-600">
                  {project.name}
                </h2>
              )}
            </div>
          );
        })}

        {/* Right Navigation */}
        <div
          onClick={handleNext}
          className="absolute right-4 bg-white ease-in-out duration-[350ms] text-4xl font-bold hover:bg-blue-600 hover:text-white text-blue-600 cursor-pointer px-[20px] py-[10px] transition-transform transform hover:scale-110 rounded-full shadow-md"
          aria-label="Next Project"
        >
          &#8250;
        </div>
      </div>
    </section>
  );
}

export default Projects;

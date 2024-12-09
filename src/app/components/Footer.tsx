
import { Github, Linkedin, Server } from "lucide-react";

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };
  return (
    <footer className="relative top-[100vh] bg-black p-[25px] text-white shadow-black shadow-md">
      <div className="flex justify-between align-middle items-center w-[90%] mx-auto">
        <div className="grid gap-5">
          <a  onClick={()=>scrollToSection("tophome")} className="hover:underline hover:text-blue-500">Home</a>
          <a onClick={()=>scrollToSection("projects")} className="hover:underline hover:text-blue-500">Projects</a>
          <a onClick={()=>scrollToSection("about")} className="hover:underline hover:text-blue-500">About Me</a>
          <a onClick={()=>scrollToSection("contact")} className="hover:underline hover:text-blue-500">Contact</a>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.aedin.com/in/yassine-mouhib-114a75284/" target="_blank" className="text-blue-600 ease-in-out duration-[250ms] hover:text-blue-700 p-2 rounded hover:bg-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/none159" target="_blank" className="text-blue-600 ease-in-out duration-[250ms]  hover:text-blue-700 p-2 rounded hover:bg-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://vercel.com/yassines-projects-51a48afb" target="_blank" className=" hover:text-blue-700 ease-in-out duration-[250ms] text-blue-600 p-2 rounded hover:bg-white">
            <Server className="w-6 h-6" />
          </a>
        </div>
        <div>
          <h3>Copyright 2024-2025</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

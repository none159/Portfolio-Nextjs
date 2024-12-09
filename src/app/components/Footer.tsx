import Link from "next/link";
import { Linkedin, Github, Server } from "lucide-react";

function Footer() {
  return (
    <footer className="relative top-[100vh] bg-black p-[25px] text-white shadow-black shadow-md">
      <div className="flex justify-between align-middle items-center w-[90%] mx-auto">
        <div className="grid gap-5">
          <Link href="/" className="hover:underline hover:text-blue-500">Home</Link>
          <Link href="/" className="hover:underline hover:text-blue-500">Projects</Link>
          <Link href="/" className="hover:underline hover:text-blue-500">About Me</Link>
          <Link href="/" className="hover:underline hover:text-blue-500">Contact</Link>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com" target="_blank" className="text-blue-600 ease-in-out duration-[250ms] hover:text-blue-700 p-2 rounded hover:bg-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" className="text-blue-600 ease-in-out duration-[250ms]  hover:text-blue-700 p-2 rounded hover:bg-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://vercel.com" target="_blank" className=" hover:text-blue-700 ease-in-out duration-[250ms] text-blue-600 p-2 rounded hover:bg-white">
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

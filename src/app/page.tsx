import Image from "next/image";
import Topsection from "./components/home-top-section";
import Aboutme from "./components/aboutme";
import Projects from "./components/projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
   <Topsection/>
   <Aboutme/>
   <Projects/>
   <Contact/>
   </>
  );
}

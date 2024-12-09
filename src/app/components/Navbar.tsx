"use client"

function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };
  return (
    <nav className="sticky top-0 z-10 bg-black p-[25px] text-white shadow-black shadow-md">
        <div className="flex justify-between align-middle items-center w-[90%]">
            <div>
              <h2 className="text-4xl group cursor-pointer"><span className="text-blue-500 px-1">Y</span><span className="px-1 border-l-2 group-hover:border-blue-500 text-blue-500 duration-[150ms] ease-in-out">M</span></h2>
            </div>
            <div>
                 <ul className="flex gap-10 text-xl">
                        
                    <li  onClick={()=>scrollToSection("tophome")} className="relative cursor-pointer group">
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-[250ms] ease-in-out group-hover:w-full"></span>
                    </li>
                    <li  onClick={()=>scrollToSection("about")}  className="relative cursor-pointer group">
                        About Me
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-[250ms] ease-in-out group-hover:w-full"></span>
                    </li>
                    <li  onClick={()=>scrollToSection("project")}  className="relative cursor-pointer group">
                        Projects
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-[250ms] ease-in-out group-hover:w-full"></span>
                    </li>
                    <li  onClick={()=>scrollToSection("contact")}  className="relative cursor-pointer group">
                        Contact
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-[250ms] ease-in-out group-hover:w-full"></span>
                        </li>
                 </ul>
            </div>
        </div>
    </nav>


  )
}

export default Navbar
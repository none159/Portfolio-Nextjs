import React from 'react'
import Image from 'next/image'
function Aboutme() {
  return (
    <section id="about" className='relative top-[220px]'>
        <div className='flex justify-between w-[82%]  m-auto  align-middle items-start'>
            <div>
                <Image src='20945770.jpg' alt='' className='w-[500px] h-[500px] rounded'/>
            </div>
            <div className='grid gap-10  w-[500px] '>
                <h2 className='text-5xl'>About Me</h2>
                <h3 className='text-xl leading-2'>Lorem ipsum, dolor sit amet consectetur
                     adipisicing elit. Sapiente esse quia iure numquam assumenda possimus unde facilis pariatur optio deserunt. Rem cupiditate maiores nemo enim distinctio vitae ullam ut eum.</h3>
             <div className='grid gap-5'>
                <h4 className='border-b-2 border-blue-600  w-fit '>Skills</h4>
                <ul className='grid gap-1 '>
                    <li>- React</li>
                    <li>- Next</li>
                    <li>- Javascript</li>
                    <li>- Typescript</li>
                    <li>- Mongodb</li>
                </ul>
             </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutme
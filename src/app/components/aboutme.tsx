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
                <h3 className='text-xl leading-2'>Hi, I&apos;m Yassine Mouhib, a passionate and dedicated web developer with a strong foundation in modern technologies and a continuous drive to learn and grow. Over the years, I've honed my skills by working on diverse projects, from crafting responsive websites and interactive applications to integrating seamless user experiences. My expertise lies in leveraging tools like React, Next.js, and various backend solutions to bring ideas to life.

Beyond coding, I thrive on solving problems and collaborating with others to create meaningful digital solutions. I&apos;m always open to new challenges and opportunities to make a difference through innovation. Whether it's a complex technical hurdle or a creative project idea, I approach every task with enthusiasm and commitment.

When I&apos;m not coding, you might find me exploring new technologies, sharing knowledge with others, or diving into my next project with full energy and passion.</h3>
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
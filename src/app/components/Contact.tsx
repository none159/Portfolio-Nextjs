"use client"
import { Github, Linkedin } from 'lucide-react'
import React, { useState,useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const[sent,setsent]=useState(false)
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    
    const formData = new FormData(formRef.current!);

    const formObject :any= {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formObject.email)
   const templateParams = {
    from_email: formObject.email,
    subject : formObject.subject,
    message:formObject.message
   }
   console.log(process.env.NEXT_PUBLIC_SERVICEID)
    emailjs.send(process?.env?.NEXT_PUBLIC_SERVICEID!, process?.env?.NEXT_PUBLIC_TEMPLATEID!, templateParams, process.env.NEXT_PUBLIC_EMAILJS_TOKEN)
    .then((response) => {
      if(response.status==200){
      console.log('SUCCESS!', response.status, response.text);
      formRef.current?.reset()
      setsent(true)
      setTimeout(()=>{setsent(false)},5000)
    }

    }, (err) => {
      console.log('FAILED...', err);
    });

  };
  return (
    <section id="contact" className='relative grid gap-10 top-[500px]'>
        <h2 className='mx-auto text-4xl font-bold mb-10'>Contact</h2>
        <div className='flex justify-between w-[95%] items-start'>
            <div className='grid gap-5 w-[500px] ml-10 mt-10 '>
              <h2 className='font-bold text-2xl'>Let's Connect</h2>
              <h3>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</h3>
        
                <h4 className='border-b-2 border-blue-600 w-fit'>Reach Me On</h4>
                <div className='flex gap-5'>
                <a href="https://www.linkedin.com" target="_blank" className="text-blue-600 ease-in-out duration-[250ms] hover:text-blue-700 p-2 rounded hover:bg-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" className="text-blue-600 ease-in-out duration-[250ms]  hover:text-blue-700 p-2 rounded hover:bg-white">
            <Github className="w-6 h-6" />
            </a>
              </div>
            </div>
            <div>
             <form ref={formRef} onSubmit={handleSubmit} className='grid gap-10 text-center place-items-center'>
                <h2>Email:</h2>
                <input name="email" type='email' placeholder='Your Email here...' className='w-[400px] py-[5px] border-[#18191E] text-white bg-[#18191E] rounded outline-none ease-in-out border-2  focus:border-white'/>
                <h2>Subject :</h2>
                <input name="subject" type='text'placeholder='Your Subject here...' className='w-[400px] py-[5px] border-[#18191E] text-white bg-[#18191E] rounded outline-none ease-in-out border-2  focus:border-white'/>
                <h2>Message :</h2>
                <textarea name="message" placeholder='Your Message here...' className='w-[450px] h-[400px] border-[#18191E] text-white bg-[#18191E] rounded outline-none ease-in-out border-2  focus:border-white'/>
                <button type='submit' className='bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-[205px] py-[10px] duration-[350ms] ease-in-out transition-all rounded'>Send</button>
             </form>
            </div>
           
        </div>
        {sent&&<h2 className='bg-green-500 p-5 w-fit mx-auto rounded-full text-white'>Email is Sent</h2>}
    </section>
  )
}

export default Contact
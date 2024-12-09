"use client";
import { Github, Linkedin } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const formObject = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    if (!formObject.email || !formObject.subject || !formObject.message) {
      alert("All fields are required!");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_SERVICEID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATEID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_TOKEN;

    if (!serviceID || !templateID || !userID) {
      console.error("Missing environment variables for EmailJS.");
      return;
    }

    const templateParams = {
      from_email: formObject.email,
      subject: formObject.subject,
      message: formObject.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESS!", response.status, response.text);
          formRef.current?.reset();
          setSent(true);
          setTimeout(() => setSent(false), 5000);
        }
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="relative grid gap-10 top-[500px] px-5 sm:px-10 lg:px-20"
    >
      <h2 className="mx-auto text-4xl font-bold mb-10 text-center">Contact</h2>
      <div className="flex flex-wrap justify-between w-full items-start">
        <div className="grid gap-5 w-full sm:w-[80%] lg:w-[40%] mx-auto lg:mx-0 mb-10">
          <h2 className="font-bold text-2xl text-center lg:text-left">
            Let&apos;s Connect
          </h2>
          <p className="text-center lg:text-left">
            I&apos;m currently looking for new opportunities. My inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>

          <h4 className="border-b-2 border-blue-600 w-fit mx-auto lg:mx-0">
            Reach Me On
          </h4>
          <div className="flex gap-5 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="text-blue-600 ease-in-out duration-[250ms] hover:text-blue-700 p-2 rounded hover:bg-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              aria-label="GitHub Profile"
              className="text-blue-600 ease-in-out duration-[250ms] hover:text-blue-700 p-2 rounded hover:bg-white"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-[80%] lg:w-[50%] mx-auto lg:mx-0">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-10 text-center place-items-center"
          >
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email here..."
              className="w-full lg:w-[400px] py-[5px] border-[#18191E] text-white bg-[#18191E] rounded outline-none ease-in-out border-2 focus:border-white"
            />
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Your Subject here..."
              className="w-full lg:w-[400px] py-[5px] border-[#18191E] text-white bg-[#18191E] rounded outline-none ease-in-out border-2 focus:border-white"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message here..."
              className="w-full lg:w-[450px] h-[200px] border-[#18191E] text-white bg-[#18191E] rounded outline-none ease-in-out border-2 focus:border-white"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-[10px] duration-[350ms] ease-in-out transition-all rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {sent && (
        <h2 className="bg-green-500 p-5 w-fit mx-auto rounded-full text-white">
          Email Sent Successfully!
        </h2>
      )}
    </section>
  );
}

export default Contact;

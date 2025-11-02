"use client";
import React from 'react'
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Logoscroll from "./Logoscroll.js"
import Formspree from "./Formspree.js"
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link.js';



const Home = () => {


  return (
    <>
      <div className="flex justify-center md:justify-between px-7">
        {/* Left Side - Text */}
        <div className="text-black text-[30px] max-w-[500px] mt-23">
          <div className="text-[17px]  md:text-[20px] font-bold mb-2 ml-9">Welcome to DigitalMak.com</div>
          <div className=" font-bold text-[25px] md:font-bold md:text-[31px] ml-9">
            Full Stack Web Development <span className="text-[#B82B32]">Company</span>
          </div>
          <div className="w-[70vw] text-[15px] mt-3.5 md:text-[15px] md:mt-3.5 ml-9 md:w-[90%] ">We build high-quality websites that deliver results. From design to deployment, our team creates scalable, user-friendly, and visually engaging digital solutions. Every project is crafted to enhance your brand, improve user experience, and drive measurable growth efficiently.</div>
        </div>

        <div className="relative md:w-80 h-80 mr-24 mt-15">
          <div className="  absolute inset-0shadow-lg ">
            <img

              src="/laptop.png"
              alt="Ayan Khalid"
              className="md:w-[350px] h-[300px] mt-10"
            />
          </div>
          
        </div>
      </div>
      <div className=" mt-9 md:buttons md:flex md:ml-7 gap-3">
        <Link href="/getquote"><button className=" btn p-2.5 ml-6 md:ml-11  md:p-[15px]  bg-[#B82B32] text-white rounded-lg cursor-pointer">Get a Quote</button></Link>

        <button onClick={() => window.open("https://calendly.com/ayankhalid4447/15-minutes-meeting", "_blank")} className=" btn p-2.5 ml-15 md:ml-11  md:p-[15px] bg-[#ffffff] text-black border rounded-lg cursor-pointer" >Book a Call</button>
        <button></button>
      </div>

      <hr className="mt-6 md:mt-42 text-[#B82B32] mb-10" />

      <h1 className="text-center text-[30px] font-bold">Web <span className="text-[#B82B32]">Development & Designing</span> Agency</h1>

      <div className="text-center mt-5 w-[80%] md:w-[60%] m-auto mb-5">
        We started as a small web development team, passionate about building digital experiences that make a difference. Within just one year, we delivered high-performing, user-friendly websites for over 50 clients, helping their brands grow and succeed online. Today, we are recognized as a trusted agency, crafting scalable, innovative, and results-driven web solutions for businesses worldwide.
      </div>

      <div className=" text-center mt-5 w-[80%] md:w-[60%] m-auto mb-5">
        Our journey began with a passion for building seamless digital experiences that truly impact users. In just one year, we developed powerful websites that engage and convert, elevating our clients’ online presence. Now, businesses trust us to deliver professional, reliable, and high-quality web development services.
      </div>

      <div className=" text-center mt-5 w-[80%] md:w-[60%] m-auto mb-7">
        Starting with a single project, we quickly turned ideas into fully functional, user-friendly websites. Over the past year, we’ve helped dozens of clients achieve measurable growth through creative, custom web solutions. Today, we are recognized as a trusted agency delivering excellence in every project we take on.
      </div>

      <h1 className="text-center text-[30px] font-bold text-[#B82B32] mb-5">
        Website Development Life Cycle
      </h1>

      <div className="boxes flex flex-wrap justify-center gap-4 ">

        <div className="box w-[90vw] md:w-[365px] h-[245px] border border-[#B82B32] p-2 ">

          <img className="w-[50px] m-auto mt-2 " src="/database.png" alt="" />
          <h1 className=" text-[#B82B32] text-center mt-2">Gathering Information</h1>
          <div className="text-center">We begin by thoroughly understanding our clients’ goals, audience, and requirements to ensure every solution is tailored for maximum impact.</div>

        </div>
        <div className="box w-[90vw] md:w-[365px] h-[245px] border border-[#B82B32] p-2 ">

          <img className="w-[50px] m-auto mt-2 " src="/Planning.png" alt="" />
          <h1 className=" text-[#B82B32] text-center mt-2">Planning</h1>
          <div className="text-center">Based on the information gathered, we craft a clear, strategic plan outlining design, development, and marketing steps to achieve the client’s objectives.</div>

        </div>
        <div className="box w-[90vw] md:w-[365px] h-[245px] border border-[#B82B32] p-2 ">

          <img className="w-[50px] m-auto mt-2 " src="/design.png" alt="" />
          <h1 className=" text-[#B82B32] text-center mt-2">Design</h1>
          <div className="text-center">Our design team brings the plan to life with visually appealing, user-friendly interfaces that reflect the client’s brand and engage their audience.</div>

        </div>
        <div className="box w-[90vw] md:w-[365px] h-[245px] border border-[#B82B32] p-2 ">

          <img className="w-[50px] m-auto mt-2 " src="/database.png" alt="" />
          <h1 className=" text-[#B82B32] text-center mt-2">Content Writing</h1>
          <div className="text-center">Our team crafts clear, engaging, and persuasive content that communicates the client’s message and enhances the overall user experience.</div>

        </div>
        <div className="box w-[90vw] md:w-[365px] h-[245px] border border-[#B82B32] p-2 ">

          <img className="w-[50px] m-auto mt-2 " src="/database.png" alt="" />
          <h1 className=" text-[#B82B32] text-center mt-2">Coding</h1>
          <div className="text-center">We turn designs into fully functional websites and applications, writing clean, efficient code that is scalable and reliable.</div>

        </div>
        <div className="box w-[90vw] md:w-[365px] h-[245px] border border-[#B82B32] p-2 ">

          <img className="w-[50px] m-auto mt-2 " src="/database.png" alt="" />
          <h1 className=" text-[#B82B32] text-center mt-2">Testing</h1>
          <div className="text-center">Every project undergoes rigorous testing to ensure flawless performance, compatibility, and a smooth user experience across all devices.</div>

        </div>
        <div className="box w-[90vw] md:w-[365px] h-[245px] border border-[#B82B32] p-2 mb-3 ">

          <img className="w-[50px] m-auto mt-2 " src="/launching.png" alt="" />
          <h1 className=" text-[#B82B32] text-center mt-2">Launching</h1>
          <div className="text-center">Once everything is perfect, we launch the project, ensuring a seamless deployment and continued support for optimal performance.</div>

        </div>

        <div className=" hero w-full box-border md:min-h-[600px] border-none m-2 bg-[#bfbfbf4a]
        flex justify-around ">

          <div className="lefttext w-full md:w-[50%]">
            <h1 className="ml-5 font-bold text-[35px] mt-[70px] md:ml-15" >Best Web <span className="text-[#B82B32]" >Desigining</span> and <br /> <span className="text-[#B82B32] font-bold text-[35px] mt-[70px] ">Development</span></h1>

            <div className="ml-5 md:ml-15 mt-6 w-[90%]">We’re not just another web agency — we build powerful, scalable digital experiences that drive real results.
              Our team specializes in Next.js, React, Node.js, and Express, creating fast, modern, and secure web applications.
              We handle everything from frontend design to backend logic, ensuring your brand stands out with both beauty and performance.
              With expertise in MongoDB, Tailwind CSS, and REST APIs, we deliver smooth functionality and seamless user experiences.
              Every project we launch is fully optimized for speed, SEO, and long-term growth.
              We don’t just build websites — we build brands that perform.</div>

            <div className="buttons flex md:ml-4 gap-3 mt-6">
              <Link href="/getquote"><button className="p-2.5 mb-5  btn ml-11  md:p-[15px]  bg-[#B82B32] text-white rounded-lg cursor-pointer">Get a Quote</button></Link>

              <button onClick={() => window.open("https://calendly.com/ayankhalid4447/15-minutes-meeting", "_blank")} className="p-2.5 mb-5 btn ml-11  md:p-[15px] bg-[#ffffff] text-black border rounded-lg cursor-pointer" >Book a Call</button>
              <button></button>
            </div>

          </div>

          <div className="rightboxes md:w-[50%] mt-2 md:ml-[200px] ">

            <div className="md:w-[500px] w-[70vw] min-h-[180px] border border-[#B82B32] rounded-lg bg-black mb-3 md:mb-2 box m-auto">
              <h1 className="text-white text-[20px] text-center mt-1">Our Mission</h1>
              <div className="text-white m-auto p-1 text-center">
                Our mission is to empower brands through innovation, design, and technology.
                We aim to deliver digital experiences that not only look great but also perform flawlessly.
                Every project we take is driven by strategy, creativity, and measurable results.
              </div>
            </div>

            <div className="md:w-[500px] w-[70vw] min-h-[180px] border border-[#B82B32] rounded-lg bg-black mb-3 md:mb-2 box m-auto">
              <h1 className="text-white text-[20px] text-center mt-1">Expert Team</h1>
              <div className="text-white m-auto p-1 text-center">Our team is made up of skilled developers, designers, and strategists who love what they do.
                With expertise across Next.js, React, Node.js, and modern UI frameworks, we build high-quality solutions that scale.
                We collaborate closely with clients to turn their ideas into impactful digital products.</div>
            </div>

            <div className="md:w-[500px] w-[70vw] min-h-[180px] border border-[#B82B32] rounded-lg bg-black mb-3 md:mb-2 box m-auto">
              <h1 className="text-white text-[20px] text-center mt-1">Our Values</h1>
              <div className="text-white m-auto p-1 text-center">We believe in integrity, innovation, and excellence in everything we create.
                Every decision is guided by honesty, transparency, and a focus on client success.
                For us, long-term trust matters more than short-term wins.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="whychoose">
        <h1 className='font-bold text-[35px] text-[#B82B32] text-center mt-5.5 m-auto'>Why Choose DigitalMak for Web Development</h1>

        <div className='m-auto mt-5 text-center w-[80%] md:w-[70%]'>At DigitalMak, we don’t just build websites — we build growth engines for your brand.
          Our focus is on performance, creativity, and strategies that actually drive results.
          With a strong foundation in Next.js, React, and full-stack development, we deliver fast, secure, and scalable web solutions.
          Every project is crafted with precision, combining design, code, and conversion logic.
          We care about one thing above all — helping your business dominate the digital space.</div>
      </div>

      <div className="OUR CLIENTS mt-20">
        <h1 className='font-bold text-[35px] text-[#B82B32] text-center mt-5.5 m-auto'>OUR CLIENTS</h1>

        <div className='m-auto mt-5 text-center w-[90%]'><Logoscroll /></div>

      </div>


      <div className='flex justify-center'>
        <Link href="/ourprojects"> <button className=' mt-2.5 bg-[#B82B32] text-white p-[15px] rounded-lg text-center m-auto hover:cursor-pointer '>See Our Projects</button></Link>
      </div>


      <h1 className='text-center font-bold text-[30px] mt-10'>Got a <span className='text-[#B82B32]'>PROJECT</span> in mind? Let’s talk.</h1>


      <Formspree />
      <ToastContainer />


    </>

  )
}

export default Home
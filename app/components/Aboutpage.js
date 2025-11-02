import React from 'react'
import Link from 'next/link'
import Footer from './Footer'


const Aboutpage = () => {
  return (
    <>
      <header>
        <h1 className='font-bold text-[30px] text-[#B82B32] text-center mt-9'>About Us</h1>
        <h1 className='font-bold text-[25px] text-[#000000] text-center mt-5'>Building Brands that Convert & Code that Performs</h1>

        <div className='w-[50%] m-auto text-center mt-5'>At DigitalMak, we don’t just design websites — we engineer digital growth systems that help brands dominate their space.
          Our team blends creativity with data, so every click, scroll, and pixel moves your business closer to profit. From custom-built web solutions to performance-driven marketing campaigns, we focus on real growth, not hype.</div>

        <h1 className='font-bold text-[25px] text-[#000000] text-center mt-9'>Our Mission</h1>

        <div className='w-full m-auto text-center mt-5'> <div className='w-[50%] m-auto text-center mt-5'>Our mission is clear — to help every business in USA and beyond look professional, sell faster, and scale smarter.
          We aim to bridge the gap between ideas and execution, using strategy, design, and automation to transform small businesses into sustainable brands.
          No fluff, no buzzwords — just systems that work and scale.</div></div>

      </header>

      <div className='flex justify-center gap-9 mt-15 '>
        <div className="different w-[40%] h-[400px] border border-gray-300 rounded-3xl shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100 ">

          <h1 className='font-bold text-[25px] text-[#B82B32] text-center mt-5'>What Makes Us Different?</h1>
          <ul className='flex flex-col w-[70%] gap-4 m-auto mt-5'>
            <li>We don’t work for clients — we partner with them to win.</li>
            <li>Our projects combine design, development, and marketing in one unified strategy.</li>
            <li>We focus on measurable results — leads, sales, and retention — not vanity likes or fake metrics.</li>
            <li>Every project is backed by deep analysis, creativity, and a commitment to long-term growth.</li>
          </ul>

        </div>

        <div className="values w-[40%] h-[400px] border border-gray-300 rounded-3xl shadow-[5px_20px_30px_rgba(0,0,0,0.2)]  hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100">

          <h1 className='font-bold text-[25px] text-[#B82B32] text-center mt-5'>Our Core Values</h1>

          <ul className='flex flex-col w-[70%] gap-4 m-auto mt-5'>

            <li><span className='font-bold'>Transparency:</span> Every move we make is visible — no fake numbers, no sugarcoating.</li>

            <li><span className='font-bold'>Quality:</span> Whether it’s a small landing page or a full-scale brand, we treat it like our own.</li>

            <li><span className='font-bold'>Innovation:</span> We keep learning, testing, and adapting — because digital success never stands still.</li>

            <li><span className='font-bold'>Faith & Integrity: </span>Our work is guided by ethics, intention, and the belief that success comes from honesty and effort.</li>
          </ul>

        </div>

      </div>

      <h1 className='text-[#B82B32] font-bold text-[30px] text-center mt-24'>Our Tech Stack — The Power Behind <span className='font-bold text-black'>DigitalMak</span>  </h1>

      <div className='flex gap-10 mt-11 m-4 justify-center flex-wrap'>

        <div className="box w-[250px] h-[250px] border-gray-300 border rounded-lg relative shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100">
          <h1 className='p-8 text-center font-bold text-[20px]'>Next.js</h1>
          <img className='m-auto h-[100px] ' src="/Next.js.png" alt="" />
        </div>

        <div className="box w-[250px] h-[250px] border-gray-300 border rounded-lg relative shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100">
          <h1 className='p-8 text-center font-bold text-[20px]'>React.js</h1>
          <img className='m-auto h-[100px] ' src="/React.png" alt="" />
        </div>

        <div className="box w-[250px] h-[250px] border-gray-300 border rounded-lg relative shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100">
          <h1 className='p-8 text-center font-bold text-[20px]'>Node.js</h1>
          <img className='m-auto h-[100px] w-[100px] ' src="/Node.png" alt="" />
        </div>

        <div className="box w-[250px] h-[250px] border-gray-300 border rounded-lg relative shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100">
          <h1 className='p-8 text-center font-bold text-[20px]'>Tailwind CSS</h1>
          <img className='m-auto h-[100px] w-[100px] ' src="/Tailwind.png" alt="" />
        </div>

        <div className="box w-[250px] h-[250px] border-gray-300 border rounded-lg relative shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100">
          <h1 className='p-8 text-center font-bold text-[20px]'>MongoDB</h1>
          <img className='m-auto h-[100px] w-[200px] ' src="/Mongo.png" alt="" />
        </div>

        <div className="box w-[250px] h-[250px] border-gray-300 border rounded-lg relative shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:cursor-pointer hover:scale-102 transition-all duration-100 ease-in delay-100">
          <h1 className='p-8 text-center font-bold text-[20px] '>Express.js</h1>
          <img className='m-auto h-[100px] w-[100px] ' src="/Express.png" alt="" />
        </div>

      </div>

      <div className='flex justify-center mt-15'>
        <Link href="/contact"><button className='contus px-10 py-[15px] rounded-lg text-white font-bold hover: cursor-pointer hover:scale-103 transition-all duration-100 ease-in delay-100 bg-[#B82B32]'>Contact Us</button></Link>
      </div>
      <Footer />





    </>
  )
}

export default Aboutpage
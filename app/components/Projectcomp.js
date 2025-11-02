"use client"
import React from 'react'
import Logoscroll from "../components/Logoscroll.js"
import Footer from './Footer.js'

const Projectcomp = () => {
    return (
        <>
            <h1 className='text-[35px] font-bold text-center mt-8 text-[#B82B32]'>Our Projects</h1>
            <div className='w-[90%] mt-6 text-center md:w-[50%] m-auto'>Every project we take is built with strategy, precision, and creativity.
                From eCommerce stores to portfolio websites — we craft digital experiences that turn visitors into loyal customers.</div>

            <Logoscroll />

            <h1 className='text-[35px] font-bold text-center mt-8 text-[#B82B32]'>What We Offer?</h1>

            <div className='w[90%] mt-6 text-center md:w-[50%] m-auto'>At DigitalMak, we don’t just build websites — we build digital systems that sell. From sleek designs to high-performing marketing setups, everything we offer is focused on one thing: results.</div>

            <h1 className='text-[35px] font-bold text-center mt-11 text-[#B82B32]'>💼Why Choose Us</h1>

            <div className='w-[90%] mt-6 text-center md:w-[50%] m-auto'>We don’t make promises — we show proof.
                Our workflow is transparent, our designs are original, and our focus stays on delivering ROI, not excuses.</div>



            <h1 className='text-[35px] font-bold text-center mt-11 text-[#B82B32]'>Let’s Work Together</h1>

            <div className='w-[90%] mt-6 text-center md:w-[50%] m-auto'>Have a business idea or need a digital revamp?
                Let’s turn your vision into something powerful — and profitable.
                Click below and get your consultation today.</div>

            <div className='flex justify-center'>
                <button onClick={() => window.open("https://calendly.com/ayankhalid4447/15-minutes-meeting", "_blank")} className=" btn mt-8 p-[15px] mb-8 bg-[#B82B32] text-white border rounded-lg hover:cursor-pointer" >Book a Call</button>
                <button></button>

            </div>

            <Footer />



        </>
    )
}

export default Projectcomp
import React from 'react'
import Link from 'next/link'


const Footer = () => {
    return (

        <>
            <footer>
                <div className='footer h-[60vh] w-full box-border m-0 p-0 overflow-hidden border-2 mt-20 bg-black flex justify-around items-start px-8'>

                    {/* Left Column - Logo + Info */}
                    <div className="logo-info w-[30%] mt-6 font-bold text-white text-[30px]">
                        <Link href="/" className="inline-block">
                            Digital<span className='text-[#B82B32] text-[30px]'>Mak</span>
                        </Link>

                        <div className='font-normal text-[15px] mt-4'>
                            DigitalMak is the best Web development & Designing company.
                        </div>

                        <Link href="/getquote"><button className="btn mt-8 p-[15px] bg-[#B82B32] text-white font-normal rounded-lg  text-[15px] hover: cursor-pointer hover:scale-103 transition-all duration-100 ease-in delay-100">
                            Get a Quote
                        </button></Link>

                        {/* Social Links */}
                        <div className="buttons flex mt-9 gap-4 items-center">
                            <Link href="https://www.Tiktok.com/" target="_blank">
                                <img className='socialicon cursor-pointer' width={50} src="/Tiktok.png" alt="Tiktok" />
                            </Link>

                            <Link href="https://www.Facebook.com/" target="_blank">
                                <img className='socialicon cursor-pointer' width={50} src="/Facebook.png" alt="Facebook" />
                            </Link>

                            <Link href="https://www.Instagram.com/" target="_blank">
                                <img className='socialicon cursor-pointer' width={35} src="/Instagram.png" alt="Instagram" />
                            </Link>
                        </div>
                    </div>

                    {/* Center Column - Visit Us */}
                    <div className="visit-us w-[25%] mt-6 text-white">
                        <h2 className='text-[20px] font-bold mb-4'>Visit Us</h2>
                        <ul className='space-y-2 text-[15px]'>
                            <li className='cursor-pointer'>📞 +92 300 1234567</li>
                            <li className='cursor-pointer'>🏢 123 Street Name, City, Pakistan</li>
                            <li className='cursor-pointer'>🌐 www.digitalmak.com</li>
                            <li className='cursor-pointer'>✉️ contact@digitalmak.com</li>
                        </ul>
                    </div>

                    {/* Right Column - Policies */}
                    <div className="policies w-[25%] mt-6 text-white">
                        <h2 className='text-[20px] font-bold mb-4'>Policies</h2>
                        <ul className='space-y-2 text-[15px]'>
                            <li><Link href="/privacy" className='hover:text-[#B82B32]'>Privacy Policy</Link></li>
                            <li><Link href="/terms" className='hover:text-[#B82B32]'>Terms & Conditions</Link></li>
                            <li><Link href="/refund" className='hover:text-[#B82B32]'>Refund Policy</Link></li>
                        </ul>

                    </div>

                </div>

            </footer>

            <div className='w-full h-[50px] bg-[#B82B32] text-[20px] text-white flex justify-center items-center font-bold'>
                All Rights Reserved © DigitalMak.com
            </div>

        </>


    )
}

export default Footer
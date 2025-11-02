// import React from 'react'
// import Link from 'next/link'

// const Navbar = () => {
//     return (
//         <>
//             <nav className='flex items-center box-border gap-2 justify-around border-none p-7  text-[#ffffff] sticky top-0 bg-[#000000] z-50 w-full '>

//                 <Link href="/"><div className="logo font-bold text-[30px] ">Digital
//                     <span className='text-[#B82B32] text-[30px]'>Mak</span>
//                 </div></Link>

//                 <ul className='hidden md:flex gap-6 '>

//                     <Link href="/"><li className='hover:text-[#B82B32]'>Home</li></Link>
//                     <Link href="/about"><li className='hover:text-[#B82B32]'>About</li></Link>
//                     <Link href="/contact"><li className='hover:text-[#B82B32]'>Contact</li></Link>
//                     <Link href="/ourprojects"><li className='hover:text-[#B82B32]'>Our Projects</li></Link>

//                 </ul>
                
//             </nav>

//         </>


//     )
// }

// export default Navbar

"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center box-border gap-2 justify-around border-none p-7 text-[#ffffff] sticky top-0 bg-[#000000] z-50 w-full">

      {/* Logo */}
      <Link href="/">
        <div className="logo font-bold text-[30px]">
          Digital
          <span className="text-[#B82B32] text-[30px]">Mak</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <Link href="/"><li className="hover:text-[#B82B32] cursor-pointer">Home</li></Link>
        <Link href="/about"><li className="hover:text-[#B82B32] cursor-pointer">About</li></Link>
        <Link href="/contact"><li className="hover:text-[#B82B32] cursor-pointer">Contact</li></Link>
        <Link href="/ourprojects"><li className="hover:text-[#B82B32] cursor-pointer">Our Projects</li></Link>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Dropdown Menu for Mobile */}
      {open && (
        <ul className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 border-t border-[#222] md:hidden transition-all duration-300 ease-in-out">
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="hover:text-[#B82B32] cursor-pointer">Home</li>
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            <li className="hover:text-[#B82B32] cursor-pointer">About</li>
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            <li className="hover:text-[#B82B32] cursor-pointer">Contact</li>
          </Link>
          <Link href="/ourprojects" onClick={() => setOpen(false)}>
            <li className="hover:text-[#B82B32] cursor-pointer">Our Projects</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

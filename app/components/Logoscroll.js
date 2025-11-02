"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OurClients() {

  //Ye React ka hook hai — useRef.
  // useRef ka matlab hota hai:
  // 👉 “ek box jisme hum kisi element ka reference (yaani link) store karte hain.”
  // null matlab initially khali hai, hum baad me is ref ko kisi div ya element se attach karenge.

  const scrollRef = useRef(null);


  const scroll = (direction) => { //yay function parameter direction lay raha hai yani ya to left ya to right

    const { current } = scrollRef; //current ko humnay name assign kardia hai scrollref
    if (current) { //agar current exist karta hai yani koi element scrollref may agaya hai
      const scrollAmount = direction === "left" ? -300 : 300;  //left ho to -300 else +300


      // Ye line actual scrolling karwa rahi hai.
      // scrollBy() ek browser method hai jo kisi element ke andar scroll karwata hai.
      // { left: scrollAmount } → left-right direction me kitna move karna hai.
      // behavior: "smooth" → scroll smoothly move kare (jump nahi).
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const clients = [
    "/logo1.jpeg",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.jpeg",

  ];

  return (
    <section className="py-10 text-center relative">


      <div className="relative w-[70%] mx-auto">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#B82B32] hover:bg-[#941f26] text-white p-3 rounded-full z-10 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Logos */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto no-scrollbar scroll-smooth px-10"
        >
          {clients.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 w-40 h-24 rounded-xl flex justify-center items-center border-2  hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={logo}
                alt={`Client ${i}`}
                width={90}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#B82B32] hover:bg-[#941f26] text-white p-3 rounded-full z-10 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
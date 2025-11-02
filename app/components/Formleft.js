import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from './Footer';


export default function Formspree() {
    const [state, handleSubmit] = useForm("mldoppjq");
    const Formref = useRef(null)
    useEffect(() => {
        if (state.succeeded) {
            toast.success("✅ Form Submitted Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            if(Formref.current){ //it checks the form is even available in my dom or not then it checks are the fileds empty or filled if filled, it resets ater submmiting
                Formref.current.reset()
            }
        }
    }, [state.succeeded]);

    return (
        // 
        
        <>
        
<div className="flex flex-col md:flex md:flex-row justify-between items-start w-full px-10 mt-10">
  
  {/* LEFT — Form Section */}
  <ToastContainer />
  
  <form
    ref={Formref}
    onSubmit={handleSubmit}
    className="w-full md:w-[40%] bg-white p-6 rounded-2xl shadow-[5px_20px_30px_rgba(0,0,0,0.3)] space-y-4 mb-9"
  >
    {/* Name */}
    <div className="flex flex-col mt-10">
      <label htmlFor="Name" className="font-semibold text-[#B82B32] mb-1">
        Name
      </label>
      <input
        id="Name"
        type="text"
        name="Name"
        placeholder="Enter your name"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
      <ValidationError prefix="Name" field="Name" errors={state.errors} />
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label htmlFor="email" className="font-semibold text-[#B82B32] mb-1">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </div>

    {/* Message */}
    <div className="flex flex-col">
      <label htmlFor="message" className="font-semibold text-[#B82B32] mb-1">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Type your message..."
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={state.submitting}
      className="w-full bg-[#B82B32] text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200 hover:cursor-pointer"
    >
      {state.submitting ? "Submitting..." : "Submit"}
    </button>
  </form>

  {/* RIGHT — Contact Info Section */}
  <div className="md:w-[40%] text-center mb-4 text-white bg-[#B82B32] rounded-2xl p-10 shadow-[5px_20px_30px_rgba(0,0,0,0.3)]">
    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
    <p className="mb-3">📍 123 Street Name, City, Pakistan</p>
    <p className="mb-3">📞 Phone: +92 300 1234567</p>
    <p className="mb-3">✉️ Email: support@digitalmak.com</p>
    <p className="text-sm opacity-80">
      We’d love to hear from you. Whether you’re looking for a quote, partnership, or have a project idea — drop us a message!
    </p>
  </div>
</div>
<Footer/>

        
        </>
    );
}

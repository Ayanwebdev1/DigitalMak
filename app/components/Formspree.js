// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';

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
        
        <form ref={Formref} onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-2xl  shadow-[5px_20px_30px_rgba(0,0,0,0.3)] space-y-4 mt-3.5">

            {/* Name */}
            <div className="flex flex-col mt-10 ">
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
                className="w-full bg-[#B82B32] text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200"
            >
                {state.submitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}

"use client";

import React, { useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Footer from "./Footer";

export default function Quote() {
  // Replace "YOUR_FORMSPREE_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("mldoppjq");
  const formRef = useRef(null);
  const router = useRouter();

  // Toast + reset when succeeded
  useEffect(() => {
    if (state.succeeded) {
      toast.success("✅ Quote request sent. We'll reply within 24 hours!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });

      // Safe reset
      if (formRef.current) formRef.current.reset();

      // Optional: redirect to a thank-you page after a short delay
      // Uncomment if you have a /thank-you page
      // setTimeout(() => router.push("/thank-you"), 1200);
    }
  }, [state.succeeded, router]);

  // Wrap Formspree submit to prevent default page reload
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <>
    <ToastContainer />

    <h1 className="font-bold text-center text-[30px] text-[#B82B32] mt-9">Let’s Build Something Great Together</h1>
    <div className="text-center w-[60%] m-auto text-[20px] mt-5">Tell us what you need — whether it’s a website or a  full marketing system — and we’ll send you a customized quote within 24 hours. No templates. No hidden fees. Just results-driven solutions built for your business.</div>

    <h1 className="font-bold text-center text-[30px] text-[#B82B32] mt-15">Why Get a Quote from DigitalMak?</h1>
    <div className="text-center w-[60%] m-auto text-[20px] mt-5">At DigitalMak, every project starts with deep analysis. We study your business, your audience, and your goals before giving any price. That’s why our clients get clarity, not confusion — and results, not promises.</div>
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-[5px_20px_30px_rgba(0,0,0,0.12)] space-y-4 mt-11 "
      aria-label="Get a quote form"
    >
      <h2 className="text-2xl font-bold text-black mb-2">Get a Quote</h2>
      <p className="text-sm text-gray-600 mb-4">
        Tell us about your project — we’ll send you a custom quote within 24 hours.
      </p>

      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-[#B82B32]">Name</span>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="mt-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B82B32]"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium text-[#B82B32]">Email</span>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B82B32]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
      </div>

      {/* Business + Website */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-[#B82B32]">Business Name</span>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="Your company or brand"
            className="mt-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B82B32]"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium text-[#B82B32]">Website (optional)</span>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className="mt-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B82B32]"
          />
        </label>
      </div>

      {/* Budget + Goal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-[#B82B32]">Budget</span>
          <select
            id="budget"
            name="budget"
            required
            className="mt-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B82B32]"
            defaultValue=""
          >
            <option value="" disabled>
              Select budget range
            </option>
            <option value="$500-$1,500">$500 - $1,500</option>
            <option value="$1,500-$5,000">$1,500 - $5,000</option>
            <option value="$5,000+">$5,000+</option>
          </select>
        </label>

      
      </div>

      {/* Message */}
      <label className="flex flex-col">
        <span className="text-sm font-medium text-[#B82B32]">Project Details</span>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          placeholder="Briefly describe your project, timeline, and expectations..."
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B82B32]"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </label>

      {/* Start Time */}
      <label className="flex flex-col">
        <span className="text-sm font-medium text-[#B82B32]">When do you want to start?</span>
        <select
          id="start"
          name="start"
          className="mt-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B82B32]"
          defaultValue=""
        >
          <option value="" disabled>
            Choose timeframe
          </option>
          <option value="Immediately">Immediately</option>
          <option value="1-2 weeks">1–2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="Flexible">Flexible</option>
        </select>
      </label>

      {/* Honeypot (spam protection) */}
      {/* <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" /> */}

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#B82B32] text-white py-2 rounded-lg font-semibold hover:bg-[#9a1f25] transition-colors duration-200"
      >
        {state.submitting ? "Sending..." : "Get My Quote"}
      </button>

      {/* Small note */}
      <p className="text-xs text-gray-500 mt-2">
        We respect your privacy. We will never share your details. Expect a reply within 24 hours.
      </p>
    </form>
    <Footer />
    </>
  );
}
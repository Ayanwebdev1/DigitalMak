// "use client";

// import { useState, useEffect } from "react";

// export default function TypewriterLoop({ text, speed = 25 }) {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     let timeout;
//     if (!deleting && index <= text.length) {
//       // Typing
//       timeout = setTimeout(() => {
//         setDisplayedText(text.slice(0, index));
//         setIndex(index + 1);
//       }, speed);
//     } else if (deleting && index >= 0) {
//       // Deleting
//       timeout = setTimeout(() => {
//         setDisplayedText(text.slice(0, index));
//         setIndex(index - 1);
//       }, speed);
//     }

//     // Switch mode
//     if (index === text.length + 1 && !deleting) {
//       timeout = setTimeout(() => setDeleting(true), 500); // pause before deleting
//     } else if (index === -1 && deleting) {
//       setDeleting(false);
//       setIndex(0);
//     }

//     return () => clearTimeout(timeout);
//   }, [index, deleting, text, speed]);

//   return (
//     <div className=" text-black mt-5 ml-0.5 text-[30px] min-w-[40%]">
//       {displayedText}
//       <span className="animate-pulse">|</span>
//     </div>
//   );
// }
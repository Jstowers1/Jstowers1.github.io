"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Full-Stack Solutions",
  "Efficent Algorithms",
  "AI Solutions",
  "Secure Architectures"
];

export default function TextRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // Controls the fade animation

  useEffect(() => {
    // Change the phrase every 3 seconds
    const interval = setInterval(() => {
      // 1. Fade out
      setFade(false);

      // 2. Wait for fade out to finish (500ms), then swap text and fade in
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(true); 
      }, 500); // This delay should match the CSS transition duration below

    }, 3000); // Total time per word

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <span 
      className={`
        ml-2 px-2 py-1 rounded bg-neutral-800 text-accent-purple 
        transition-opacity duration-500 ease-in-out
        ${fade ? "opacity-100" : "opacity-0"}
      `}
    >
      {phrases[index]}
    </span>
  );
}

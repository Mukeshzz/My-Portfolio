import React from "react";
import CV from '../assets/Resume.pdf'

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-[#144272] text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Mukesh</h1>
        <p className="text-2xl">A Web Developer</p>
        <a href={CV} download className="mt-6 inline-block bg-gray-900 px-6 py-3 rounded-lg hover:bg-gray-700">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;

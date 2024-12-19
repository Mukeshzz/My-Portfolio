import React from "react";

const Header = () => {
  return (
    <header className="bg-[#0A2647] text-white p-4 fixed w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

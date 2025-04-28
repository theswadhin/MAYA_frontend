import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-2 shadow-md bg-white">
      <div className="text-4xl font-bold text-teal-700 flex items-center space-x-2">
        <div className="bg-teal-700 text-white rounded-lg flex items-center justify-center w-12 h-12 text-center">M</div>
        <span className="text-black">MAYA</span>
      </div>

      <nav className="space-x-6 hidden md:flex items-left">
        <a href="#features" className="text-gray-700 hover:text-teal-700">Features</a>
        <a href="#about" className="text-gray-700 hover:text-teal-700">About</a>
        <a href="#pricing" className="text-gray-700 hover:text-teal-700">Pricing</a>
        <a href="#contact" className="text-gray-700 hover:text-teal-700">Contact</a>
      </nav>

      <button className="flex border border-teal-700 text-teal-700 px-4 py-2 rounded hover:bg-teal-700 hover:text-white transition">
        Login
      </button>
    </header>
  );
};

export default Header;

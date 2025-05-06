import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed flex items-center justify-between px-6 py-4 border-b border-gray-100 shadow-md bg-white w-full">
                    <div className="flex items-center space-x-8">
                    <a href="#home">
                      <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-teal-600 text-white font-bold text-xl">
                                M
                            </div>
                            <span className="ml-2 font-bold text-xl text-gray-800">MAYA</span>
                        </div>
                        </a>
                        <nav className="hidden md:flex items-center space-x-6">
                            <a href="#feature" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Features
                            </a>

                            <div className="relative">
                                      <button
                                        onClick={() => setIsOpen((prev) => !prev)}
                                        className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                                      >
                                        AI Content Lab                                        
                                      </button>

                                      {isOpen && (
                                        <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md z-10 flex flex-col">
                                          <Link to="/ContentGenerationFlow"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsOpen(false)} // close dropdown after click
                                          >
                                            Facebook Optimizer
                                          </Link>
                                          <Link to="/ContentGenerationFlow"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            Instagram Optimizer
                                          </Link>
                                          <Link to="/ContentGenerationFlow"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            Snapchat Optimizer
                                          </Link>
                                        </div>
                                      )}
                                    </div>

                            
                            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                                About
                            </a>
                            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Contact
                            </a>
                            <a href="/UserAccountMgnt" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Account
                            </a>
                        </nav>
                    </div>

                    <Link to="/login">
                    <button className="md:flex px-5 py-2 rounded-md border border-teal-600 text-teal-800 hover:bg-teal-100 transition-colors">
                        Login
                    </button>
                    </Link>
                </header>

  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-teal-600 text-white font-bold text-xl">
                                M
                            </div>
                            <span className="ml-2 font-bold text-xl text-gray-800">MAYA</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-6">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Features
                            </a>
                            <a href="#" className="text-teal-600 border-b-2 border-teal-600 font-medium pb-1">
                                FB Optimizer
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                About
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Contact
                            </a>
                        </nav>
                    </div>
                    <button className="px-5 py-2 rounded-md border border-teal-600 text-teal-800 hover:bg-teal-100 transition-colors">
                        Login
                    </button>
                </header>

  );
};

export default Header;

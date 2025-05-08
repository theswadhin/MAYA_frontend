import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToFeatures = () => {
    navigate("/", { state: { scrollTo: "features" } });
  };
  const goToAbout = () => {
    navigate("/", { state: { scrollTo: "about" } });
  };
  const goToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  }

  return (
    <header className="fixed flex z-20 items-center justify-between px-6 py-4 border-b border-gray-100 shadow-md bg-white w-full">
                    <div className="flex items-center space-x-8">
                    <a href="/">
                      <div className="flex items-center">
                            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-teal-600 text-white font-bold text-xl">
                                M
                            </div>
                            <span className="ml-2 font-bold text-xl text-gray-800">MAYA</span>
                        </div>
                        </a>

                        <nav className="hidden md:flex items-center space-x-6">
                            <a href="#features" onClick={goToFeatures} className="text-gray-600 hover:text-gray-900 transition-colors">
                                Features
                            </a>
                            <a href="/ContentGenerationFlow" className="text-gray-600  hover:text-gray-900 transition-colors">
                                FB Optimizer
                            </a>
                            <a href="#about" onClick={goToAbout} className="text-gray-600 hover:text-gray-900 transition-colors">
                                About
                            </a>
                            <a href="#contact" onClick={goToContact} className="text-gray-600 hover:text-gray-900 transition-colors">
                                Contact
                            </a>
                        </nav>
                    </div>

                  <div className="md:flex items-center space-x-1">
                    <Link to="/register">
                    <button className=" md:flex px-5 py-2 rounded-md border border-teal-600 text-teal-800 hover:bg-teal-100 transition-colors">
                        Register
                    </button>
                    </Link>
                    <Link to="/login">
                    <button className="md:flex px-5 py-2 rounded-md border border-teal-600 text-teal-800 hover:bg-teal-100 transition-colors">
                        Login
                    </button>
                    </Link>
                    </div>
                </header>

  );
};

export default Header;

import React from 'react';

export default function Home() {
  return (
    <div id="home" className="pt-24 flex flex-col items-center px-6 py-12 space-y-24">
      {/* main Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Meet <span className="text-black">MAYA</span>, Your <br /> <span className="text-teal-600">Personal Assistant</span>
          </h1>
          <p className="text-gray-600 text-lg">
            MAYA is the intelligent personal assistant that streamlines your daily tasks,
            helps you stay organized, and boosts your productivity with AI-powered features.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-400 text-black rounded-lg font-semibold hover:bg-gray-300">
              <a href="#about">Learn More</a>
            </button>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="/mayadashboard.jpg"
            alt="Dashboard Screenshot"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-24 flex flex-col items-center w-full max-w-5xl text-center space-y-12">
        <div>
          <h3 className="text-teal-600 font-semibold">FEATURES</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">
            Everything you need in one place
          </h2>
          <p className="text-gray-600 mt-4">
            MAYA combines powerful features to help you manage your personal and professional life effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="flex items-start space-x-4">
            <div className="bg-teal-100 p-3 rounded-full">
              <svg
                className="h-6 w-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 00-7.57 16.41l-2.6 2.6a1 1 0 001.42 1.42l2.6-2.6A10 10 0 1012 2z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold">AI-Powered Intelligence</h4>
              <p className="text-gray-600">
                MAYA learns from your behaviors and preferences to provide personalized recommendations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-teal-100 p-3 rounded-full">
              <svg
                className="h-6 w-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold">Smart Scheduling</h4>
              <p className="text-gray-600">
                Automatically organize your calendar, set reminders, and prioritize tasks with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* About Section */}
        <section id="about" className="pt-24 flex flex-col items-center w-full max-w-5xl text-center space-y-12">
          <div>
            <h3 className="text-teal-600 font-semibold">ABOUT US</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Who We Are
            </h2>
            <p className="text-gray-600 mt-4">
              We are a team of passionate developers and designers dedicated to creating innovative solutions that enhance productivity and simplify daily tasks.
            </p>
          </div>
          </section>

        {/* Contact Section */} 
        <section id="contact" className="pt-24 flex flex-col items-center w-full max-w-5xl text-center space-y-12">
        <div>
            <h3 className="text-teal-600 font-semibold">CONTACT US</h3>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get in Touch
            </h2>
            <p className="text-gray-600 mt-4">
            Have questions or feedback? We'd love to hear from you! Reach out to us anytime.
            </p>
        </div>
        <form className="mt-8 space-y-6 w-full max-w-md">
            <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
            />
            <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
            />
            <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
            ></textarea>
            <button className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700">
            Send Message
            </button>   
            </form>
        </section>
        
    </div>
  );
}

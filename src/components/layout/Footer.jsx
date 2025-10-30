import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Logo and Tagline */}
          <div className="space-y-4 xl:col-span-1">
            <h3 className="text-xl font-bold text-white">M&A Academy</h3>
            <p className="text-gray-400 text-sm">
              Master the complex world of Mergers & Acquisitions with expert-led courses.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            
            {/* Explore Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Explore</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li><a href="/" className="text-base text-gray-300 hover:text-indigo-400">Home</a></li>
                <li><a href="/lessons" className="text-base text-gray-300 hover:text-indigo-400">Lesson Catalog</a></li>
                <li><a href="/my-dashboard" className="text-base text-gray-300 hover:text-indigo-400">My Dashboard</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-indigo-400">Contact Us</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-indigo-400">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-indigo-400">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} M&A Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
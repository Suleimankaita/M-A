import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Use Link components in your actual React Router setup

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
        <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-[#ff7b00]">M</h1>
            <h1 className="text-2xl font-bold text-[#0077ff]">& A</h1>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex md:space-x-8">
            <NavLink to="/" className="nav text-gray-900 hover:text-indigo-600 font-medium transition duration-150">Home</NavLink>
            <NavLink to="/lessons" className="text-gray-900 hover:text-indigo-600 font-medium transition duration-150 nav">Lessons</NavLink>
            <NavLink to="/my-dashboard" className=" text-gray-900 hover:text-indigo-600 font-medium transition duration-150 nav">Dashboard</NavLink>
            {/* <a href="/admin" className="text-gray-900 hover:text-indigo-600 font-medium transition duration-150">Admin</a> */}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">Log In</a>
            <a 
              href="/register" 
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Transition controlled by Tailwind) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" className="nav block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-indigo-600">Home</NavLink>
            <NavLink to="/lessons" className="nav block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-indigo-600">Lessons</NavLink>
            <NavLink href="/my-dashboard" className="nav block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-indigo-600">Dashboard</NavLink>
            {/* <a href="/admin" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-indigo-600">Admin</a> */}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-100">
            <div className="px-5 space-y-2">
              <a href="/login" className="block w-full text-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">Log In</a>
              <a href="/register" className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
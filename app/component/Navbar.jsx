// app/component/Navbar.js
'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-100 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src="/Logo.jpeg" className="h-12" alt="Logo" />
          <h2 className='text-blue-700'>FSH</h2>
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
            <li><a href="/" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0">Home</a></li>
            <li><a href="/about" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0">About</a></li>
            <li><a href="/services" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0">Services</a></li>
            <li><a href="/contact" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

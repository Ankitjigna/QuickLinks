"use client"
import { useState } from "react";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-16 bg-slate-800 flex flex-col sm:flex-row justify-between items-center p-4 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">

      <div className="logo font-bold text-xl ">
        <Link href="/" className="hover:text-slate-400 text-green-200">
          QuickLinks
        </Link>
      </div>


{/* Hamburger menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden block text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

      <ul className={`w-full sm:w-auto sm:flex sm:items-center sm:gap-4 mt-4 sm: ${
        isOpen ? "block" : "hidden"
          }`}>
        <li>
          <Link className="hover:text-slate-400 text-green-200 block py-1 px-2" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-slate-400 text-green-200 block py-1 px-2" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-slate-400 text-green-200 block py-1 px-2"
            href="/shorten"
          >
            Shorten
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-slate-400 text-green-200 block py-1 px-2"
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
        <li className="flex gap-3 mt-2 sm:mt-0">
          <Link href="/shorten">
            <button className="bg-slate-400 text-green-200 rounded-lg shadow-lg py-1 px-4 font-bold hover:bg-slate-500 transition">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-slate-400 text-green-200 rounded-lg shadow-lg py-1 px-4 font-bold hover:bg-slate-500 transition">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
        </div>
    </nav>
  );
};

export default Navbar;

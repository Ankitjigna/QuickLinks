import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" h-15 bg bg-slate-800 flex justify-between p-4 item-center text-white">
      <div className="logo font-bold">
        <Link href="/">
          <li>QuickLinks</li>
        </Link>
      </div>
      <ul className="flex justify-around item-center gap-4 cursor-pointer ">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>about</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact Us</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-slate-400 rounded-lg shadow-lg p-3 py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-slate-400 rounded-lg shadow-lg p-3 py-1 font-bold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

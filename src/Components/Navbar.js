"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false); // Function to close menu

  return (
    <header className="w-11/12 m-auto fixed z-10 bg-transparent py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/Logo.png" alt="4Seasons Logo" width={100} height={0} />
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Navigation */}
      <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-black md:bg-transparent md:flex ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row md:space-x-6 text-white font-medium p-4 md:p-0">
          <li><Link href="/" onClick={closeMenu} className="block py-2 hover:text-red-500">Home</Link></li>
          <li><Link href="/distributions" onClick={closeMenu} className="block py-2 hover:text-red-500">Distributions</Link></li>
          <li><Link href="/production" onClick={closeMenu} className="block py-2 hover:text-red-500">Production</Link></li>
          <li><Link href="/about" onClick={closeMenu} className="block py-2 hover:text-red-500">About Us</Link></li>
          <li><Link href="/Contact" onClick={closeMenu} className="block py-2 hover:text-red-500">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

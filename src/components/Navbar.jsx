import React, { useState } from 'react';
import Link from 'next/link';
import { TfiDownload } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[#efede6] px-4 md:px-5 py-2 md:fixed top-0 z-50 w-full md:h-24 ">
        {/* Logo */}
        <div className="w-20 h-20 md:w-24 md:h-20 flex md:pt-6">
          <p className="text-5xl text-[#2bbcca]">Nanju</p>
        </div>

        {/* Hamburger menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-950 fixed right-4 top-4 z-50">
            <FiMenu size={24} className={`${isOpen ? 'rotate-90 text-orange-400' : ''} transition-transform duration-300`} />
          </button>
        </div>

        {/* Navigation menu */}
        <div className={`flex-col md:flex-row ${isOpen ? "flex" : "hidden"} md:flex items-center justify-center md:justify-center w-full`}>
          {/* Navigation links */}
          <ul className="flex flex-col md:flex-row text-blue-950 gap-y-4 md:gap-x-16 mt-4 md:mt-0 md:items-center md:fixed">
            <li className="hover:text-orange-400 text-lg">
              <Link href="#Home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-orange-400 text-lg">
              <Link href="#About" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="hover:text-orange-400 text-lg">
              <Link href="#Project" onClick={closeMenu}>
                Project
              </Link>
            </li>
            <li className="hover:text-orange-400 text-lg">
              <Link href="#Contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Download CV button */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 md:ml-auto">
            <button className="rounded-2xl border-2 bg-blue-950 text-white px-4 py-2 hover:text-orange-400" >
              <a href="/images/Nanjundeswari M Resume.pdf" className="inline-flex items-center" onClick={closeMenu} download={"Nanjundeswari M Resume"}>
                Download CV <TfiDownload className="ml-2" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link className="flex items-center gap-2" href={"/"}>
          <Image
            width={80}
            height={73}
            alt="fintech_logo"
            src={"/images/logo.png"}
          />
          <span className="font-urbanist text-primary font-bold text-[28px]">
            Easy Pay
          </span>
        </Link>
        {/* Logo End */}

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavbarMenu />
        </div>

        {/* Contact Button (Desktop Only) */}
        <button className="hidden md:block bg-btn-primary-color text-white font-semibold text-[16px] py-3 px-6 rounded-4xl cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
          Contact Us
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl text-primary focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavbarMenu />
            <button className="bg-btn-primary-color text-white font-semibold text-[16px] py-2 px-6 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-500 block leading-[150%]">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

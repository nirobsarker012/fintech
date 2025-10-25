import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex justify-between items-center">
        {/* Logo */}
        <Link className="flex items-center" href={"/"}>
          <Image
            className=""
            width={80}
            height={73}
            alt="fintech_logo"
            src={"/images/fintechLogo.png"}
          />
          <span className="font-urbanist text-primary font-bold text-[28px]">
            Easy Pay
          </span>
        </Link>
        {/* Logo End */}
        {/* Nabmenus */}
        <NavbarMenu />
        {/* Nabmenus */}
        {/* NavBtn */}
        <button className="bg-btn-primary-color text text-white font-semibold text-[16px] py-3 px-6 rounded-4xl cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
          Contact Us
        </button>
        {/* NavBtn End */}
      </nav>
    </header>
  );
};

export default Navbar;

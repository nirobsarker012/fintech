import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-between contaier">
        <div className="max-w-[278px]">
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
          {/* Footer Title */}
          <p className="text-paragraph font-outfit text-[16px] leading-[150%]">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

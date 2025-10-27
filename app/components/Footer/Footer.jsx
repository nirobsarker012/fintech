import useData from "@/app/data/useData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { footerShortLinksData, footerOtherPageData } = useData();

  return (
    <footer className="container relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
        {/* Logo + Description */}
        <div className="max-w-[278px] shrink-0">
          <Link className="flex items-center gap-2" href={"/"}>
            <Image
              width={40}
              height={73}
              alt="fintech_logo"
              src={"/images/fintech_logo.png"}
            />
            <span className="font-urbanist text-primary font-bold text-[28px]">
              Easy Pay
            </span>
          </Link>
          <p className="text-paragraph font-outfit text-[16px] leading-[150%] mt-2">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </div>

        {/* Footer Links Container */}
        <div className="flex flex-col sm:flex-row max-w-full md:max-w-[400px] gap-x-[60px] md:gap-x-[100px] gap-y-6 md:gap-y-0 items-start justify-between">
          {/* Footer Short Links */}
          <div className="flex flex-col items-start">
            {footerShortLinksData.map((shortData) => (
              <div key={shortData.id}>
                <h3 className="font-urbanist font-bold text-[20px] leading-[150%] text-primary mb-4">
                  {shortData.title}
                </h3>
                <ul className="flex flex-col space-y-3">
                  {shortData.metaLink.map((links, index) => (
                    <Link
                      className="text-[16px] font-outfit leading-[150%] text-paragraph"
                      href={"/"}
                      key={index}
                    >
                      {links.link}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Other Page Links */}
          <div className="flex flex-col items-start">
            {footerOtherPageData.map((otherData) => (
              <div key={otherData.id}>
                <h3 className="font-urbanist font-bold text-[20px] leading-[150%] text-primary mb-4">
                  {otherData.title}
                </h3>
                <ul className="flex flex-col space-y-3">
                  {otherData.metaLink.map((links, index) => (
                    <Link
                      className="text-[16px] font-outfit leading-[150%] text-paragraph"
                      href={"/"}
                      key={index}
                    >
                      {links.link}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Border */}
      <div className="border border-[#E7E7E8] w-full mt-3.5"></div>

      {/* Copyright */}
      <div className="flex justify-center pt-[5px] pb-8 text-center">
        <span className="font-outfit font-light leading-[150%] text-[16px] text-[#878787]">
          2025 &copy; Easy Pay. All rights reserved. Fintech Loading Page by
          MUHIB
        </span>
      </div>

      {/* Blur Color (fixed center positioning) */}
      <div className="bg-[#CD9BFF] w-[200px] h-[350px] absolute blur-[300px] -z-10 left-1/2 transform translate-y-70 -translate-x-1/2 -bottom-50"></div>
    </footer>
  );
};

export default Footer;

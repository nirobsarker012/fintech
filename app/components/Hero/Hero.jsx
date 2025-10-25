"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 py-10 md:py-20">
      {/* Hero Content start */}
      <div className="flex flex-col gap-4 text-center md:text-left px-4 md:px-0">
        <span className="text-gray text-[16px] font-semibold font-outfit">
          EASY PAYMENT
        </span>

        {/* Hero Title */}
        <h1 className="font-bold text-[36px] sm:text-[48px] md:text-[64px] leading-[120%] text-primary">
          Pay fast and smarter from anywhere
        </h1>

        {/* Hero Description */}
        <p className="font-outfit text-[16px] md:text-[18px] leading-[150%] text-paragraph max-w-[500px] mx-auto md:mx-0">
          Experience the future of payments: fast, secure, and tailored for the
          next generation's convenience and trust.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-x-3 mt-8">
          <Image
            src={"/images/apple-store.png"}
            width={144}
            height={48}
            alt="apple-store"
          />

          <Image
            src={"/images/play-store.png"}
            width={144}
            height={48}
            alt="play-store"
          />
        </div>
      </div>
      {/* Hero Content end */}

      {/* Hero Image */}
      <div className="relative flex justify-center md:justify-end px-4 md:px-0">
        <Image
          width={700}
          height={710}
          alt="hero-man-wearing"
          src={"/images/hero-mar-wearing.png"}
          className="scale-110 md:scale-125"
        />

        {/* Payment Received Card */}
        <div className="max-w-52 bg-white p-5 absolute bottom-5 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 md:translate-y-2 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <h4 className="font-semibold font-urbanist text-[16.32px] text-primary">
              Payment Received
            </h4>
            <span className="font-bold font-urbanist text-[16.36px] text-btn-primary-color">
              +35,890.00
            </span>
            <div className="flex items-center gap-x-5 w-full">
              <span className="font-outfit text-gray text-[14.28px] inline-block">
                1th Jan, 2024
              </span>
              <span className="inline-flex gap-x-1.5 text-badge">
                3.09%
                <Image
                  width={11.75}
                  height={6.41}
                  alt="top-arrow"
                  src={"/images/top-arrow.svg"}
                />
              </span>
            </div>
          </div>
        </div>

        {/* User Card */}
        <div className="bg-white rounded-lg p-4 flex items-center gap-x-2 absolute top-1/2 right-10 md:top-60 md:right-20 transform translate-y-[-50%] md:translate-y-0 shadow-md">
          <div className="flex items-center">
            <Image
              src={"/images/user-3.png"}
              width={40}
              height={40}
              alt="user-1"
              className="rounded-full border-2 border-white"
            />
            <Image
              src={"/images/user-3.png"}
              width={40}
              height={40}
              alt="user-2"
              className="rounded-full border-2 border-white -translate-x-2"
            />
            <Image
              src={"/images/user-3.png"}
              width={40}
              height={40}
              alt="user-3"
              className="rounded-full border-2 border-white -translate-x-4"
            />
          </div>
          <div className="flex flex-col">
            <h6 className="text-primary font-semibold text-[16px]">120K+</h6>
            <span className="font-outfit text-gray text-[14px]">
              Active users
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

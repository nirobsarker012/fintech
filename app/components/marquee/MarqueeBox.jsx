"use client";
import useData from "@/app/data/useData";
import Image from "next/image";
import React from "react";

const MarqueeBox = () => {
  const { partnerImages } = useData();

  return (
    <section className="overflow-hidden pt-8 mb-[60px] xl:mb-[121px]">
      <div className="flex gap-16 sm:gap-20 md:gap-24">
        {[...partnerImages, ...partnerImages].map((img, index, arr) => (
          <Image
            src={img.img}
            key={index}
            width={180}
            height={40}
            alt="partner-logo"
            className={`object-contain ${
              index === arr.length - 1 ? "ml-5" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeBox;

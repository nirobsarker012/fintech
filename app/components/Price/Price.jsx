"use client";
import React from "react";
import PriceCard from "./PriceCard";
import { motion } from "motion/react";
import { fedup } from "../Animation/Animation";
const Price = () => {
  return (
    <section className="container">
      <motion.div
        variants={fedup(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col text-center items-center justify-center px-4"
      >
        <span className="text-secondary uppercase text-[16px] font-semibold font-outfit">
          PRICING
        </span>
        <h1 className="font-bold font-urbanist text-primary text-[28px] sm:text-[32px] md:text-[40px] max-w-[700px] leading-tight">
          Simple transparent pricing no hidden fees
        </h1>
      </motion.div>
      {/* Price Cards  */}
      <PriceCard />
    </section>
  );
};

export default Price;

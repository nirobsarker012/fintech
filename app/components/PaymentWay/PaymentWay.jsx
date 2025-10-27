"use client";
import React from "react";
import PaymentWayBox from "./PaymentWayBox";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeLeft, fadeRight } from "../Animation/Animation";

const PaymentWay = () => {
  return (
    <section className="bg-secondary-bg py-10 sm:py-14 md:py-20 lg:py-30">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          variants={fadeLeft(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-y-6 lg:gap-y-0 mb-8 md:mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-secondary uppercase text-sm sm:text-base font-semibold font-outfit">
              HOW IT WORKS
            </span>
            <h1 className="font-bold font-urbanist text-primary text-2xl sm:text-3xl md:text-4xl leading-tight">
              Make payments, transfers, and more in 3 simple steps
            </h1>
          </div>
          {/* Button */}
          <button className="bg-btn-primary-color text-white font-semibold text-sm sm:text-base py-4 px-6 rounded-full cursor-pointer hover:bg-black transition-all duration-500">
            Get Started Now
          </button>
        </motion.div>

        {/* Payment Steps */}
        <PaymentWayBox />

        {/* Responsive Banner Image */}
        <motion.div
          variants={fadeRight(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 w-full"
        >
          <Image
            src="/images/payment_way_banner.jpg"
            alt="payment_banner_img"
            width={1300}
            height={600}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentWay;

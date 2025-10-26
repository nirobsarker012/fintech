import React from "react";

const PaymentWay = () => {
  return (
    <section className="bg-secondary-bg py-[60px] lg:py-30">
      <div className="container">
        {/* Payment way heading */}
        <div className="flex justify-between items-end">
          <div>
            <span className="text-secondary uppercase text-[16px] font-semibold font-outfit">
              HOW IT WORKS
            </span>
            <h1 className="font-bold font-urbanist text-primary text-[28px] sm:text-[32px] md:text-[40px] max-w-[700px] leading-tight">
              Make payments, transfers, and more in 3 simple steps
            </h1>
          </div>
          {/* Contact Button (Desktop Only) */}
          <button className="bg-btn-primary-color text-white font-semibold text-[16px] py-3 px-6 rounded-4xl cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentWay;

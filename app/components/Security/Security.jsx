import React from "react";

const Security = () => {
  return (
    <section className="py-[60px] lg:py-30">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-y-6 lg:gap-y-0 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <span className="text-secondary uppercase text-sm sm:text-base font-semibold font-outfit">
              SECURITY
            </span>
            <h1 className="font-bold font-urbanist text-primary text-2xl sm:text-3xl md:text-4xl leading-tight">
              We protect your money at every step with Easy Pay
            </h1>
          </div>
          {/* desc */}
          <p className="text-[16px] font-outfit line-clamp-[150%] max-w-[376px] text-paragraph">
            Easy Pay ensures your money is protected at every step with advanced
            encryption, real-time monitoring, and multi-factor authentication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;

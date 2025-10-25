import useData from "@/app/data/useData";
import Image from "next/image";
import React from "react";

const Payments = () => {
  const { paymentData } = useData();
  return (
    <section className="container mt-[60px] lg:mt-[120px]">
      <div className="flex flex-col text-center items-center justify-center px-4">
        <span className="text-gray uppercase text-[16px] font-semibold font-outfit">
          Features
        </span>
        <h1 className="font-bold font-urbanist text-primary text-[28px] sm:text-[32px] md:text-[40px] max-w-[700px] leading-tight">
          Why choose Easy Pay for effortless payments?
        </h1>
      </div>

      {/* Payments Items Start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-between items-stretch py-12 px-4 md:px-[72px]">
        {paymentData.map((singleData) => {
          return (
            <div
              className="py-8 px-6 md:px-[22.25px] rounded-2xl transition-all duration-300 transform hover:-translate-y-3"
              style={{ backgroundColor: singleData.bgColor }}
              key={singleData.id}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={singleData.img}
                  width={60}
                  height={60}
                  alt={singleData.title}
                  className="mb-10"
                />
              </div>
              {/* Content */}
              <div className="text-center">
                <h4 className="font-urbanist font-bold text-[20px] text-primary mb-2">
                  {singleData.title}
                </h4>
                <p className="text-paragraph font-outfit text-[16px] leading-relaxed">
                  {singleData.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Payments Items End */}
    </section>
  );
};

export default Payments;

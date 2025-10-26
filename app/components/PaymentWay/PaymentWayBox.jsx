import useData from "@/app/data/useData";
import Image from "next/image";
import React from "react";

const PaymentWayBox = () => {
  const { paymentwayData } = useData();
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paymentwayData.map((data) => (
          <div
            key={data.id}
            className="relative max-w-[294px] mx-auto p-6 flex flex-col items-center text-center xl:items-start xl:text-start"
          >
            <h4 className="font-urbanist font-bold text-[80px] text-dark-shades">
              {data.num}
            </h4>

            {/* Content */}
            <div className="mt-6">
              <h4 className="font-urbanist font-bold text-[20px] text-primary">
                {data.title}
              </h4>
              <p className="mt-2 text-paragraph text-[16px]">{data.desc}</p>
            </div>

            {/* Border */}

            {/* Image bottom center */}
            <div className="absolute bottom-40 left-1/2 xl:left-1/4 transform -translate-x-1/2">
              <Image width={48} height={48} src={data.img} alt={data.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentWayBox;

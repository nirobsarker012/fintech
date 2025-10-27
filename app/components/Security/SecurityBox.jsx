import React from "react";
import useData from "@/app/data/useData";

const SecurityBox = () => {
  const { securityBoxData } = useData();

  return (
    <div className="bg-[url('/images/security_bg_img.png')] bg-center bg-no-repeat bg-cover m-4 rounded-2xl overflow-hidden py-10 px-6">
      {/* Responsive grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-y-10 
          sm:gap-y-12 
          lg:gap-y-14 
          gap-x-6
        "
      >
        {securityBoxData.map((data) => (
          <div
            key={data.id}
            className="max-w-[348px] w-full flex flex-col gap-y-6 px-4 mx-auto"
          >
            {/* Colored circle */}
            <div
              style={{ background: data.blurColor }}
              className="flex justify-center items-center w-7 h-7 rounded-full animate-blurPulse"
            >
              <span
                style={{ background: data.color }}
                className="w-2.5 h-2.5 rounded-full"
              ></span>
            </div>

            {/* Content */}
            <div>
              <h4 className="font-urbanist text-[18px] sm:text-[20px] font-bold text-primary mb-2">
                {data.title}
              </h4>
              <p className="text-paragraph font-outfit text-sm sm:text-base leading-relaxed">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityBox;

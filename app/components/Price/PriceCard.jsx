import useData from "@/app/data/useData";
import React from "react";

const PriceCard = () => {
  const { priceCardData } = useData();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {priceCardData.map((data) => (
          <div
            key={data.id}
            className={`py-10 px-6 border border-[#E7E7E8] rounded-2xl w-full mx-auto flex flex-col justify-between hover:bg-primary text-white transition-all duration-500 group ${
              data.isBg ? "bg-primary text-white" : ""
            }`}
          >
            <div className="flex flex-col grow">
              {/* heading */}
              <div className="mb-6">
                <h3
                  className={`text-primary group-hover:text-white font-urbanist font-bold text-[24px] transition-all duration-500 ${
                    data.isBg ? "text-white" : ""
                  }`}
                >
                  {data.title}
                </h3>
                <p
                  className={`text-[#4D525F] group-hover:text-[#B1B2B2] transition-all duration-500 font-outfit text-[16px] ${
                    data.isBg ? "text-[#B1B2B2]" : ""
                  }`}
                >
                  {data.subTitle}
                </p>
              </div>

              {/* Amount */}
              <h2
                className={`text-primary group-hover:text-white transition-all duration-500 font-urbanist font-bold text-[56px] leading-tight mb-6 ${
                  data.isBg ? "text-white" : ""
                }`}
              >
                ${data.amount}
                <span
                  className={`text-[#4D525F] group-hover:text-[#B1B2B2] transition-all duration-500 font-outfit text-[16px] ${
                    data.isBg ? "text-[#B1B2B2]" : ""
                  }`}
                >
                  /month
                </span>
              </h2>

              {/* Price Lists */}
              <div className="flex flex-col gap-y-3 mb-8">
                {data.priceList.map((list, index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <span
                      className={`w-6 h-6 flex justify-center items-center rounded-full bg-[#ECF0FB] shrink-0 group-hover:bg-gray-900 transition-all duration-500 ${
                        data.isBg ? "bg-gray-900" : ""
                      }`}
                    >
                      {/* <Image src={data.img} width={10} height={7} alt="right" /> */}
                      <span
                        className={`text-btn-primary-color group-hover:text-white transition-all duration-500 ${
                          data.isBg ? "text-white" : ""
                        }`}
                      >
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.08333L3.91667 8L10.3333 1"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                    <span
                      className={`text-[#4D525F] group-hover:text-[#B1B2B2] transition-all duration-500 font-outfit text-[16px] ${
                        data.isBg ? "text-[#B1B2B2]" : ""
                      }`}
                    >
                      {list.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Button */}
            <button
              className={`w-full text-primary border border-primary group-hover:text-white group-hover:border-white hover:bg-btn-primary-color hover:border-btn-primary-color rounded-full font-outfit font-semibold text-[16px] text-center py-2 cursor-pointer transition-all duration-500 ${
                data.isBg
                  ? "border-none bg-btn-primary-color text-white hover:bg-black"
                  : ""
              }`}
            >
              {data.btnText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceCard;

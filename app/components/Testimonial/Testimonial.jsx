import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-[#F6F6F6] py-[60px] xl:py-30">
      <div className="flex justify-between items-center w-full">
        {/* Testimonial Content */}
        <div className="container">
          <div className="flex flex-col items-start">
            <div className="max-w-2xl">
              <span className="text-secondary uppercase text-sm sm:text-base font-semibold font-outfit">
                TESTIMONIAL
              </span>
              <h1 className="font-bold font-urbanist text-primary text-2xl sm:text-3xl md:text-4xl leading-tight max-w-[420px]">
                We’ve build trust with reviews from real users
              </h1>
              <p className="font-outfit text-paragraph leading-[150%] text-[16px] max-w-[460px]">
                Boost your credibility by featuring genuine testimonials from
                real users, showcasing their positive experiences and
                satisfaction with Monks Pay services.
              </p>
              {/* slideBtn */}
              <div className="flex items-center gap-x-3 mt-10">
                {/* Btn-1 */}
                <button className="w-14 h-14 flex items-center justify-center border border-[#CFD0D1] rounded-full hover:bg-primary group transition-all duration-500 cursor-pointer">
                  <span className="text-primary group-hover:text-white transition-all duration-500">
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.828 6.364L7.778 1.414L6.364 0L0 6.364L6.364 12.728L7.778 11.314L2.828 6.364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
                {/* Btn - 2 */}
                <button className="w-14 h-14 flex items-center justify-center border border-[#CFD0D1] rounded-full hover:bg-primary group transition-all duration-500 cursor-pointer">
                  <span className="text-primary group-hover:text-white transition-all duration-500">
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial Content end */}
        {/* ............. */}
        {/* Testimonial Slider */}
      </div>
    </section>
  );
};

export default Testimonial;

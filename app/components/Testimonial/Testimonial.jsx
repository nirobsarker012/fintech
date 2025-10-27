"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import useData from "@/app/data/useData";
import Rating from "@/app/utils/Rating";
import Image from "next/image";

const Testimonial = () => {
  const { testimonialData } = useData();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#F6F6F6] py-[60px] xl:py-30">
      <div className="container-overflow grid grid-cols-1 gap-5 lg:grid-cols-[4fr_5fr] md:items-end lg:mb-16 lg:gap-10 xl:gap-20">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center  mx-auto gap-10">
          {/* ---------- Left Content ---------- */}
          <div className="max-w-2xl flex flex-col items-start">
            <span className="text-secondary uppercase text-sm sm:text-base font-semibold font-outfit">
              TESTIMONIAL
            </span>
            <h1 className="font-bold font-urbanist text-primary text-2xl sm:text-3xl md:text-4xl leading-tight max-w-[420px]">
              We’ve build trust with reviews from real users
            </h1>
            <p className="font-outfit text-paragraph leading-[150%] text-[16px] max-w-[460px]">
              Boost your credibility by featuring genuine testimonials from real
              users, showcasing their positive experiences and satisfaction with
              Monks Pay services.
            </p>

            {/* ---------- Navigation Buttons ---------- */}
            <div className="flex items-center gap-x-3 mt-10">
              <button
                ref={prevRef}
                className="w-14 h-14 flex items-center justify-center border border-[#CFD0D1] rounded-full hover:bg-primary group transition-all duration-500 cursor-pointer"
              >
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

              <button
                ref={nextRef}
                className="w-14 h-14 flex items-center justify-center border border-[#CFD0D1] rounded-full hover:bg-primary group transition-all duration-500 cursor-pointer"
              >
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
        {/* ---------- Right Slider ---------- */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1.1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1.3, spaceBetween: 16 },
              768: { slidesPerView: "auto", spaceBetween: 20 },
              1024: { slidesPerView: "auto", spaceBetween: 24 },
            }}
          >
            {testimonialData.map((data) => (
              <SwiperSlide
                key={data.id}
                className="max-w-[420px] py-8 px-6 flex flex-col items-start bg-white rounded-2xl"
              >
                {/* Ratings */}
                <div className="flex items-center space-x-0.5 mb-4">
                  <Rating value={data.rating} />
                </div>
                <p className="mt-2 mb-6 text-[16px] text-paragraph">
                  {data.desc}
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-2">
                  <Image
                    width={50}
                    height={50}
                    src={data.img}
                    alt={data.name}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <h6 className="font-urbanist font-medium text-[18px] text-primary leading-[120%]">
                      {data.name}
                    </h6>
                    <span className="text-paragraph font-outfit text-[16px]">
                      {data.degin}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="bg-[#cd9bff] w-[200px] h-[200px] blur-[100px] absolute top-[40%] translate-x-42"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

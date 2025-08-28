'use client'
import React, { useState, useRef } from "react";
import howPlatformWorks from "@/data/howPlatformWorks.json";
import ecoConsciousBrands from "@/data/ecoConsciousBrands.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Important: Assign refs to the navigation parameters in onBeforeInit
  // This ensures Swiper can correctly link your custom elements
  // to its navigation functionality.
  const onBeforeInit = (swiper) => {
    if (swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  };
  return (
    <>
      <header className="mx-4 md:mx-14 lg:mx-auto lg:px-14 lg:max-w-[1440px]">
        <div className="py-12 px-4 flex flex-col items-start justify-end gap-4 rounded-[12px] md:h-[700px] h-[700px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url(/Images/empowering-communities.png)] bg-cover bg-no-repeat bg-center lg:flex-row md:items-end lg:justify-between lg:py-16 lg:px-14">
          <div className="flex flex-col gap-4 items-start justify-center w-full lg:w-[50%]">
            <div></div>
            <h1 className="text-white text-[40px]/[40px] tracking-[-2.4px] font-normal text-start capitalize">
              Empowering Communities Through Sustainable Living
            </h1>
          </div>
          <div className="flex flex-col gap-4 items-start justify-center w-full lg:w-[40%]">
            <p className="text-[15px]/[22.5px] text-white font-normal tracking-[-0.9px] text-start">
              Join a growing movement of changemakers embracing eco-friendly habits, zero-waste living, and climate-conscious decisions. Access resources, events, and a green business directory tailored for impact.
            </p>
            <div className="flex flex-col gap-4 w-full md:flex-row">
              <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full md:w-1/2" aria-label="Join the movement">
                <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                  join the movement
                </span>
                <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
              </button>
              <button className="flex gap-2 justify-center items-center rounded-[8px] bg-transparent px-5 h-12 cursor-pointer border border-[#169B4C] w-full md:w-1/2" aria-label="Explore Eco-Friendly Businesses">
                <span className="text-[#169B4C] text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                  Explore Eco-Friendly Businesses
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="">
        <div className="mx-4 my-16 md:mx-14 lg:mx-auto lg:max-w-[1440px] lg:px-14 lg:my-26">
          {/* How our Platform works */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="flex flex-col gap-4 items-start justify-center lg:gap-6">
              <div className=" rounded-[24px] py-1 px-5 bg-[#E8F5ED80] w-fit">
                <h2 className="text-[13px]/[20px] tracking-[-0.78px] font-normal text-[#169B4C] capitalize lg:text-[14px]/[21px] lg:tracking-[-0.84px]">
                  How Our Platform Works
                </h2>
              </div>
              <p className="text-black text-[26px]/[26px] font-normal tracking-[-1.56px] text-start capitalize lg:text-[30px]/[36px] lg:tracking-[-1.8px]">
                Your Path to Sustainable Living Starts Here
              </p>
            </div>
            <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:grid-cols-none lg:gap-6">
              {
                howPlatformWorks.map((item, index) => (
                  <div className="flex flex-col gap-8 p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] lg:flex-1 lg:gap-14" key={index}>
                    <div className="bg-[#EDEDED] rounded-full p-2.5 h-fit w-fit lg:p-3">
                      <div className="bg-white rounded-full p-2.5 lg:p-3">
                        <img src={item.icon} alt={item.title} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-center">
                      <h3 className="text-black text-[19px]/[19px] font-normal tracking-[-1.14px] text-start lg:text-[21px]/[25.2px] lg:tracking-[-1.26px]">
                        {item.title}
                      </h3>
                      <p className="text-[15px]/[22.5px] text-[#666666] font-normal tracking-[-0.9px] text-start lg:text-[16px]/[24px] lg:tracking-[-0.96px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {/* Shop Sustainability support local */}
        <div className="bg-[#161814] w-full py-16">
          <div className="lg:mx-auto lg:max-w-[1440px] px-4 md:px-14">
            <div className="flex flex-col gap-3">
              <div className="px-5 py-1 bg-[#E8F5ED26] rounded-[24px] w-fit">
                <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-[#169B4C] font-normal">Shop Sustainably. Support Local</span>
              </div>
              <div className="flex flex-col gap-6 items-start justify-center md:justify-between md:flex-row md:items-center">
                <h2 className="text-white text-[26px]/[26px] tracking-[-1.56px] font-normal md:w-[60%]">
                  Discover verified eco-conscious brands offering plastic-free packaging, recycled products, clean cosmetics, and more.
                </h2>
                <div className="flex-row gap-4 hidden lg:flex">
                  <button className="border border-[#333333] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer" aria-label="previous" ref={prevRef}>
                    <img src="./Images/icons/left-arrow.svg" alt="left arrow" />
                  </button>
                  <button className="border border-[#333333] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer" aria-label="next" ref={nextRef}>
                    <img src="./Images/icons/right-arrow.svg" alt="right arrow" />
                  </button>
                </div>
                <a href="" className="w-full md:w-fit shrink-0">
                  <button className="flex justify-center items-center rounded-[8px] bg-transparent px-5 h-12 cursor-pointer border border-[#169B4C] w-full text-[#169B4C] text-[15px]/[15px] tracking-[-0.9px] font-medium capitalize md:w-fit" aria-label="view full directory">
                    view full directory
                  </button>
                </a>
              </div>
            </div>
            {/* mobile ecoconscious brands */}
            <div className="flex flex-col mt-8 gap-3 md:grid md:grid-cols-2 lg:hidden">
              {
                ecoConsciousBrands.map((item, index) => (
                  <div className="flex flex-col gap-5 p-5 rounded-[12px] border border-[#333333] bg-[#FFFFFF12] flex-1" key={index}>
                    <img src={item.logo} alt="" className="h-7 w-20" />
                    <div className="rounded-[8px] h-[230px] bg-cover bg-center bg-no-repeat bg-[url(/Images/green-box-nigeria.webp)]"></div>
                    <div className="flex flex-col gap-2 justify-center items-start">
                      <h3 className="text-white text-[19px]/[19px] font-normal tracking-[-1.14px]">
                        {item.title}
                      </h3>
                      <p className="text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-[#999999]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
            {/* desktop ecoconscious brands */}
            <div className="hidden lg:flex">
              <Swiper
                slidesPerView={3.2}
                spaceBetween={24}
                className="mySwiper flex flex-col mt-8 gap-3 md:flex-row flex-1"
                grabCursor={true}
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={onBeforeInit}
              >
                {
                  ecoConsciousBrands.map((item, index) => (
                    <SwiperSlide className="flex flex-col p-5 rounded-[12px] border border-[#333333] bg-[#FFFFFF12]" key={index}>
                      <img src={item.logo} alt="" className="h-7 w-20" />
                      <div className="rounded-[8px] h-[230px] lg:h-[320px] bg-cover bg-center bg-no-repeat bg-[url(/Images/green-box-nigeria.webp)] my-5"></div>
                      <div className="flex flex-col gap-2 justify-center items-start">
                        <h3 className="text-white text-[19px]/[19px] font-normal tracking-[-1.14px]">
                          {item.title}
                        </h3>
                        <p className="text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-[#999999]">
                          {item.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            {/* divider line */}
            <div className="h-px w-full bg-[#333333] my-12"></div>
            {/*  */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="px-5 py-1 bg-[#E8F5ED26] rounded-[24px] w-fit">
                  <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-[#169B4C] font-normal">Get Involved: Events & Eco Challenges</span>
                </div>
                <div className="flex flex-col gap-6 items-start justify-center md:justify-between">
                  <h2 className="text-white text-[26px]/[26px] tracking-[-1.56px] font-normal">
                    Participate in local sustainability events or challenge yourself to reduce plastic waste, lower your carbon footprint, or volunteer for change.
                  </h2>
                  <div className="flex items-center justify-start gap-4 w-full">
                    <a href="" className="w-1/2 md:w-fit">
                      <button className="flex justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full text-white text-[15px]/[15px] tracking-[-0.9px] font-medium capitalize md:w-fit" aria-label="view full directory">
                        view all events
                      </button>
                    </a>
                    <a href="" className="w-1/2 md:w-fit">
                      <button className="flex justify-center items-center rounded-[8px] bg-transparent px-5 h-12 cursor-pointer border border-[#169B4C] w-full text-[#169B4C] text-[15px]/[15px] tracking-[-0.9px] font-medium capitalize md:w-fit" aria-label="view full directory">
                        join a challenge
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="h-[230px] bg-cover bg-center bg-no-repeat bg-[url(/Images/world-clean-up-day-lagos-beach.webp)] rounded-[12px]"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

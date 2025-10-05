"use client"
import { useState } from "react"
import CtaCard from "@/components/ctaCard";
import whyYourSupportMatters from "@/data/whyYourSupportMatters.json"
import Selector from "@/components/Selector"
import giveOnceOrGiveMonthly from "@/data/giveOnceOrGiveMonthly.json"
import oneTimeDonation from "@/data/oneTimeDonation.json"
import OneTimeForm from "@/components/OneTimeForm"
import Accordion from "@/components/Accordion";
import needHelp from "@/data/needHelp.json"

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Import your data
import hereForOurMembers from "@/data/hereForOurMembers.json";

// Import your mobile version
import MobileTestimonials from "@/components/MobileTestimonials";

export default function DonationPage() {
  // Use id for selected state (default to first item’s id)
  const [selected, setSelected] = useState<string | number>(
    giveOnceOrGiveMonthly[0]?.id ?? ""
  )

  // Find the full option object for the current selection
  const selectedOption =
    giveOnceOrGiveMonthly.find((item) => item.id === selected) ??
    giveOnceOrGiveMonthly[0]

const prevRef = useRef<HTMLButtonElement | null>(null);
const nextRef = useRef<HTMLButtonElement | null>(null);

// Attach Swiper navigation before initialization
const onBeforeInit = (swiper: any) => {
  if (typeof swiper.params.navigation !== "boolean") {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }
  swiper.navigation.init();
  swiper.navigation.update();
};

  return (
    <main>
      <section className="flex flex-col gap-16 lg:mx-auto lg:max-w-[1440px] pb-30">
        {/* Hero Section */}
        <section className="px-4 pb-4 md:px-14">
          <div>
            <div className="bg-cover bg-no-repeat bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/Images/support-sustainability-in-nigeria-today-mobile.webp)] md:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/Images/support-sustainability-in-nigeria-today.webp)] bg-center w-full h-[440px] md:h-[460px] rounded-xl md:px-14 py-16 px-4 flex flex-col gap-10 justify-center items-center">
              <div className="flex flex-col gap-10 items-center">
                <div className="md:max-w-[1216px]">
                  <p className="text-white text-[40px] lg:text-[73px] text-center md:leading-[120%] lg:tracking-[-4.38px] leading-[100%] tracking-[-2.4px]">
                    Make a Real Impact. <br />
                    Support Sustainability in Nigeria
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                  {/* First button */}
                  <button
                  className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full md:w-auto"
                  aria-label="Browse Businesses"
                  >
                    <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                      Donate Now
                    </span>
                    <img
                      src="./Images/icons/right-arrow.svg"
                      alt="join the movement today"
                    />
                  </button>
                  {/* Second button */}
                  <button
                  className="flex gap-2 justify-center items-center rounded-[8px] border-white border px-5 h-12 cursor-pointer w-full md:w-auto"
                  aria-label="List Your Business"
                  >
                    <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                      See what your donation supports
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Your Support Matters */}
        <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit justify-center">
              <h1 className="text-[13px] md:text-[14px] text-[#169B4C] text-center whitespace-nowrap md:tracking-[-0.84px] leading-[150%] tracking-[-0.78px]">
                Why Your Support Matters
              </h1>
            </div>
            <h2 className="text-[26px] md:text-[30px] text-black font-normal max-w-[878px] tracking-[-1.56px] leading-[100%] md:leading-[120%] md:tracking-[-1.8px]">
              We’re building a movement — not a company. Your donation helps
              power community-led projects that directly impact our environment
              and people. With your help, we can:
            </h2>
            {/* Cards */}
            <div className="flex flex-col justify-center gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 lg:flex-row lg:gap-6 md:gap-6">
              {whyYourSupportMatters.map((index) => (
                <CtaCard
                  key={index.id}
                  title={index.title}
                  icon={index.icon}
                  subtitle={index.subtitle}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Donation Section */}
        <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">
          <div className="flex flex-col gap-8 md:gap-12.5">
            <div className="flex flex-col gap-3">
              {/* Heading */}
              <div>
                <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full  justify-center items-center w-fit">
                  <h1 className="text-[13px] md:text-[14px] text-[#169B4C] text-center whitespace-nowrap md:tracking-[-0.84px] leading-[150%] tracking-[-0.78px]">
                    Your Support Creates Real Impact
                  </h1>
                </div>
              </div>
              <h2 className="text-[26px] md:text-[30px] text-black font-normal tracking-[-1.56px] leading-[100%] md:leading-[120%] md:tracking-[-1.8px]">
                Give Once or Give Monthly — Every Bit Helps
              </h2>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row md:gap-20">
              {/* Selector */}
              <div className="lg:w-1/2">
                <Selector
                  items={giveOnceOrGiveMonthly}
                  selected={selected}
                  onChange={setSelected}
                />
              </div>
              {/* Donation Form (heading updates with selected option) */}
              <div className="flex-1">
                <OneTimeForm
                  fields={oneTimeDonation}
                  heading={selectedOption?.title ?? "Donation Form"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">
          <div className="flex flex-col gap-8 md:gap-25">
            <div className="flex flex-col gap-5">
              {/* Heading */}
              <div>
                  <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full  justify-center items-center w-fit">
                        <h1 className="text-[13px] md:text-[14px] text-[#169B4C] text-center whitespace-nowrap md:tracking-[-0.84px] leading-[150%] tracking-[-0.78px]">
                            Here For Our Members
                        </h1>
                    </div>
              </div>
              <h2 className="text-[26px] md:text-[30px] text-black font-normal tracking-[-1.56px] leading-[100%] md:leading-[120%] md:tracking-[-1.8px]">
                Real Change, Powered By Donors Like You
              </h2>
            </div>
            </div>

        {/* hear from our members */}
        <div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 md:gap-6 justify-end items-end">
                <div className="flex-row gap-4 hidden lg:flex">
                  <button className="border border-[#E6E6E6] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer" aria-label="previous" ref={prevRef}>
                    <img src="./Images/icons/black-left-arrow.svg" alt="left arrow" />
                  </button>
                  <button className="border border-[#E6E6E6] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer" aria-label="next" ref={nextRef}>
                    <img src="./Images/icons/black-right-arrow.svg" alt="right arrow" />
                  </button>
                </div>
            </div>
            {/* mobile and tablet testimonials layout */}
            <MobileTestimonials />
            {/* desktop testimonial slider */}
            <div className="hidden lg:flex">
              <Swiper
                slidesPerView={1.3}
                spaceBetween={24}
                className="mySwiper flex flex-col gap-6 md:flex-row flex-1"
                grabCursor={true}
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={onBeforeInit}
              >
              {
                  hereForOurMembers.map((item, index) => (
                  <SwiperSlide className="p-5 rounded-[12px] border border-[#E6E6E6] bg-[#F5F7FA]" key={index}>
                      <div className="grid grid-cols-[40%_1fr] gap-10">
                      <div className="flex flex-col justify-between items-start">
                          <div className="rounded-[24px] py-1 px-5 bg-[#EDEDED]">
                          <span className="text-[14px]/[21px] tracking-[-0.84px] text-black">{item.type}</span>
                          </div>
                          <div className="flex flex-col justify-center items-start gap-10">
                          <p className="text-[21px]/[25px] font-normal tracking-[-1.26px] text-black">
                              {item.title}
                          </p>
                          <p className="text-[21px]/[25px] font-normal tracking-[-1.26px] text-black capitalize">
                              – {item.name}
                          </p>
                          </div>
                      </div>
                      <div className="h-[500px] rounded-[8px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${item.image})`}}></div>
                      </div>
                  </SwiperSlide>
                  ))
              }
              </Swiper>
            </div>
          </div>
        </div>
        </section>

        <section className="px-4 py-8 flex flex-col gap-16 md:px-14 lg:mx-auto lg:max-w-[1440px]">
          <div className="flex flex-col gap-14 lg:gap-[65px] lg:flex-row lg:flex  lg:mx-auto lg:px-[169px]">
            <div className="flex flex-col gap-3">
              <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit justify-center">
                <h1 className="text-[13px] md:text-[14px] leading-[150%] tracking-[-0.78px] md:tracking-[-0.84px] text-[#169B4C] text-center whitespace-nowrap">
                  Need Help?
                </h1>
              </div>
              <h2 className="text-[26px] md:text-[30px] text-black font-normal leading-[120%] tracking-[-1.56px] md:tracking-[-1.8px]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-[540px]">
              <Accordion items={needHelp} />
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
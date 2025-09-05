'use client'
import React, { useState, useRef, useEffect } from "react";
import howPlatformWorks from "@/data/howPlatformWorks.json";
import ecoConsciousBrands from "@/data/ecoConsciousBrands.json";
import resourceHub from "@/data/resourceHub.json";
import ecoEvents from "@/data/ecoEvents.json";
import differencesMade from "@/data/differencesMade.json";
import testimonials from "@/data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import CtaCard from "@/components/ctaCard";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const stepperRef = useRef(null);

  const [isInView, setIsInView] = useState(false);
  const [activeStepper, setActiveStepper] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (stepperRef.current) {
      observer.observe(stepperRef.current);
    }

    if (isInView) {
      const interval = setInterval(() => {
        setActiveStepper((prev) => (prev + 1) % ecoEvents.length);
      }, 5000);
      return () => clearInterval(interval);
    }

    return () => {
      if (stepperRef.current) {
        observer.unobserve(stepperRef.current);
      }
    };
    
  })

  const onBeforeInit = (swiper) => {
    if (swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  };
  return (
    <>
      <header className="mx-4 md:mx-14 lg:mx-auto lg:px-14 lg:max-w-[1440px]">
        <Swiper
          slidesPerView={1}
          className="mySwiper flex flex-row flex-1 relative"
          spaceBetween={16}
          freeMode={true}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={onBeforeInit}
        >
          <div className="flex-row gap-4 flex z-50 absolute bottom-[220px] left-4 md:bottom-[160px] md:left-[56px]">
            <button className="border border-[#333333] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer bg-white" aria-label="previous" ref={prevRef}>
              <img src="./Images/icons/black-left-arrow.svg" alt="left arrow" />
            </button>
            <button className="border border-[#333333] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer bg-white" aria-label="next" ref={nextRef}>
              <img src="./Images/icons/black-right-arrow.svg" alt="right arrow" />
            </button>
          </div>
          {
            ecoConsciousBrands.map((item, index) => (
              <SwiperSlide className="" key={index}>
                <div className="py-12 px-4 flex flex-col items-start justify-end gap-4 rounded-[12px] md:h-[700px] h-[700px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url(/Images/saidu-peter.webp)] bg-cover bg-no-repeat bg-center lg:flex-row md:items-end lg:justify-between lg:py-16 lg:px-14">
                  <div className="flex flex-col gap-4 items-start justify-center w-full lg:w-[50%]">
                    <h1 className="text-white text-[40px]/[40px] tracking-[-2.4px] font-normal text-start capitalize">
                      Empowering Communities Through Sustainable Living
                    </h1>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-center w-full lg:w-[40%]">
                    <p className="text-[15px]/[22.5px] text-white font-normal tracking-[-0.9px] text-start">
                      Join a growing movement of changemakers embracing eco-friendly habits, zero-waste living, and climate-conscious decisions. Access resources, events, and a green business directory tailored for impact.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </header>
      <main className="">
        {/* How our Platform works */}
        <section className="mx-4 my-16 md:mx-14 lg:mx-auto lg:max-w-[1440px] lg:px-14 lg:my-26">
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
                  <CtaCard icon={item.icon} title={item.title} subtitle={item.subtitle} key={index} />
                ))
              }
            </div>
          </div>
        </section>
        {/* Shop Sustainability support local */}
        <section className="bg-[#161814] w-full py-16">
          <div className="lg:mx-auto lg:max-w-[1440px] px-4 md:px-14">
            <div className="flex flex-col gap-3 md:gap-6">
              <div className="px-5 py-1 bg-[#E8F5ED26] rounded-[24px] w-fit">
                <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-[#169B4C] font-normal">Shop Sustainably. Support Local</span>
              </div>
              <div className="flex flex-col gap-6 items-start justify-center md:justify-between md:flex-row md:items-end">
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
            <div className="flex flex-col gap-8 md:grid md:grid-cols-[40%_1fr] md:grid-rows-[auto_1fr] md:gap-y-16 md:gap-x-10 lg:gap-x-20">
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
              {/* Image */}
              <div className="h-[230px] bg-cover bg-center bg-no-repeat bg-[url(/Images/world-clean-up-day-lagos-beach.webp)] rounded-[12px] md:h-full place-self-stretch md:row-span-2"></div>
              {/* Eco Events with times progress bar */}
              <div className="flex flex-col gap-5" ref={stepperRef}>
                {
                  ecoEvents.map((item, index) => (
                    <div className="flex flex-col gap-5" key={index}>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-5">
                          <h3 className={`text-[19px]/[19px] font-normal tracking-[-1.14px] capitalize transition-colors duration-75 ease-linear ${activeStepper === index ? 'text-white' : 'text-[#666666]'}`}>
                            {item.title}
                          </h3>
                          <img src="./Images/icons/green-right-arrow.svg" alt="" className="size-6" />
                        </div>
                        <p className={`text-[15px]/[22.5px] tracking-[-0.9px] font-normal text-[#999999] ${activeStepper === index ? 'block' : 'hidden'}`}>
                          {item.description}
                        </p>
                      </div>
                      <div className="w-full h-[2px] bg-[#333333]">
                        <div className={`h-full bg-[#169B4C] transition-all duration-[5000] ease-linear ${activeStepper === index ? 'block animate-width' : 'hidden'}`}></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        {/* Learn the sustainable way */}
        <section className="mx-4 my-16 md:mx-14 lg:mx-auto lg:max-w-[1440px] lg:px-14 lg:my-26">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 md:gap-6">
                <div className="px-5 py-1 bg-[#E8F5ED80] rounded-[24px] w-fit">
                  <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-[#169B4C] font-normal">Learn the Sustainable Way</span>
                </div>
                <div className="flex flex-col gap-6 items-start justify-center md:justify-between md:flex-row md:items-end">
                  <h2 className="text-black text-[26px]/[26px] tracking-[-1.56px] font-normal md:w-[60%]">
                    Get access to practical guides, videos, and blogs on how to live a more sustainable lifestyle — from eco-friendly shopping to composting at home.
                  </h2>
                  <a href="" className="w-full md:w-fit shrink-0">
                    <button className="flex justify-center items-center rounded-[8px] bg-transparent px-5 h-12 cursor-pointer border border-[#169B4C] w-full text-[#169B4C] text-[15px]/[15px] tracking-[-0.9px] font-medium capitalize md:w-fit" aria-label="view full directory">
                      Visit the Resource Hub
                    </button>
                  </a>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              {
                resourceHub.map((item,index) => (
                  <div className="flex flex-col gap-2 md:gap-4 md:flex-1" key={index}>
                    <div className="flex items-start justify-start rounded-[8px] p-3 h-[230px] bg-cover bg-center bg-no-repeat md:h-[310px] w-full bg-[#F5F7FA]" style={{backgroundImage: `url(${item.image})`}}>
                      <div className="flex items-center justify-center rounded-[24px] py-1 px-5 backdrop-blur-[2px] bg-[#FFFFFF33] border border-[#E6E6E64D]">
                        <span className="text-[13px]/[19.5px] font-normal text-white tracking-[-0.78px] capitalize md:text-[14px]/[21px] md:tracking-[-0.84px]">{item.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-black text-[19px]/[19px] font-normal tracking-[-1.14px] md:text-[21px]/[25px] md:tracking-[-1.26px]">
                        {item.title}
                      </h3>
                      <p className="text-[15px]/[22.5px] text-[#666666] font-normal tracking-[-0.9px] md:text-[16px]/[24px] md:tracking-[-0.96px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* together we make a difference */}
        <section className="mx-4 my-16 md:mx-14 lg:mx-auto lg:max-w-[1440px] lg:px-14 lg:my-26">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 md:gap-6">
              <div className="px-5 py-1 bg-[#E8F5ED80] rounded-[24px] w-fit">
                <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-[#169B4C] font-normal">Together, We Make a Difference</span>
              </div>
              <div className="flex flex-col gap-6 items-start justify-center md:justify-between md:flex-row md:items-end">
                <h2 className="text-black text-[26px]/[26px] tracking-[-1.56px] font-normal md:w-[60%]">
                  See the real impact our community is making through action, education, and collaboration.
                </h2>
                <a href="" className="w-full md:w-fit shrink-0">
                  <button className="flex justify-center items-center rounded-[8px] bg-transparent px-5 h-12 cursor-pointer border border-[#169B4C] w-full text-[#169B4C] text-[15px]/[15px] tracking-[-0.9px] font-medium capitalize md:w-fit" aria-label="view full directory">
                    track your impact
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:grid-cols-none lg:gap-6">
              {
                differencesMade.map((item,index) => (
                  <div className="flex flex-col p-2 rounded-[12px] gap-2 border border-[#E6E6E6] bg-[#F5F7FA] lg:flex-1 md:gap-4" key={index}>
                    <div className="flex items-start justify-start rounded-[8px] p-3 h-[230px] bg-cover bg-center bg-no-repeat lg:h-[260px] w-full bg-[#F5F7FA]" style={{backgroundImage: `url(${item.image})`}}>
                    </div>
                    <div className="flex flex-col gap-1 px-2">
                      <h3 className="text-black text-[19px]/[19px] font-normal tracking-[-1.14px] md:text-[21px]/[25px] md:tracking-[-1.26px]">
                        {item.title}
                      </h3>
                      <p className="text-[15px]/[22.5px] text-[#666666] font-normal tracking-[-0.9px] md:text-[14px]/[21px] md:tracking-[-0.84px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* hear from our members */}
        <section className="mx-4 my-16 md:mx-14 lg:mx-auto lg:max-w-[1440px] lg:px-14 lg:my-26">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 md:gap-6">
              <div className="px-5 py-1 bg-[#E8F5ED80] rounded-[24px] w-fit">
                <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-[#169B4C] font-normal">Hear From Our Members</span>
              </div>
              <div className="flex flex-col gap-6 items-start justify-center md:justify-between md:flex-row md:items-end">
                <h2 className="text-black text-[26px]/[26px] tracking-[-1.56px] font-normal md:w-[60%]">
                  Real stories from individuals and businesses making a difference through the platform.
                </h2>
                <div className="flex-row gap-4 hidden lg:flex">
                  <button className="border border-[#E6E6E6] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer" aria-label="previous" ref={prevRef}>
                    <img src="./Images/icons/black-left-arrow.svg" alt="left arrow" />
                  </button>
                  <button className="border border-[#E6E6E6] size-12 shrink-0 rounded-full flex items-center justify-center cursor-pointer" aria-label="next" ref={nextRef}>
                    <img src="./Images/icons/black-right-arrow.svg" alt="right arrow" />
                  </button>
                </div>
              </div>
            </div>
            {/* mobile and tablet testimonials layout */}
            <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
              {
                testimonials.map((item, index) => (
                  <div className="py-5 px-2.5 rounded-[12px] border border-[#E6E6E6] bg-[#F5F7FA]" key={index}>
                    <div className="flex flex-col gap-5 items-start">
                      <div className="rounded-[24px] py-1 px-5 bg-[#EDEDED]">
                        <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-black">{item.type}</span>
                      </div>
                      <div className="h-[320px] w-full rounded-[8px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${item.image})`}}></div>
                      <div className="flex flex-col justify-between items-start">
                        <div className="flex flex-col justify-center items-start gap-10">
                          <p className="text-[19px]/[19px] font-normal tracking-[-1.14px] text-black">
                            {item.title}
                          </p>
                          <p className="text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-black capitalize">
                            – {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
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
                  testimonials.map((item, index) => (
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
        </section>
      </main>
    </>
  );
}

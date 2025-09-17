'use client'
import React from 'react'
import communityForum from '@/data/communityForum.json'
import { useState } from 'react'

const page = () => {
    const [contentToDisplay, setContentToDisplay] = useState(5)
    return (
        <div className='mx-4 md:mx-14 lg:mx-auto lg:px-14 lg:max-w-[1440px]'>
            <header className='h-fit w-full py-16 px-4 flex flex-col items-center justify-center gap-10 rounded-[8px] mt-2.5 mb-16 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/Images/lets-talk-sustainability.webp)] bg-cover bg-no-repeat bg-center md:h-[450px] md:px-14 xl:h-[460px] lg:mt-5 lg:mb-[104px]'>
                <h1 className="text-[40px]/[40px] tracking-[-2.4px] text-center font-white font-normal text-white capitalize md:text-[53px]/[53px] xl:text-[73px]/[87.6px] xl:tracking-[-4.38px]">
                    Let’s Talk Sustainability  <br /> — Together
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                    <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full md:shrink-0 md:w-fit" aria-label="Join the movement">
                        <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                            browse communities
                        </span>
                        <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
                    </button>
                    <button className="flex gap-2 justify-center items-center rounded-[8px] bg-transparent border border-[#E6E6E6] px-5 h-12 cursor-pointer w-full md:w-fit md:shrink-0" aria-label="Join the movement">
                        <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                            read community guidelines
                        </span>
                    </button>
                </div>
            </header>
            <main className="flex flex-col gap-16 mb-16 lg:mb-[104px] lg:gap-[104px]">
                {/*  */}
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-8">
                        <div className="border-t border-[#E6E6E6] pt-8 flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-col lg:items-center lg:justify-center">
                        {
                            communityForum.length > 0 ?
                            communityForum.slice(0, contentToDisplay).map((event, index) => (
                                <div className="p-2.5 rounded-[12px] flex flex-col gap-6 border border-[#E6E6E6] bg-[#F5F7FA] lg:flex-row lg:p-5 lg:gap-10" key={index}>
                                    <div className="rounded-[8px] w-full h-[230px] bg-cover bg-center bg-no-repeat lg:w-[315px] lg:h-[210px] lg:shrink-0" style={{backgroundImage: `url(${event.image})`}}></div>
                                    <div className="flex flex-col gap-5 items-start justify-center">
                                        <div className="flex flex-col gap-2 items-start justify-center lg:gap-3">
                                            <h2 className="text-[19px]/[19px] font-normal tracking-[-1.14px] text-black capitalize lg:text-[21px]/[25.2px] lg:tracking-[-1.26px]">
                                                {event.title}
                                            </h2>
                                            <p className="text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-[#666666] lg:text-[16px]/[24px] lg:tracking-[-0.96px]">
                                                {event.description}
                                            </p>
                                        </div>
                                        <button className="px-5 h-12 w-full flex items-center justify-center rounded-[8px] bg-[#169B4C] cursor-pointer capitalize text-[15px]/[15px] font-medium tracking-[-0.9px] text-center text-white lg:text-[16px]/[16px] lg:tracking-[-0.96px] lg:w-fit">
                                            {event.cta }
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-6 lg:flex-row">
                                        {/* divider line */}
                                        <div className="w-full h-px bg-[#E6E6E6] lg:h-full lg:w-px"></div>
                                        <div className="flex flex-col items-start justify-center gap-3">
                                            <p className="text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-black text-start lg:text-[14px]/[21px] lg:tracking-[-0.84px]">
                                                Over 100 Sustainaibility Ambassadors like you have registered
                                            </p>
                                            <div className="w-1/2 h-10 bg-contain bg-[0%_50%] bg-no-repeat bg-[url(/Images/registered-sustainability-ambassadors.webp)]"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : 
                            <div className="h-[300px] flex items-center justify-center rounded-[12px] px-5 py-0 border border-[#E6E6E6] w-full">
                                <p className="text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-[#666666] lg:text-[16px]/[24px] lg:tracking-[-0.96px] capitalize">no events to show</p>
                            </div>
                        }
                        </div>
                        {
                            communityForum.length > 0 ?
                            <button className="border border-[#E6E6E6] rounded-[8px] px-5 h-12 w-full text-[15px]/[15px] tracking-[-0.9px] capitalize font-medium text-[#169B4C] lg:w-fit lg:text-[16px]/[16px] lg:tracking-[-0.96px] place-self-center cursor-pointer" aria-label="load more events" onClick={() => setContentToDisplay(contentToDisplay + 3)}>
                                load more events
                            </button>
                            : null
                        }
                        <div className="h-px w-full bg-[#E6E6E6]"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page
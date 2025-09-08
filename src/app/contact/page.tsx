import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='mx-4 md:mx-14 lg:mx-auto lg:px-14 lg:max-w-[1440px] mt-8 flex flex-col gap-16 mb-16 lg:mt-16 lg:gap-[104px]'>
            <div className="flex flex-col gap-8 md:flex-row md:gap-20 md:items-start">
                <div className="flex flex-col gap-4 justify-center items-start md:flex-1">
                    <h1 className="text-[40px]/[40px] font-normal tracking-[-2.4px] text-black text-start md:text-[48px]/[57.6px] md:tracking-[-2.88px]">
                        We’d Love to Hear From You
                    </h1>
                    <p className="text-[#666666] text-[15px]/[22.5px] tracking-[-0.9px] font-normal text-start md:text-[16px]/[24px] md:text-[-0.96px]">
                        Whether you’re curious, passionate, or looking to collaborate, we’re here to support sustainability in every way we can.
                    </p>
                </div>
                <div className="py-5 px-2.5 flex flex-col gap-5 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] rounded-[12px] md:flex-1 md:p-10">
                    <h2 className="text-start text-[26px]/[26px] tracking-[-1.56px] font-normal text-[#169B4C] md:text-[30px]/[36px] md:tracking-[-1.8px]">
                        Send Us a Message
                    </h2>
                    <hr className='bg-[#E6E6E6]' />
                    <form className="gap-5 flex flex-col items-center md:items-start">
                        <input type="text" className='rounded-[8px] border border-[#E6E6E6] py-2.5 px-4 h-12 capitalize text-[15px]/[22.5px] font-normal text-[#666666] tracking-[-0.9px] placeholder-shown:text-[#666666] w-full' placeholder='full name*' required />
                        <input type="email" className='rounded-[8px] border border-[#E6E6E6] py-2.5 px-4 h-12 capitalize text-[15px]/[22.5px] font-normal text-[#666666] tracking-[-0.9px] placeholder-shown:text-[#666666] w-full' placeholder='email address*' required />
                        <input type="text" className='rounded-[8px] border border-[#E6E6E6] py-2.5 px-4 h-12 capitalize text-[15px]/[22.5px] font-normal text-[#666666] tracking-[-0.9px] placeholder-shown:text-[#666666] w-full' placeholder='subject' />
                        <input type="text" className='rounded-[8px] border border-[#E6E6E6] py-2.5 px-4 h-12 capitalize text-[15px]/[22.5px] font-normal text-[#666666] tracking-[-0.9px] placeholder-shown:text-[#666666] w-full' placeholder='message' />
                        <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full sm:w-fit" aria-label="Join the movement">
                            <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                                submit
                            </span>
                            <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 items-start justify-center w-full">
                    <div className="py-1 px-5 rounded-[24px] flex justify-center items-center bg-[#E8F5ED80] w-fit">
                        <span className='text-[#169B4C] text-[13px]/[19.5px] tracking-[-0.78px] fonrnotmal
                        '>
                            Prefer to Chat Directly?
                        </span>
                    </div>
                    <p className="text-black text-[26px]/[26px] tracking-[-1.56px] font-normal text-start md:text-[30px]/[36px] md:tracking-[-1.8px]">
                        Other Ways to Reach Us
                    </p>
                </div>
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] gap-6 flex flex-row justify-start items-center">
                        <div className="size-16 rounded-full bg-[#EDEDED] flex items-center justify-center md:size-21">
                            <img src="" alt="" />
                        </div>
                        <p className="text-[19px]/[19px] tracking-[-1.14px] text-black font-normal md:text-[21px]/[25.2px] md:tracking-[-1.26px]">
                            hello@[yourdomain].com
                        </p>
                    </div>
                    <div className="p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] gap-6 flex flex-row justify-start items-center">
                        <div className="size-16 rounded-full bg-[#EDEDED] flex items-center justify-center">
                            <img src="" alt="" />
                        </div>
                        <p className="text-[19px]/[19px] tracking-[-1.14px] text-black font-normal md:text-[21px]/[25.2px] md:tracking-[-1.26px]">
                            [+234 xxx xxx xxxx]
                        </p>
                    </div>
                    <div className="p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] gap-6 flex flex-row justify-start items-center">
                        <div className="size-16 rounded-full bg-[#EDEDED] flex items-center justify-center">
                            <img src="" alt="" />
                        </div>
                        <p className="text-[19px]/[19px] tracking-[-1.14px] text-black font-normal md:text-[21px]/[25.2px] md:tracking-[-1.26px]">
                            Abuja, Nigeria
                        </p>
                    </div>
                    <div className="p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] gap-6 flex flex-row justify-start items-center">
                        <div className="size-16 rounded-full bg-[#EDEDED] flex items-center justify-center">
                            <img src="./Images/icons/instagram.svg" alt="follow and reach us on instagram" className='size-16 md:size-20 shrink-0'/>
                        </div>
                        <p className="text-[19px]/[19px] tracking-[-1.14px] text-black font-normal md:text-[21px]/[25.2px] md:tracking-[-1.26px]">
                            @eco_platform
                        </p>
                    </div>
                    <div className="p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] gap-6 flex flex-row justify-start items-center">
                        <div className="size-16 rounded-full bg-[#EDEDED] flex items-center justify-center">
                            <img src="./Images/icons/twitter.svg" alt="follow and reach us on X" className='size-14 md:size-[70px] shrink-0' />
                        </div>
                        <p className="text-[19px]/[19px] tracking-[-1.14px] text-black font-normal md:text-[21px]/[25.2px] md:tracking-[-1.26px]">
                            @eco_platform
                        </p>
                    </div>
                    <div className="p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] gap-6 flex flex-row justify-start items-center">
                        <div className="size-16 rounded-full bg-[#EDEDED] flex items-center justify-center">
                            <img src="./Images/icons/telegram.svg" alt="join our telegram community chat" className='size-16 md:size-20 shrink-0'/>
                        </div>
                        <p className="text-[19px]/[19px] tracking-[-1.14px] text-black font-normal md:text-[21px]/[25.2px] md:tracking-[-1.26px]">
                            Join Community Chat
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-14 px-8 rounded-[24px] bg-[#161814] flex flex-col gap-4 items-center justify-center md:p-14">
                <h2 className="text-[40px]/[40px] tracking-[-2.4px] font-normal text-white text-center">
                    Want to Collaborate or List Your Brand?
                </h2>
                <p className="text-[15px]/[22.5px] tracking-[-0.9px] font-normal text-[#999999] text-center">
                    If you’re a sustainable vendor, organization, or educator, we’d love to partner with you
                </p>
                <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:justify-center">
                    <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full sm:w-fit" aria-label="Join the movement">
                        <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                            Apply to List Your Business
                        </span>
                        <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
                    </button>
                    <button className='flex gap-2 justify-center items-center rounded-[8px] bg-transparent border border-white px-5 h-12 cursor-pointer w-full sm:w-fit'>
                        <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                            Propose a Collaboration
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
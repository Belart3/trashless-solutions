import React from 'react'
import footerNav from '@/data/footerNav.json'


const Footer = () => {
    return (
        <footer className='bg-[#161814] w-full'>
            <div className="flex flex-col gap-5 px-4 pt-16 md:px-14 lg:mx-auto lg:max-w-[1440px] lg:px-14 lg:pt-16">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <h2 className="text-[40px]/[40px] tracking-[-2.4px] font-normal text-white text-center">
                        Ready to Live Greener?
                    </h2>
                    <p className="text-[15px]/[22.5px] tracking-[-0.9px] font-normal text-[#999999] text-center max-w-[600px]">
                        Create your free account today and start tracking your impact, discovering eco-friendly businesses, and connecting with changemakers near you.
                    </p>
                    <a href="http://test.l4lh6qmixi-ez94do5je6mr.p.temp-site.link/register">
                        <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-10 cursor-pointer" aria-label="Join the movement">
                            <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                                join the movement
                            </span>
                            <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />                                  
                        </button>
                    </a>
                </div>
                <div className="h-[250px] w-full bg-bottom bg-contain bg-no-repeat bg-[url(/Images/green-earth.webp)]"></div>
                <div className="flex flex-col gap-5 md:flex-row md:gap-0">
                    <div className="border-t border-[#333333] flex flex-col gap-5 pt-5 md:flex-1 md:border-l md:border-l-[#333333] first-of-type:border-l-0 md:border-y md:py-10 md:px-5">
                        <h3 className='text-[10px]/[12px] font-bold tracking-[-0.6px] text-[#999999] uppercase text-start sm:text-center md:text-start'>
                            company logo
                        </h3>
                        <a href="" className="text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-white capitalize">
                            About Trashless Solutions
                        </a>
                        <a href="/donation">
                            <button className='flex gap-2 justify-center items-center rounded-[8px] bg-transparent px-5 h-12 cursor-pointer text-[#169B4C] border border-[#169B4C] capitalize' aria-label='Make a donation'>
                                make a donation
                                <img src="/Images/icons/green-right-arrow.svg" alt="" />
                            </button>
                        </a>
                    </div>
                    {
                        footerNav.map((item,index) => (
                            <div className="border-t border-[#333333] flex flex-col gap-5 pt-5 md:flex-1 md:border-l md:border-l-[#333333] first-of-type:border-l-0 md:border-y md:py-10 md:px-5" key={index}>
                                <h3 className='text-[10px]/[12px] font-bold tracking-[-0.6px] text-[#999999] uppercase text-start sm:text-center md:text-start'>
                                    {item.title}
                                </h3>
                                <div className="flex flex-col gap-3 items-start justify-center sm:items-center md:items-start">
                                    {
                                        item.links.map((link, idx) => (
                                            <a href={link.url} className="text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-white capitalize" key={idx}>
                                                {link.name}
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="border-y border-[#333333] pt-[15px] px-[6px] md:border-t-0">
                    <div className="h-[75px] w-full bg-bottom bg-contain bg-no-repeat bg-[url(/Images/trashless-solutions.webp)] md:h-[180px]"></div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-center py-[30px] sm:items-center md:items-start md:flex-row-reverse md:justify-between">
                    <div className="flex flex-col gap-6 items-start justify-center sm:items-center md:items-start md:flex-row md:gap-6">
                        <a href="" className="text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-[#CCCCCC] capitalize">
                            Privacy Policy
                        </a>
                        <a href="" className="text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-[#CCCCCC] capitalize">
                            Terms of Service
                        </a>
                    </div>
                    <p className="text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-[#CCCCCC] capitalize">
                        © 2025 trashless solutions.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
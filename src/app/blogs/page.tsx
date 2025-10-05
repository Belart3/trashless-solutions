'use client'
import React, { useState } from 'react'
import resourceHub from '@/data/resourceHub.json'
import BlogCard from '@/components/BlogCard'

const resourceCategories = [
    "All",
    "blogs",
    "guides",
    "videos",
    "school program",
]

const page = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [itemsToShow, setItemsToShow] = useState(6);
    const toggleFilter = (filter: string) => {
        if (filter) {
            setActiveFilter(filter);
        }
    }
    return (
        <div className='mx-4 md:mx-14 lg:mx-auto lg:px-14 lg:max-w-[1440px] mt-8 flex flex-col gap-16 mb-16 lg:mt-16'>
            {/* learn to live sustainably */}
            <div className="flex flex-col gap-5 items-start justify-center md:flex-row md:gap-20 md:items-end">
                <h1 className="text-[40px]/[40px] font-normal tracking-[-2.4px] text-black md:text-[48px]/[57.6px] md:tracking-[-2.88px] lg:shrink-0">Learn to Live Sustainably</h1>
                <p className="text-[#666666] text-[15px]/[22.5px] tracking-[-0.9px] font-normal md:text-[16px]/[24px] md:tracking-[-0.96px]">
                    Discover practical guides, tutorials, and tips to help you reduce waste, shop responsibly, and embrace a green lifestyle — whether you're just starting or going full zero-waste.
                </p>
            </div>
            {/* top content this week */}
            <div className="flex flex-col gap-8 items-start">
                <div className="w-full h-px bg-[#E6E6E6]"></div>
                <h2 className="text-[26px]/[26px] font-normal tracking-[-1.56px] text-black">
                    Top Contents this week
                </h2>
                <div className="flex flex-col gap-4 w-full sm:grid sm:grid-cols-3 lg:gap-6">
                    {
                        resourceHub.slice(0, 3).map((item,index) => (
                        <BlogCard image={item.image} type={item.type} title={item.title} subtitle={item.subtitle} key={index} />
                        ))
                    }
                </div>
                <div className="w-full h-px bg-[#E6E6E6]"></div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                    {
                        resourceCategories.map((category, index) => (
                            <button className={`px-5 h-10 flex items-center justify-center rounded-[32px] border  w-fit capitalize text-[15px]/[15px] font-medium tracking-[-0.9px] text-center text-[#169B4C] hover:bg-[#E8F5ED] hover:border-transparent hover:text-[#169B4C] cursor-pointer lg:text-[16px]/[16px] lg:tracking-[-0.96px] transition-all ease-linear duration-300 ${activeFilter.includes(category.toLowerCase()) ? 'bg-[#E8F5ED] border-[#169B4C] text-[#169B4C]' : 'border-[#E6E6E6] text-[#666666]'}`} key={index}  
                                onClick={
                                    () => {
                                        toggleFilter(category.toLowerCase())
                                    }
                                } 
                            >
                                {category}
                            </button>  
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 lg:gap-6">
                    {
                        resourceHub.filter((item) => {
                            if (activeFilter === 'all') {
                                return true;
                            } else {
                                return item.category.toLowerCase() === activeFilter.toLowerCase();
                            }
                        } ).slice(0, itemsToShow).map((item,index) => (
                            <BlogCard image={item.image} type={item.category} title={item.title} subtitle={item.subtitle} key={index} />
                        ))
                    }
                </div>
                <button className="flex justify-center items-center rounded-[8px] bg-transparent px-5 h-12 cursor-pointer border border-[#169B4C] w-full text-[#169B4C] text-[15px]/[15px] tracking-[-0.9px] font-medium capitalize md:w-fit sm:w-fit shrink-0 sm:mx-auto" aria-label="view full directory" onClick={() => setItemsToShow(itemsToShow + 3)}>
                    load more content
                </button>
            </div>
        </div>
    )
}

export default page
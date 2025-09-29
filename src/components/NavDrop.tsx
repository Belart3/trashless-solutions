'use state'
import React, { useState } from 'react'
import resourceHub from '@/data/resourceHub.json'

type Props = {
    title: string,
    menu: {
        name: string,
        href:  string
    }[]
}

const NavDrop = (props: Props) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [activeDrop, setActiveDrop] = useState('');
    const randomBlog = resourceHub[Math.floor((Math.random()*resourceHub.length))]
    // const handleDropDown = () => {
    //     setActiveDrop(props.title)
    //     activeDrop === props.title ? setIsOpen(!isOpen) : null
    // }
    return (
        <div className='relative group/ctn !h-[88px] flex items-center cursor-pointer'>
            <button className='flex flex-row gap-2 items-center justify-center cursor-pointer shrink-0 group px-2 xl:px-4'>
                <span className={`text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize text-[#999999] group-hover/ctn:text-[#169B4C] transition-all duration-150 ease-in-out`}>{props.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none" className={`translate-y-1/4 transition-all duration-150 ease-in-out group-hover/ctn:rotate-[180deg]`}>
                    <path d="M9.5 1.00003C9.5 1.00003 6.55407 5 5.5 5C4.44587 5 1.5 1 1.5 1" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className='group-hover/ctn:stroke-[#169B4C] transition-all duration-150 ease-in-out'/>
                </svg>
            </button>
            <div className={`p-5 rounded-[12px] border border-[#E6E6E6] bg-white hidden flex-col gap-6 absolute top-[100%] -translate-x-1/3 group-hover/ctn:!flex`}>
                <div className="flex flex-col gap-3 w-full">
                    <span className='text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize text-[#999999] group-hover:text-[#169B4C] transition-all duration-150 ease-in-out'>{props.title}</span>
                    <div className="w-full h-px bg-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-row gap-10 items-start justify-center">
                    <div className="flex flex-col gap-[30px] min-w-[120px]">
                        {
                            props.menu.map((resource) => (
                                <a href={resource.href} className="text-[16px]/[16px] font-medium tracking-[-0.96px] capitalize text-black hover:text-[#169B4C] transition-all duration-150 ease-in-out shrink-0">{resource.name}</a>
                            ))
                        }
                    </div>
                    <a href=''>
                        <div className="flex flex-col p-[7px] rounded-[12px] gap-2 border border-[#E6E6E6] bg-[#F5F7FA] shrink-0 w-[200px]">
                            <div className="flex items-start justify-start rounded-[8px] p-3 h-[150px] bg-cover bg-center bg-no-repeat w-full bg-[#F5F7FA]" style={{backgroundImage: `url(${randomBlog.image})`}}>
                            </div>
                            <div className="flex flex-col gap-1 px-2">
                                <h3 className="text-black text-[14px]/[21px] font-normal tracking-[-0.84px]">
                                    {randomBlog.title}
                                </h3>
                                <p className="text-[15px]/[22.5px] text-[#666666] font-normal tracking-[-0.9px] md:text-[14px]/[21px] md:tracking-[-0.84px]">
                                    {randomBlog.subtitle}
                                </p>
                            </div>                  
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavDrop
'use client'
import React, { useState} from 'react'
import { Turn as Hamburger } from 'hamburger-react'

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className="mx-4 md:mx-14 lg:px-14 lg:mx-auto lg:max-w-[1440px]">
            <div className='flex items-center justify-between py-3 px-4 border border-[#E6E6E6] rounded-[8px] bg-white mt-[50px] mb-[10px] md:mt-[64px]'>
                <p>logo</p>
                {/* nav kinks container */}
                <div className="hidden md:flex items-center justify-center gap-8">
                    <a href="#" className="text-[#999999] text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize">about</a>
                    <a href="#" className="text-[#999999] text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize">community</a>
                    <a href="#" className="text-[#999999] text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize">events</a>
                    <a href="#" className="text-[#999999] text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize">biz directory</a>
                    <a href="#" className="text-[#999999] text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize">market place</a>
                </div>
                {/* login container */}
                <div className="hidden md:flex items-center justify-center gap-4">
                    <a href="#" className="text-[#000000] text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize">login</a>
                    <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-10 cursor-pointer" aria-label="Join the movement">
                        <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                            join the movement
                        </span>
                        <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
                    </button>
                </div>
                {/* hamburger container */}
                <div className="flex md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
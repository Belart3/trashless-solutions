'use client'
import React, { useState} from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import AdBanner from './AdBanner'
import { usePathname } from 'next/navigation'
import navLinks from '@/data/navLinks.json'
import menu from '@/data/navMenu.json'
import NavMenu from './NavMenu'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [showBanner, setShowBanner] = useState(true);
    const handleCloseBanner = () => {
        setShowBanner(false);
    }
    const path = usePathname();

    return (
        <div className={`${showBanner ? 'pt-[134px] md:pt-[164px]' : 'pt-[94px] md:pt-[104px]'}`}>
            <AdBanner showBanner={showBanner} handleCloseBanner={handleCloseBanner} />
            <nav className={`mx-4 md:mx-14 lg:px-14 lg:mx-auto lg:max-w-[1440px] transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-[99] ${showBanner ? 'mt-[50px] md:mt-[80px]' : 'mt-[10px] md:mt-[20px]' }`}>
                <div className={`flex flex-col gap-[10px] rounded-[8px] border border-[#E6E6E6] bg-white  transition-all duration-150 ease-in-out`}>
                    <div className={`flex items-center justify-between py-3 px-4 rounded-[8px]`}>
                        <a href="/" className="text-black text-[30px]/[36px] font-normal tracking-[-1.8px] uppercase">
                            <img src="./Images/logo.webp" alt="trashless solutions logo" className='w-[55px] h-[44px] lg:w-[70px] lg:h-[56px]' />
                        </a>
                        {/* nav kinks container */}
                        <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-8">
                            {
                                navLinks.map((link, index) => (
                                    <a href={link.href} className={`text-[16px]/[16px] font-normal tracking-[-0.96px] hover:text-[#169B4C] capitalize ${path.toLowerCase() === link.href.toLowerCase() ? 'text-[#169B4C]' : 'text-[#999999]'}`} key={index}>
                                        {link.name}
                                    </a>
                                ))
                            }
                            {
                                menu.map((menuItem, index) => (
                                    <NavMenu title={menuItem.title} menu={menuItem.menu} key={index} />
                                ))
                            }
                        </div>
                        {/* login container */}
                        <div className="hidden lg:flex items-center justify-center gap-4">
                            <a href="#" className="text-[#000000] text-[16px]/[16px] font-normal tracking-[-0.96px] capitalize">login</a>
                            <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer" aria-label="Join the movement">
                                <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                                    join the movement
                                </span>
                                <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
                            </button>
                        </div>
                        {/* hamburger container */}
                        <div className="flex lg:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
                    <div className={`${isOpen ? 'flex' : 'hidden'} lg:!hidden flex-col gap-3 items-center justify-center pb-5`}>
                        {
                            navLinks.map((link, index) => (
                                <a href={link.href} className={`p-2.5 text-center text-[15px]/[15px] font-medium tracking-[-0.9px] w-full capitalize ${path.toLowerCase() === link.href.toLowerCase() ? 'text-[#169B4C]' : ' text-black'}`} key={index}>
                                    {link.name}
                                </a>
                            ))
                        }
                        <a href='/blogs' className={`p-2.5 text-center text-[15px]/[15px] font-medium tracking-[-0.9px] w-full capitalize ${path.toLowerCase() === '/blogs' ? 'text-[#169B4C]' : ' text-black'}`}>
                            resources
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
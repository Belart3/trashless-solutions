'use client'
import React from 'react'
import eventFilters from '@/data/eventFilters.json'
import events from '@/data/events.json'
import { useState } from 'react'
import NotFound from '@/components/NotFound'

type FilterType = 'event' | 'location' | 'type';

const page = () => {
    const [activeCategory, setActiveCategory] = useState<FilterType[]>(['event','location','type'])
    const [activeEvent, setActiveEvent] = useState('all')
    const [activeLocation, setActiveLocation] = useState('all')
    const [activeType, setActiveType] = useState('all')
    const [activeFilter, setActiveFilter] = useState<Record<FilterType, string>>({
        event: 'all',
        location: 'all',
        type: 'all'
    })
    const [contentToDisplay, setContentToDisplay] = useState(3)
    const toggleFilter = (filter: string, type: FilterType) => {
        if (type === 'event') {
            setActiveEvent(filter.toLowerCase())
            setActiveFilter(prev => ({
                ...prev,
                event: filter.toLowerCase()
            }))
        } else if (type === 'location') {
            setActiveLocation(filter.toLowerCase())
            setActiveFilter(prev => ({
                ...prev,
                location: filter.toLowerCase()
            }))
        } else if (type === 'type') {
            setActiveType(filter.toLowerCase())
            setActiveFilter(prev => ({
                ...prev,
                type: filter.toLowerCase()
            }))
        }
    }
    const filteredEvents = events.filter((event) => {
        if (activeEvent === 'all' && activeLocation === 'all' && activeType === 'all') {
            return true;
        }
        
        const matchesEvent = activeEvent === 'all' || event.meta.event === activeEvent;
        const matchesLocation = activeLocation === 'all' || event.meta.location === activeLocation;
        const matchesType = activeType === 'all' || event.meta.type === activeType;
        return matchesEvent && matchesLocation && matchesType;
    })
    return (
        <div className='mx-4 md:mx-14 lg:mx-auto lg:px-14 lg:max-w-[1440px]'>
            <header className='h-fit w-full py-16 px-4 flex flex-col items-center justify-center gap-10 rounded-[8px] bg-[#169B4C] mt-2.5 mb-16 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url(/Images/saidu-peter.webp)] bg-cover bg-no-repeat bg-center md:h-[450px] md:px-14 xl:h-[460px] lg:mt-5 lg:mb-[104px]'>
                <h1 className="text-[40px]/[40px] tracking-[-2.4px] text-center font-white font-normal text-white capitalize md:text-[53px]/[53px] xl:text-[73px]/[87.6px] xl:tracking-[-4.38px]">
                    Take Action. <br /> Join Local Sustainability Events.
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                    <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full md:shrink-0 md:w-fit" aria-label="Join the movement">
                        <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                            View Upcoming Events
                        </span>
                        <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
                    </button>
                    <button className="flex gap-2 justify-center items-center rounded-[8px] bg-transparent border border-[#E6E6E6] px-5 h-12 cursor-pointer w-full md:w-fit md:shrink-0" aria-label="Join the movement">
                        <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                            Host Your Own Event
                        </span>
                    </button>
                </div>
            </header>
            <main className="flex flex-col gap-16 mb-16 lg:mb-[104px] lg:gap-[104px]">
                {/*  */}
                <div className="flex flex-col gap-16">
                    {/* filter controls/buttons */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row items-center justify-start gap-2 w-fit">
                            <img src="./Images/icons/filter.svg" alt="filter icon" className='size-6'/>
                            <p className="text-[19px]/[19px] tracking-[-1.14px] text-black capitalize">Filters</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {
                                eventFilters.map((filterCategory, index) => (
                                    <div className="flex flex-col gap-3" key={index}>
                                        <p className="capitalize text-[15px]/[15px] font-normal tracking-[-0.9px] text-black">
                                            by {filterCategory.type}
                                        </p>
                                        <div className="flex flex-row flex-wrap gap-3">
                                            {
                                                filterCategory.categories.map((filter, idx) => (
                                                    <button className={`px-5 h-10 flex items-center justify-center rounded-[32px] border  w-fit capitalize text-[15px]/[15px] font-medium tracking-[-0.9px] text-center text-[#169B4C] hover:bg-[#E8F5ED] hover:border-transparent hover:text-[#169B4C] cursor-pointer lg:text-[16px]/[16px] lg:tracking-[-0.96px] transition-all ease-linear duration-300 ${activeFilter[filterCategory.type as FilterType] === filter.toLowerCase() ? 'bg-[#E8F5ED] border-[#169B4C] text-[#169B4C]' : 'border-[#E6E6E6] text-[#666666]'}`} key={idx}  
                                                        onClick={
                                                            () => {
                                                                toggleFilter(filter, filterCategory.type as FilterType)
                                                            }
                                                        } 
                                                    >
                                                        {filter}
                                                    </button>    
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="border-t border-[#E6E6E6] pt-8 flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:flex lg:flex-col lg:items-center lg:justify-center">
                        {
                            filteredEvents.length > 0 ?
                            filteredEvents.slice(0, contentToDisplay).map((event, index) => (
                                <div className="p-2.5 rounded-[12px] flex flex-col gap-6 border border-[#E6E6E6] bg-[#F5F7FA] lg:flex-row lg:p-5 lg:gap-10" key={index}>
                                    <div className="rounded-[8px] w-full h-[230px] bg-cover bg-center bg-no-repeat lg:w-[300px] lg:h-[280px] lg:shrink-0" style={{backgroundImage: `url(${event.image})`}}></div>
                                    <div className="flex flex-col gap-5 items-start justify-center">
                                        <div className="flex flex-col gap-2 items-start justify-center lg:flex-row lg:gap-3">
                                            <div className="px-5 flex flex-row gap-2 rounded-[32px] items-center justify-center border border-[#E6E6E6] text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-center text-black w-fit h-10">
                                                <img src="./Images/icons/calendar.svg" alt="calendar icon" className='size-6'/>
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="px-5 flex flex-row gap-2 rounded-[32px] items-center justify-center border border-[#E6E6E6] text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-center text-black w-fit h-10">
                                                <img src="./Images/icons/location.svg" alt="calendar icon" className='size-6'/>
                                                <span className='capitalize'>{event.meta.location + ' - ' + event.meta.type}</span>
                                            </div>
                                        </div>
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
                            <NotFound label='no events to show'/>
                        }
                        </div>
                        {
                            filteredEvents.length > 0 ?
                            <button className="border border-[#E6E6E6] rounded-[8px] px-5 h-12 w-full text-[15px]/[15px] tracking-[-0.9px] capitalize font-medium text-[#169B4C] lg:w-fit lg:text-[16px]/[16px] lg:tracking-[-0.96px] place-self-center cursor-pointer" aria-label="load more events" onClick={() => setContentToDisplay(contentToDisplay + 3)}>
                                load more events
                            </button>
                            : null
                        }
                        <div className="h-px w-full bg-[#E6E6E6]"></div>
                    </div>
                </div>
                {/* Organizing a green event? */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-start lg:gap-20">
                    <div className="flex flex-col gap-3 items-start justify-center lg:w-[40%]">
                        <div className="px-5 py-1 rounded-[24px] flex justify-center items-center bg-[#E8F5ED80] w-fit">
                            <span className="capitalize text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-[#169B4C] md:text-[14px]/[21px] md:tracking-[-0.84px]">
                                organizing a green event?
                            </span>
                        </div>
                        <p className="text-[26px]/[26px] font-normal tracking-[-1.56px] text-black text-start md:text-[30px]/[36px] md:tracking-[-1.8px]">
                            Are you a community leader, brand, or student organizing a sustainability-related event? Submit it to our platform and reach eco-conscious people across Nigeria.
                        </p>
                    </div>
                    <div className="py-5 px-2.5 rounded-[12px] bg-white flex flex-col items-start justify-center gap-5 lg:w-[60%] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] lg:p-10">
                        <h2 className="text-[26px]/[26px] font-normal tracking-[-1.56px] text-[#169B4C] capitalize md:text-[30px]/[36px] md:tracking-[-1.8px]">
                            green event form
                        </h2>
                        <div className="w-full h-px bg-[#E6E6E6]"></div>
                        <form className='flex flex-col gap-5 w-full'>
                            {/* event name input */}
                            <input type="text" className='py-2.5 px-4 rounded-[8px] h-12 capitalize placeholder-shown:text-[15px]/[22.5px] placeholder-shown:tracking-[-0.9px] placeholder-shown:text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]' placeholder='event name' name='event name' />
                            {/* event tags input */}
                            <input type="text" className='py-2.5 px-4 rounded-[8px] h-12 capitalize placeholder-shown:text-[15px]/[22.5px] placeholder-shown:tracking-[-0.9px] placeholder-shown:text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]' placeholder='event tags' name='event tags' />
                            {/* date */}
                            <input type="text" className='py-2.5 px-4 rounded-[8px] h-12 capitalize placeholder-shown:text-[15px]/[22.5px] placeholder-shown:tracking-[-0.9px] placeholder-shown:text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]' placeholder='date' name='date' />
                            {/* time */}
                            <input type="text" className='py-2.5 px-4 rounded-[8px] h-12 capitalize placeholder-shown:text-[15px]/[22.5px] placeholder-shown:tracking-[-0.9px] placeholder-shown:text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]' placeholder='time' name='time' />
                            {/* location/virtual link */}
                            <input type="text" className='py-2.5 px-4 rounded-[8px] h-12 capitalize placeholder-shown:text-[15px]/[22.5px] placeholder-shown:tracking-[-0.9px] placeholder-shown:text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]' placeholder='location/virtual link' name='location/virtual link' />
                            {/* organizer name */}
                            <input type="text" className='py-2.5 px-4 rounded-[8px] h-12 capitalize placeholder-shown:text-[15px]/[22.5px] placeholder-shown:tracking-[-0.9px] placeholder-shown:text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]' placeholder='organizer name' name='organizer name' />
                            {/* event description */}
                            <textarea className='py-2.5 px-4 rounded-[8px] h-[140px] capitalize placeholder-shown:text-[15px]/[22.5px] placeholder-shown:tracking-[-0.9px] placeholder-shown:text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]' placeholder='event description' name='event description' />
                            {/* upload event image */}
                            <input type="file" className='hidden' name='uploadEventImage' id='uploadEventImage' />
                            <label htmlFor="uploadEventImage" className='py-2.5 px-4 rounded-[8px] h-12 capitalize text-[15px]/[22.5px] tracking-[-0.9px] text-[#666666] border border-[#E6E6E6] cursor-pointer md:text-[16px]/[24px] md:tracking-[-0.96px]'>upload event image</label>
                            <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full md:w-fit" aria-label="submit form">
                                <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                                    submit
                                </span>
                                <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page
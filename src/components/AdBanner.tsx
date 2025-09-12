'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import ads from '@/data/ads.json'


type Props = {
    showBanner?: boolean;
    handleCloseBanner?: () => void;
}

const AdBanner = (props: Props) => {
    return (
        <div className="w-full h-10 bg-[#0C1A2D] px-4 py-2.5 flex items-center justify-between gap-5 fixed transition-all ease-linear duration-1000 md:h-11 md:px-14 z-50" style={{ top: props.showBanner ? '0%' : '-20%' }}>
            <Marquee
                gradient
                gradientColor='#0C1A2D'
                gradientWidth={50}
                speed={50}
                style={{ whiteSpace: 'nowrap' }}
                pauseOnHover={true}
                className="text-white font-medium text-sm md:text-base"
            >
                {
                    ads.map((ad, index) => (
                        <p className='text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-white me-10 md:text-[16px]/[24px] md:tracking-[-0.96px]' key={index}>
                            {ad.name} - 
                            <span className='font-bold'> {ad.price} </span>
                            per {ad.unit}
                        </p>
                    ))
                }
            </Marquee>
            <button className='outline-none rounded-full cursor-pointer' onClick={props.handleCloseBanner} aria-label="Close advertisement banner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.7062 10.129L9.85351 15.9816L8.79285 14.921L14.6455 9.06836L15.7062 10.129Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.84971 9.06641L15.7063 14.9241L14.6455 15.9847L8.78894 10.1269L9.84971 9.06641Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.25 12.5352C2.25 7.01231 6.72715 2.53516 12.25 2.53516C17.7728 2.53516 22.25 7.01231 22.25 12.5352C22.25 18.058 17.7728 22.5352 12.25 22.5352C6.72715 22.5352 2.25 18.058 2.25 12.5352ZM12.25 4.03516C7.55558 4.03516 3.75 7.84074 3.75 12.5352C3.75 17.2296 7.55558 21.0352 12.25 21.0352C16.9444 21.0352 20.75 17.2296 20.75 12.5352C20.75 7.84074 16.9444 4.03516 12.25 4.03516Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}

export default AdBanner
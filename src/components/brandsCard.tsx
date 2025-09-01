import React from 'react'
import { SwiperSlide } from 'swiper/react'

type Props = {
    logo: string;
    title: string;
    description: string;
}

const brandsCard = (props: Props) => {
    return (
        <SwiperSlide className="flex flex-col p-5 rounded-[12px] border border-[#333333] bg-[#FFFFFF12]">
            <img src={props.logo} alt={props.title} className="h-7 w-20" />
            <div className="rounded-[8px] h-[230px] lg:h-[320px] bg-cover bg-center bg-no-repeat bg-[url(/Images/green-box-nigeria.webp)] my-5"></div>
            <div className="flex flex-col gap-2 justify-center items-start">
            <h3 className="text-white text-[19px]/[19px] font-normal tracking-[-1.14px]">
                {props.title}
            </h3>
            <p className="text-[13px]/[19.5px] font-normal tracking-[-0.78px] text-[#999999]">
                {props.description}
            </p>
            </div>
        </SwiperSlide>
    )
}

export default brandsCard
import React from 'react'

type Props = {
    icon: string;
    title: string;
    subtitle: string;
}

const ctaCard = (props: Props) => {
    return (
        <div className="flex flex-col gap-8 p-5 rounded-[8px] border border-[#E6E6E6] bg-[#F5F7FA] lg:flex-1 lg:gap-14">
            <div className="bg-[#EDEDED] rounded-full p-2.5 h-fit w-fit lg:p-3">
                <div className="bg-white rounded-full p-2.5 lg:p-3">
                <img src={props.icon} alt={props.title} />
                </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-center">
                <h3 className="text-black text-[19px]/[19px] font-normal tracking-[-1.14px] text-start lg:text-[21px]/[25.2px] lg:tracking-[-1.26px]">
                {props.title}
                </h3>
                <p className="text-[15px]/[22.5px] text-[#666666] font-normal tracking-[-0.9px] text-start lg:text-[16px]/[24px] lg:tracking-[-0.96px]">
                {props.subtitle}
                </p>
            </div>
        </div>
    )
}

export default ctaCard
import React from 'react'
import testimonials from "@/data/testimonials.json";

type Props = {}

const MobileTestimonials = (props: Props) => {
    return (
        <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
                {
                    testimonials.map((item, index) => (
                    <div className="py-5 px-2.5 rounded-[12px] border border-[#E6E6E6] bg-[#F5F7FA]" key={index}>
                        <div className="flex flex-col gap-5 items-start">
                        <div className="rounded-[24px] py-1 px-5 bg-[#EDEDED]">
                            <span className="text-[13px]/[19.5px] tracking-[-0.78px] text-black">{item.type}</span>
                        </div>
                        <div className="h-[320px] w-full rounded-[8px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${item.image})`}}></div>
                        <div className="flex flex-col justify-between items-start">
                            <div className="flex flex-col justify-center items-start gap-10">
                            <p className="text-[19px]/[19px] font-normal tracking-[-1.14px] text-black">
                                {item.title}
                            </p>
                            <p className="text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-black capitalize">
                                – {item.name}
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))
                }
                </div>
    )
}

export default MobileTestimonials
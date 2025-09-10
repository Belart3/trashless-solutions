import React from 'react'

type Props = {
    image: string;
    type: string;
    title: string;
    subtitle: string;
    category?: string;
}

const BlogCard = (props: Props) => {
    return (
        <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-start justify-start rounded-[8px] p-3 h-[230px] bg-cover bg-center bg-no-repeat md:h-[310px] w-full bg-[#F5F7FA]" style={{backgroundImage: `url(${props.image})`}}>
                <div className="flex items-center justify-center rounded-[24px] py-1 px-5 backdrop-blur-[2px] bg-[#FFFFFF33] border border-[#E6E6E64D]">
                    <span className="text-[13px]/[19.5px] font-normal text-white tracking-[-0.78px] capitalize md:text-[14px]/[21px] md:tracking-[-0.84px]">{props.type}</span>
                </div>
            </div>
            {
                props.category &&
                <div className="w-fit rounded-[24px] py-1 px-5 justify-center items-center bg-[#E8F5ED80] hidden md:block">
                    <span className="text-[13px]/[19.5px] font-normal text-[#169B4C] tracking-[-0.78px] capitalize md:text-[14px]/[21px] md:tracking-[-0.84px]">{props.category}</span>
                </div>
            }
            <div className="flex flex-col gap-2">
                <h3 className="text-black text-[19px]/[19px] font-normal tracking-[-1.14px] md:text-[21px]/[25px] md:tracking-[-1.26px]">
                    {props.title}
                </h3>
                <p className="text-[15px]/[22.5px] text-[#666666] font-normal tracking-[-0.9px] md:text-[16px]/[24px] md:tracking-[-0.96px]">
                    {props.subtitle}
                </p>
            </div>
        </div>
    )
}

export default BlogCard
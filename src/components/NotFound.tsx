import React from 'react'

type Props = {
    label: string
}

const NotFound = (props: Props) => {
    return (
        <div className="h-[200px] flex items-center justify-center rounded-[12px] px-5 py-0 border border-[#E6E6E6] w-full lg:h-[300px]">
            <p className="text-[15px]/[22.5px] font-normal tracking-[-0.9px] text-[#666666] lg:text-[16px]/[24px] lg:tracking-[-0.96px] capitalize">
                {
                    props.label
                }
            </p>
        </div>
    )
}

export default NotFound
import React, { useState, useRef } from "react";
import testimonials from "@/data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

type Props = {}

const Testimonials = (props: Props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const stepperRef = useRef(null);
    const [activeStepper, setActiveStepper] = useState(0);
    const duration = 3000;

    const onBeforeInit = (swiper) => {
        if (swiper.params.navigation) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        }
    };
    return (
        <div className="hidden lg:flex">
            <Swiper
            slidesPerView={1.3}
            spaceBetween={24}
            className="mySwiper flex flex-col gap-6 md:flex-row flex-1"
            grabCursor={true}
            modules={[Navigation]}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            onBeforeInit={onBeforeInit}
            >
            {
                testimonials.map((item, index) => (
                <SwiperSlide className="p-5 rounded-[12px] border border-[#E6E6E6] bg-[#F5F7FA]" key={index}>
                    <div className="grid grid-cols-[40%_1fr] gap-10">
                    <div className="flex flex-col justify-between items-start">
                        <div className="rounded-[24px] py-1 px-5 bg-[#EDEDED]">
                        <span className="text-[14px]/[21px] tracking-[-0.84px] text-black">{item.type}</span>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-10">
                        <p className="text-[21px]/[25px] font-normal tracking-[-1.26px] text-black">
                            {item.title}
                        </p>
                        <p className="text-[21px]/[25px] font-normal tracking-[-1.26px] text-black capitalize">
                            – {item.name}
                        </p>
                        </div>
                    </div>
                    <div className="h-[500px] rounded-[8px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${item.image})`}}></div>
                    </div>
                </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}

export default Testimonials
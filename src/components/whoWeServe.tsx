"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function WhoWeServe() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
  // 0.3 means: trigger when 30% of section is visible

  return (
    <section
      ref={sectionRef}
      className="bg-black px-4 py-16 flex flex-col gap-16 md:px-14"
    >
      <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-20 lg:mx-auto lg:max-w-[1440px]">
        
        {/* Left Column - Image */}
        <div>
          <div className="bg-[url('/Images/about/leaf.webp')] bg-center bg-cover w-full h-[400px] rounded-[8px] md:h-[500px] lg:h-[706px]" />
        </div>

        {/* Right Column - Text */}
        <motion.div
          className="flex flex-col gap-12 mt-[100px]"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Who We Serve */}
          <div className="flex flex-col gap-14 lg:gap-[65px]">
            <div className="flex flex-col gap-3">
              <div className="flex py-1 px-5 bg-[#E8F5ED26] rounded-full w-fit max-w-[200px] justify-center">
                <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                  Who We Serve
                </h1>
              </div>
              <h2 className="text-[26px] text-white font-normal">
                Built for People Who Care About the Planet
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-[19px]">We're here for:</p>
              <ul className="list-disc list-inside flex flex-col gap-2 text-[#B3B3B3] pl-3">
                <li className="text-[19px]">
                  Individuals transitioning to an eco-friendly lifestyle
                </li>
                <li className="text-[19px]">
                  Environmental activists and advocates
                </li>
                <li className="text-[19px]">
                  Sustainable small business owners
                </li>
                <li className="text-[19px]">
                  Local communities hosting cleanups and recycling drives
                </li>
                <li className="text-[19px]">
                  Students, educators, and eco-conscious creators
                </li>
              </ul>
            </div>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex py-1 px-5 bg-[#E8F5ED26] rounded-full w-fit max-w-[200px] justify-center">
                <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                  Our Vision
                </h1>
              </div>
              <h2 className="text-[26px] text-white font-normal">
                A Greener, More Connected World
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[#B3B3B3] text-[19px]">
                Our vision is a future where sustainability is not just an
                option — it's a lifestyle.
              </p>
              <p className="text-[#B3B3B3] text-[19px]">
                Where local communities work together to restore nature, reduce
                pollution, and make conscious choices that benefit generations
                to come.
              </p>
              <p className="text-[#B3B3B3] text-[19px]">
                We aim to make eco-living accessible, practical, and rewarding
                for all.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
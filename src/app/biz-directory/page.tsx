"use client";

import { useState } from "react";

import filterData from "@/data/filter.json";
import Filter from "@/components/Filter";

import locationData from "@/data/location.json";
import Location from "@/components/Location";

import GreenBoxNigeria from "@/components/GreenBoxNigeria";
import greenBoxNigeriaData from "@/data/greenBoxNigeria.json";

import BusinessSubmissionForm from "@/components/BusinessSubmissionForm";
import businessSubmissionFormData from "@/data/businessSubmissionForm.json";

export default function BizDirectoryPage() {
  // ✅ state for filter + location
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(0);

  // get selected category & location
  const selectedCategory = filterData[selectedFilter]?.title;
  const selectedCity = locationData[selectedLocation]?.title;

  // ✅ filter businesses
  const filteredBusinesses = greenBoxNigeriaData.filter((biz) => {
    const hasCategory =
      selectedCategory === "All" ||
      biz.badges.some(
        (badge) =>
          badge.title.toLowerCase() === selectedCategory.toLowerCase()
      );

    const hasLocation =
      selectedCity === "All" ||
      biz.badges.some(
        (badge) => badge.title.toLowerCase() === selectedCity.toLowerCase()
      );

    return hasCategory && hasLocation;
  });

  return (
    <main>
      <section className="flex flex-col gap-16 lg:mx-auto lg:max-w-[1440px] pb-30">
        {/* HERO SECTION */}
        <section className="px-4 pb-4 md:px-14">
          <div>
            <div className="bg-gray-900 bg-center w-full h-[440px] md:h-[460px] rounded-xl md:px-14 py-16 px-4 flex flex-col gap-10 justify-center items-center">
              <div className="flex flex-col gap-10 items-center">
                <div className="md:max-w-[1216px]">
                  <p className="text-white text-[40px] md:text-[73px] text-center md:leading-[120%] md:tracking-[-4.38px] leading-[100%] tracking-[-2.4px]">
                    Discover Eco-Friendly Businesses In Nigeria
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                  {/* First button */}
                  <button
                    className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-12 cursor-pointer w-full md:w-auto"
                    aria-label="Browse Businesses"
                  >
                    <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                      Browse Businesses
                    </span>
                    <img
                      src="./Images/icons/right-arrow.svg"
                      alt="join the movement today"
                    />
                  </button>

                  {/* Second button */}
                  <button
                    className="flex gap-2 justify-center items-center rounded-[8px] border-white border px-5 h-12 cursor-pointer w-full md:w-auto"
                    aria-label="List Your Business"
                  >
                    <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                      List Your Business
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER SECTION */}
        <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">
          <div className="flex flex-row gap-2">
            <div className="bg-[url('/Images/icons/Filter.svg')] bg-cover bg-center w-6 h-6" />
            <div>
              <h1 className="text-[19px] md:text-[21px] font-medium tracking-[-1.14px] leading-[100%] md:leading-[120%] md:tracking-[-1.26px]">
                Filters
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[15px] md:text-[16px] leading-[150%] tracking-[-0.9px]">
              By Categories
            </h1>
            <div>
              <Filter
                items={filterData}
                selected={selectedFilter}
                onSelect={setSelectedFilter}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[15px] md:text-[16px] leading-[150%] tracking-[-0.9px]">
              By Location
            </h1>
            <Location
              items={locationData}
              selected={selectedLocation}
              onSelect={setSelectedLocation}
            />
          </div>
        </section>

        {/* BUSINESS LISTING */}
        <section className="px-4 pb-4 md:px-14 flex flex-col gap-8">

          <div >
            {filteredBusinesses.length > 0 ? (
              <GreenBoxNigeria items={filteredBusinesses} />
            ) : (

              <div className="flex justify-center items-center rounded-2xl border border-gray-200 md:h-[300px] h-[200px]">
                <p className="text-gray-500 text-center capitalize text-[19px] md:text-[21px]">No events yet</p>
              </div>
            )}
          </div>

        </section>

        {/* BUSINESS SUBMISSION */}
        <section className="px-4 pb-4 md:px-14 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full justify-center items-center w-fit">
              <h1 className="text-[13px] md:text-[14px] text-[#169B4C] text-center whitespace-nowrap md:tracking-[-0.84px] leading-[150%] tracking-[-0.78px]">
                Are You A Sustainable Brand?
              </h1>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:gap-20">
              {/* Selector */}
              <div className="md:w-1/2">
                <h2 className="text-[26px] md:text-[30px] leading-[100%] tracking-[-1.56px] md:leading-[120%] md:tracking-[-1.8px] text-black font-normal">
                  Get featured in our growing directory of eco-friendly
                  businesses in Nigeria. Reach customers who care about the
                  planet and are actively looking to support brands like yours.
                </h2>
              </div>

              {/* Form */}
              <div className="flex-1">
                <BusinessSubmissionForm
                  fields={businessSubmissionFormData}
                  heading="Business Submission Form"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
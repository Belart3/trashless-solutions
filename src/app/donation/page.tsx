"use client"
import { useState } from "react"
import CardItem from "@/components/CardItem"
import whyYourSupportMatters from "@/data/whyYourSupportMatters.json"
import Selector from "@/components/Selector"
import giveOnceOrGiveMonthly from "@/data/giveOnceOrGiveMonthly.json"
import oneTimeDonation from "@/data/oneTimeDonation.json"
import OneTimeForm from "@/components/OneTimeForm"
import Accordion from "@/components/Accordion";
import needHelp from "@/data/needHelp.json"

export default function DonationPage() {
  // Use id for selected state (default to first item’s id)
  const [selected, setSelected] = useState<string | number>(
    giveOnceOrGiveMonthly[0]?.id ?? ""
  )

  // Find the full option object for the current selection
  const selectedOption =
    giveOnceOrGiveMonthly.find((item) => item.id === selected) ??
    giveOnceOrGiveMonthly[0]

  return (
    <main>
      <section className="flex flex-col gap-16 lg:mx-auto lg:max-w-[1440px] pb-20">
        {/* Hero Section */}
        <section className="px-4 pb-4 md:px-14">
          <div className="lg:mx-auto lg:max-w-[1440px] flex flex-col gap-16">
            <div>
              <div className="bg-[url('/Images/discover-eco-friendly-businesses-mobile.webp')] md:bg-[url('/Images/discover-eco-friendly-businesses-desktop.webp')] bg-cover bg-center w-full h-[440px] md:h-[460px] rounded-xl" />
            </div>
          </div>
        </section>

        {/* Why Your Support Matters */}
        <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit justify-center">
              <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                Why Your Support Matters
              </h1>
            </div>

            <h2 className="text-[26px] text-black font-normal max-w-[878px]">
              We’re building a movement — not a company. Your donation helps
              power community-led projects that directly impact our environment
              and people. With your help, we can:
            </h2>

            {/* Cards */}
            <div className="flex flex-col justify-center gap-3 md:grid md:grid-cols-2 lg:flex-row lg:gap-6 md:gap-6">
              {whyYourSupportMatters.map((item) => (
                <CardItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}

        <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">
          <div className="flex flex-col gap-8 md:gap-25">
            <div className="flex flex-col gap-5">
              {/* Heading */}
              <div>
                <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit justify-center">
                  <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                    Your Support Creates Real Impact
                  </h1>
                </div>
              </div>

              <h2 className="text-[26px] text-black font-normal">
                Give Once or Give Monthly — Every Bit Helps
              </h2>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row md:gap-20">
              {/* Selector */}
              <div className="lg:w-1/2">
                <Selector
                  items={giveOnceOrGiveMonthly}
                  selected={selected}
                  onChange={setSelected}
                />
              </div>

              {/* Donation Form (heading updates with selected option) */}
              <div className="flex-1">
                <OneTimeForm
                  fields={oneTimeDonation}
                  heading={selectedOption?.title ?? "Donation Form"}
                />
              </div>
            </div>

          </div>
        </section>


        <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">
          <div className="flex flex-col gap-8 md:gap-25">
            <div className="flex flex-col gap-5">
              {/* Heading */}
              <div>
                <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit justify-center">
                  <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                    Here From Our Members
                  </h1>
                </div>
              </div>

              <h2 className="text-[26px] text-black font-normal">
                    Real Change, Powered by Donors Like You
              </h2>

            </div>

            </div>

        </section>

            <section className="px-4 py-8 flex flex-col gap-16 md:px-14 lg:mx-auto lg:max-w-[1440px]">
                <div className="flex flex-col gap-14 lg:gap-[65px] lg:flex-row lg:flex  lg:mx-auto lg:px-[169px]">

                    <div className="flex flex-col gap-3">

                                <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit justify-center">
                                    <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                                        Need Help?
                                    </h1>
                                </div>

                        <h2 className="text-[26px] text-black font-normal">Frequently Asked Questions</h2>
                    </div>

                    <div>
                        <Accordion items={needHelp} />
                    </div>
                </div>
            </section>
      </section>
    </main>
  )
}
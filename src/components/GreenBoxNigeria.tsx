"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

type Badge = {
  title: string
  icon?: string
}

type CardItem = {
  title: string
  description?: string
  icon?: string
  image?: string
  badges?: Badge[]
  button?: {
    text: string
    icon: string
  }
}

type CardListProps = {
  items: CardItem[]
}

export default function GreenBoxNigeria({ items }: CardListProps) {
  const [showCount, setShowCount] = useState(3)
  const [isMobile, setIsMobile] = useState(true)
  const buttonRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640
      setIsMobile(mobile)
      setShowCount(mobile ? 3 : 6)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleToggle = () => {
    if (showCount >= items.length) {
      setShowCount(isMobile ? 3 : 6)
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
      }, 100)
    } else {
      setShowCount(prev => Math.min(prev + (isMobile ? items.length : 3), items.length))
    }
  }

  const visibleItems = items.slice(0, showCount)

  return (
    <div className="flex flex-col gap-4">
      {/* Cards */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F5F7FA] p-3 rounded-lg flex flex-col gap-4 border border-[#E6E6E6]"
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={`${item.title} logo`}
                width={80}
                height={28}
                className="w-[80px] h-[28px] object-contain"
              />
            )}

            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={230}
                className="w-full h-[230px] object-cover rounded-lg"
              />
            )}

            {item.badges && (
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 border border-[#E6E6E6] rounded-full px-3 py-2 bg-[#F5F7FA] text-black"
                  >
                    {badge.icon && (
                      <Image
                        src={badge.icon}
                        alt={badge.title}
                        width={16}
                        height={16}
                      />
                    )}
                    <span className="text-xs sm:text-sm font-normal text-black">
                      {badge.title}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h2 className="text-[19px] md:text-[21px] font-medium text-black leading-snug">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-[15px] md:text-[14px] text-[#666] leading-[150%]">
                  {item.description}
                </p>
              )}
            </div>

            {item.button && (
              <button className="flex items-center justify-center gap-2 border rounded-md px-4 py-2 bg-white text-[#169B4C] font-medium border-[#169B4C] h-12 hover:bg-[#E8F5ED]">
                <span className="text-[16px]">{item.button.text}</span>
                <Image src={item.button.icon} alt="button icon" width={24} height={24} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div ref={buttonRef} className="flex justify-center mt-4 w-full">
        {items.length > (isMobile ? 3 : 6) && (
          <button
            onClick={handleToggle}
            className="flex items-center justify-center gap-2 border rounded-md px-4 py-2 bg-white text-[#169B4C] font-medium border-[#E6E6E6] h-16 w-full sm:w-auto hover:bg-[#E8F5ED] cursor-pointer"
          >
            <span className="text-[15px] md:text-[14px] text-center">
              {showCount >= items.length ? "Load Less Businesses" : "Load More Businesses"}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
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

export default function CardList({ items }: CardListProps) {
  const [showCount, setShowCount] = useState(3) // default mobile
  const [isMobile, setIsMobile] = useState(true)
  const buttonRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640
      setIsMobile(mobile)
      setShowCount(mobile ? 3 : 6) // mobile shows 3, desktop shows 6 initially
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleToggle = () => {
    if (showCount >= items.length) {
      // Collapse
      setShowCount(isMobile ? 3 : 6)
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        })
      }, 100)
    } else {
      // Expand
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
            className="bg-[#F5F7FA] p-3 rounded-lg flex flex-col gap-4 text-white border border-[#E6E6E6]"
          >
            {/* Brand Icon */}
            {item.icon && (
              <Image
                src={item.icon}
                alt={`${item.title} logo`}
                width={80}
                height={28}
                className="w-[80px] h-[28px] object-contain"
              />
            )}

            {/* Image */}
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={230}
                className="w-full h-[230px] object-cover rounded-lg"
              />
            )}

            {/* Badges */}
            {item.badges && (
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-center gap-2 border border-[#E6E6E6] rounded-full w-fit
                               px-2.5 py-1.5 sm:px-3 sm:py-2 bg-[#F5F7FA] text-black"
                  >
                    {badge.icon && (
                      <Image
                        src={badge.icon}
                        alt={badge.title}
                        width={14}
                        height={14}
                        className="sm:w-[16px] sm:h-[16px]"
                      />
                    )}
                    <span className="text-xs sm:text-sm font-medium">
                      {badge.title}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Title + Description */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[19px] font-semibold text-black">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-[15px] text-[#666]">{item.description}</p>
              )}
            </div>

            {/* Button inside each card */}
            {item.button && (
              <button className="flex flex-row items-center justify-center gap-2 border rounded-md px-4 py-2 bg-[#F5F7FA] text-[#169B4C] font-medium border-[#169B4C] h-12 md:w-fit cursor-pointer hover:bg-[#E8F5ED]">
                <span className="text-[16px] text-center">
                  {item.button.text}
                </span>
                <Image
                  src={item.button.icon}
                  alt="button icon"
                  width={24}
                  height={24}
                />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Load More / Load Less – MOBILE + DESKTOP */}
      <div
        ref={buttonRef}
        className="flex justify-center mt-4 w-full"
      >
        {items.length > (isMobile ? 3 : 6) && (
          <button
            onClick={handleToggle}
            className="flex flex-row items-center justify-center gap-2 border rounded-md px-4 py-2 bg-white text-[#169B4C] font-medium border-[#E6E6E6] h-16 w-full sm:w-auto cursor-pointer hover:bg-[#E8F5ED]"
          >
            <span className="text-[16px]">
              {showCount >= items.length
                ? "Load Less Businesses"
                : "Load More Businesses"}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
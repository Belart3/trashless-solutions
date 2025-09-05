"use client"
import { useState, useRef } from "react"
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
  const [showAll, setShowAll] = useState(false)
  const buttonRef = useRef<HTMLDivElement | null>(null)

  // Items logic: mobile shows 3 or all, tablet+ always shows all
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640

  const visibleItems =
    isMobile && !showAll ? items.slice(0, 3) : items

  const handleToggle = () => {
    if (showAll) {
      // Collapse back → scroll to button position
      setShowAll(false)
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        })
      }, 100)
    } else {
      setShowAll(true)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Cards */}
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-6">
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
                    <span className="text-xs sm:text-sm font-medium">{badge.title}</span>
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
              <button className="flex flex-row items-center justify-center gap-2 border rounded-md px-4 py-2 bg-white text-[#169B4C] font-medium border-[#169B4C] h-16 cursor-pointer hover:bg-[#E8F5ED]">
                <span className="text-[16px]">{item.button.text}</span>
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

      {/* Load More / Load Less – MOBILE ONLY */}
      <div ref={buttonRef} className="sm:hidden flex justify-center mt-4">
        {items.length > 3 && (
          <button
            onClick={handleToggle}
            className="flex flex-row items-center justify-center gap-2 border rounded-md px-4 py-2 bg-white text-[#169B4C] font-medium border-[#E6E6E6] h-16 cursor-pointer hover:bg-[#E8F5ED]"
          >
            <span className="text-[16px]">
              {showAll ? "Load Less Businesses" : "Load More Businesses"}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
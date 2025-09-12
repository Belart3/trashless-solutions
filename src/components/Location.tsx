"use client"

import { useState } from "react"

type LocationProps = {
  items: { title: string }[]
}

export default function Location({ items }: LocationProps) {
  const [selected, setSelected] = useState(0) // default first item

  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => {
        const isSelected = selected === index

        return (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit cursor-pointer transition-colors
              ${
                isSelected
                  ? "border-green-600 bg-[#E8F5ED]"
                  : "border-gray-300 hover:bg-[#E8F5ED]"
              }`}
          >
            <p
              className={`text-[15px] md:text-[16px] text-center font-medium leading-[100%] tracking-[-0.96px]
                ${isSelected ? "text-green-600" : "text-[#666]"}`}
            >
              {item.title}
            </p>
          </button>
        )
      })}
    </div>
  )
}
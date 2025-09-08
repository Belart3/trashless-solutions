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
                  ? "border-green-600 text-green-600 bg-[#E8F5ED]"
                  : "border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-500"
              }`}
          >
            <p className="text-[15px] text-center font-medium">{item.title}</p>
          </button>
        )
      })}
    </div>
  )
}
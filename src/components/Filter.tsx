"use client"

import { useState } from "react"

type FilterProps = {
  items: { title: string }[]
}

export default function Filter({ items }: FilterProps) {
  const [selected, setSelected] = useState(0) // default to first item

  return (
    <div>
      {/* Mobile layout (default) */}
      <div className="flex flex-col gap-3 md:hidden">
        {/* First two items in a row */}
        <div className="flex flex-row gap-3">
          {items.slice(0, 2).map((item, index) => {
            const actualIndex = index // since slice(0,2)
            const isSelected = selected === actualIndex
            return (
              <button
                key={actualIndex}
                onClick={() => setSelected(actualIndex)}
                className={`px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit transition-colors cursor-pointer
                  ${
                    isSelected
                      ? "border-green-600 text-green-600 bg-[#E8F5ED]"
                      : "border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-500"
                  }`}
              >
                <p className="text-[15px] text-center font-medium">
                  {item.title}
                </p>
              </button>
            )
          })}
        </div>

        {/* Rest in a column */}
        <div className="flex flex-col gap-3">
          {items.slice(2).map((item, index) => {
            const actualIndex = index + 2
            const isSelected = selected === actualIndex
            return (
              <button
                key={actualIndex}
                onClick={() => setSelected(actualIndex)}
                className={`px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit transition-colors cursor-pointer
                  ${
                    isSelected
                      ? "border-green-600 text-green-600 bg-[#E8F5ED]"
                      : "border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-500"
                  }`}
              >
                <p className="text-[15px] text-center font-medium">
                  {item.title}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tablet and above → flex row with wrap */}
      <div className="hidden md:flex md:flex-wrap gap-3">
        {items.map((item, index) => {
          const isSelected = selected === index
          return (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit transition-colors cursor-pointer
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
    </div>
  )
}

"use client"
import { useEffect } from "react"

type SelectorItem = {
  id: string | number
  title: string
  description?: string
}

type SelectorProps = {
  items: SelectorItem[]
  selected: string | number
  onChange: (value: string | number) => void
}

export default function Selector({ items, selected, onChange }: SelectorProps) {
  // Ensure the first one is selected by default
  useEffect(() => {
    if (!selected && items.length > 0) {
      onChange(items[0].id)
    }
  }, [selected, items, onChange])

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isSelected = selected === item.id
        return (
          <label
            key={item.id}
            className={`flex items-center gap-3 cursor-pointer py-5 px-2.5 rounded-lg border h-[113px] bg-[#F5F7FA] w-full md:flex-1
              ${isSelected ? "border-[#169B4C]" : "border-[#E6E6E6]"}`}
          >
            {/* Green radio button */}
            <input
              type="radio"
              name="donationType"
              value={item.id}
              checked={isSelected}
              onChange={() => onChange(item.id)}
              className="accent-[#169B4C] w-5 h-5 cursor-pointer"
            />

 {/* Title + optional description */}
            <div className="flex flex-col max-w-[386px]">
              <p className="font-medium text-[19px]">{item.title}</p>
              {item.description && (
                <p className="text-[16px] text-[#666]">{item.description}</p>
              )}
            </div>
          </label>
        )
      })}
    </div>
  )
}


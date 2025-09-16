"use client"

type FilterProps = {
  items: { title: string }[]
  selected: number
  onSelect: (index: number) => void
}

export default function Filter({ items, selected, onSelect }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => {
        const isSelected = selected === index
        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit cursor-pointer transition-colors
          >

          ${

                isSelected
                  ? "border-green-600 text-[#169B4C] bg-[#E8F5ED]"
                  : "border-gray-300 text-[#169B4C] hover:bg-[#E8F5ED]"
              }`}
          >
            <p
              className={`text-[15px]/[100%] md:text-[16px] md:tracking-[-0.96px] tracking-[-0.9px]
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
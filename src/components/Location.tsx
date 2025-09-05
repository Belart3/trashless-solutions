"use client"

type LocationProps = {
  items: { title: string }[]
}

export default function Location({ items }: LocationProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => {
        const isFirst = index === 0

        return (
          <div
            key={index}
            className={`px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit
              ${isFirst ? "border-green-600 text-green-600 bg-[#E8F5ED]" : ""}`}
          >
            <p className="text-[15px] text-center font-medium">{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}
"use client"

type FilterProps = {
  items: { title: string }[]
}

export default function Filter({ items }: FilterProps) {
  return (
    <div>
      {/* Mobile layout (default) */}
      <div className="flex flex-col gap-3 md:hidden">
        {/* First two items in a row */}
        <div className="flex flex-row gap-3">
          {items.slice(0, 2).map((item, index) => {
            const isFirst = index === 0
            return (
              <div
                key={index}
                className={`px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit
                  ${isFirst ? "border-green-600 text-green-600 bg-[#E8F5ED]" : ""}`}
              >
                <p className="text-[15px] text-center font-medium">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>

        {/* Rest in a column */}
        <div className="flex flex-col gap-3">
          {items.slice(2).map((item, index) => (
            <div
              key={index + 2}
              className="px-5 flex h-12 justify-center items-center gap-2 rounded-full border w-fit"
            >
              <p className="text-[15px] text-center font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet and above → flex row with wrap */}
      <div className="hidden md:flex md:flex-wrap gap-3">
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
    </div>
  )
}
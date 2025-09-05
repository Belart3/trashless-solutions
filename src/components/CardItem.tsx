"use client";

interface CardItemProps {
  title: string;
  description: string;
  icon: string;
}

export default function CardItem ({ title, description, icon }: CardItemProps) {
  return (

    <div className="flex flex-col bg-[#F5F7FA] rounded-2xl w-full gap-8 p-5 ">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-[#ededed] flex items-center justify-center ">

            <div className="bg-white rounded-full w-[44.95px] h-[44.95px] flex items-center justify-center p-2">
            <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${icon})` }}
            />
            </div>
        </div>

      {/* Text */}
      <div className=" flex flex-col gap-3">
        <p className="text-[19px] md:text-[20px] leading-tight">{title}</p>
        <p className="text-[15px] text-[#666] leading-relaxed break-words">
          {description}
        </p>
      </div>
    </div>
  );
}
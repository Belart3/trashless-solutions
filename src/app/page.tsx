
export default function Home() {
  return (
    <div className="">
      <header className="mx-4 py-12 px-4 flex flex-col items-start justify-end gap-4 rounded-[12px] bg-linear-to-b from-[#00000000] to-[#000000] lg:h-screen md:h-[600px] h-[400px] md:mx-14 bg-[] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col gap-4 items-start justify-center">
          <div></div>
          <h1 className="text-white text-[40px]/[40px] tracking-[-2.4px] font-normal text-start capitalize">
            Empowering Communities Through Sustainable Living
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-start justify-center">
          <p className="text-[15px]/[22.5px] text-white font-normal tracking-[-0.9px] text-start">
            Join a growing movement of changemakers embracing eco-friendly habits, zero-waste living, and climate-conscious decisions. Access resources, events, and a green business directory tailored for impact.
          </p>
          <div className="flex flex-col gap-4 w-full">
            <button className="flex gap-2 justify-center items-center rounded-[8px] bg-[#169B4C] px-5 h-10 cursor-pointer" aria-label="Join the movement">
              <span className="text-white text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                join the movement
              </span>
              <img src="./Images/icons/right-arrow.svg" alt="join the movement today" />
            </button>
            <button className="flex gap-2 justify-center items-center rounded-[8px] bg-transparent px-5 h-10 cursor-pointer border border-[#169B4C]" aria-label="Explore Eco-Friendly Businesses">
              <span className="text-[#169B4C] text-[15px]/[15px] font-medium tracking-[-0.9px] capitalize">
                Explore Eco-Friendly Businesses
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

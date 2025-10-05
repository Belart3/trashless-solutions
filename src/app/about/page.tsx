import Accordion from "@/components/Accordion";
import whatWeStandFor from "@/data/whatWeStandFor.json"
import WhoWeServe from "@/components/whoWeServe";
import howWeWork from "@/data/howWeWork.json"
import CtaCard from "@/components/ctaCard";

export default function AboutPage() {
    return (
        <main>
            <section className="flex flex-col gap-16 pb-30">
                <section className="lg:mx-auto lg:max-w-[1440px]">
                    <div className="px-4 pb-4 md:px-14 flex flex-col gap-16">
                        <div className="flex flex-col gap-4">
                            <div className=" bg-gray-900 bg-center bg-no-repeat bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url(/Images/sustainability-for-everyone-mobile.webp)] md:bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1)),url(/Images/sustainability-for-everyone.webp)] w-full h-[290px] md:h-[460px] rounded-xl px-4 py-14">
                                <div className="flex flex-col gap-6 justify-center items-center h-full">
                                    <p className="text-white text-[40px] font-normal md:text-[73px]/[87.6px] text-center tracking-[-2.4px] md:leading-[120%] md:tracking-[-4.38px]">
                                        Our Mission: <br />
                                        Sustainability For Everyone
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex md:flex-row md:gap-10 lg:gap-16 lg:max-w-[1045px] md:max-w-[800px] md:mx-auto flex flex-col gap-8">
                        {/* Left section */}
                        <div className="flex flex-col gap-6 w-fit shrink-0">
                            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full  justify-center w-fit">
                                <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap md:tracking-[-0.84px] leading-[150%] tracking-[-0.78px]">
                                    Our Purpose
                                </h1>
                            </div>
                            <h2 className="text-[26px] md:text-[30px]/[36px] text-black font-normal tracking-[-1.56px] md:leading-[120%] md:tracking-[-1.8px]">
                                Why we Exist
                            </h2>
                        </div>
                        {/* Right section */}
                        <div className="flex flex-col gap-4 max-w-[764px]">
                            <p className="text-black text-[26px] md:text-[30px] md:leading-[120%] md:tracking-[-1.8px]">
                                <span className="text-[#999] px-[2px]">
                                    Our platform was created to 
                                </span> 
                                promote sustainable living practices, support eco-conscious businesses, and help individuals reduce their environmental footprint.
                            </p>
                            <p className="text-[#999] text-[26px] md:text-[30px] md:leading-[120%] md:tracking-[-1.8px] tracking-[-1.14px]">
                                By connecting people with local resources, educational content, and impactful events, we empower everyday actions that drive real change.
                            </p>
                        </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            {/* Heading */}
                                <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit max-w-[200px] justify-center">
                                    <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap md:tracking-[-0.84px] leading-[150%] tracking-[-0.78px]">
                                        What We Stand For
                                    </h1>
                                </div>
                            <h2 className="text-[26px] md:text-[30px] text-black font-normal tracking-[-1.56px] leading-[100%] md:leading-[120%] md:tracking-[-1.8px]">
                                Our Core Focus Areas
                            </h2>
                            {/* Cards */}
                            <div className="flex flex-col justify-center gap-3 md:flex-row lg:flex-row lg:gap-6 md:gap-6">
                                {whatWeStandFor.map((index) => (
                                    <CtaCard
                                        key={index.id}
                                        title={index.title}
                                        subtitle={index.subtitle}
                                        icon={index.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <WhoWeServe />
                </section>
                <section className="px-4 py-8 flex flex-col gap-16 md:px-14 lg:mx-auto lg:max-w-[1440px]">
                    <div className="flex flex-col gap-14 lg:gap-[65px] lg:flex-row lg:flex  lg:mx-auto lg:px-[169px]">
                        <div className="flex flex-col gap-3">
                            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit justify-center">
                                <h1 className="text-[13px] md:text-[14px] leading-[150%] tracking-[-0.78px] md:tracking-[-0.84px] text-[#169B4C] text-center whitespace-nowrap">
                                    How We Work
                                </h1>
                            </div>
                            <h2 className="text-[26px] md:text-[30px] text-black font-normal leading-[120%] tracking-[-1.56px] md:tracking-[-1.8px]">We Build Tools That Empower Change</h2>
                        </div>
                        <div className="max-w-[550px]">
                            <Accordion items={howWeWork} />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
import Accordion from "@/components/Accordion";
import whatWeStandFor from "@/data/whatWeStandFor.json"
import CardItem from "@/components/CardItem";
import WhoWeServe from "@/components/whoWeServe";

export default function AboutPage() {
    return (
        <main>
        <section className="flex flex-col gap-16">
            <section className="px-4 pb-4 md:px-14">
                <div className="lg:mx-auto lg:max-w-[1440px] flex flex-col gap-16">

                    <div>
                        <div className="bg-[url('/Images/about/mission.webp')] lg:bg-[url('/Images/about/missionBig.webp')] bg-cover bg-center w-full h-[290px] md:h-[460px] rounded-xl"/>
                    </div>

                    <div className="md:flex md:flex-row md:gap-10 lg:gap-16 lg:max-w-[1045px] md:max-w-[800px] md:mx-auto flex flex-col gap-8">

                    {/* Left section */}
                    <div className="flex flex-col gap-6 w-fit ">
                        <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full  justify-center">
                        <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                            Our Purpose
                        </h1>
                        </div>
                        <h2 className="text-[26px] text-black font-normal">Why we Exist</h2>
                    </div>

                    {/* Right section */}
                    <div className="flex flex-col gap-4 max-w-[550px]">
                        <p className="text-black text-[19px]">
                        <span className="text-[#999]">Our platform was created to</span> promote sustainable living practices, support eco-conscious businesses, and help individuals reduce their environmental footprint.
                        </p>
                        <p className="text-[#999] text-[19px]">
                        By connecting people with local resources, educational content, and impactful events, we empower everyday actions that drive real change.
                        </p>
                    </div>

                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Heading */}
                            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit max-w-[200px] justify-center">
                            <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                                What We Stand For
                            </h1>
                            </div>

                        <h2 className="text-[26px] text-black font-normal">Our Core Focus Areas</h2>

                        {/* Cards */}
                        <div className="flex flex-col justify-center gap-3 md:flex-row lg:flex-row lg:gap-6 md:gap-6">
                            {whatWeStandFor.map((index) => (
                                <CardItem
                                    key={index.id}
                                    title={index.title}
                                    description={index.description}
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
                <div className="flex flex-col gap-14 lg:gap-[65px] lg:grid lg:grid-cols-2  lg:mx-auto lg:px-[169px]">

                    <div className="flex flex-col gap-3">

                                <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-fit max-w-[200px] justify-center">
                                    <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                                        How We Work
                                    </h1>
                                </div>

                        <h2 className="text-[26px] text-black font-normal">We Build Tools That Empower Change</h2>
                    </div>

                    <div>
                        <Accordion />
                    </div>
                </div>
            </section>

        </section>
        </main>
    );
}
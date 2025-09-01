import Accordion from "@/components/Accordion";
import whatWeStandFor from "@/data/whatWeStandFor.json"
import CardItem from "@/components/CardItem";
export default function AboutPage() {
    return (
        <main>
            <section className="px-4 pb-4 md:px-14">
            <div className="lg:mx-auto lg:max-w-[1440px] space-y-16">
                <div>
                    <div className="bg-[url('/Images/about/mission.png')] lg:bg-[url('/Images/about/missionBig.png')] bg-cover bg-center w-full h-[290px] md:h-[460px] rounded-xl"/>
                </div>

                <div className="space-y-8 md:grid md:grid-cols-2 md:gap-5 lg:gap-10 lg:max-w-[1045px] md:max-w-[800px] md:mx-auto">

                    <div className="space-y-4">
                        <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-1/3 justify-center">
                            <h1 className="text-[13px] text-[#169B4C] text-center">Our Purpose</h1>
                        </div>

                        <h2 className="text-[26px] text-black font-normal">Why we Exist</h2>
                    </div>

                    <div className="space-y-4 lg:ml-[-80px] md:ml-[-130px]">

                        <p className="text-black text-[19px]">
                        <span className="text-[#999]"> Our platform was created to</span> promote sustainable living practices, support eco-conscious businesses, and help individuals reduce their environmental footprint.</p>

                        <p className="text-[#999] text-[19px]">
                        By connecting people with local resources, educational content, and impactful events, we empower everyday actions that drive real change.</p>

                    </div>

                </div>

        <div className="space-y-8">
            {/*Heading*/}
            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-1/2 justify-center">
                <h1 className="text-[13px] text-[#169B4C] text-center">What We Stand For</h1>
            </div>

            <h2 className="text-[26px] text-black font-normal">Our Core Focus Areas</h2>

            {/* Cards */}
            <div className="flex flex-col justify-center gap-3 lg:flex-row lg:space-x-6 md:flex-row md:space-x-6">
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


            <section className="bg-black mt-16 px-4 py-15 space-y-16 md:px-14">

                <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-20 lg:mx-auto lg:max-w-[1440px]">

                    <div className="mt-16">
                        <div className="bg-[url('/Images/about/leaf.png')] bg-center bg-cover w-full h-[400px] rounded-[8px] md:h-[500px] lg:h-[706px]"/>
                    </div>



                <div className="mt-40 lg:space-y-[65px] space-y-14 lg:mt-78">

                <div  className=" flex flex-col">

                    <div className="space-y-3">

                        <div className="flex py-1 px-5 bg-[#E8F5ED26] rounded-full w-[135px]  justify-center ">

                            <h1 className="text-[13px] text-[#169B4C] text-center">Who We Serve</h1>

                        </div>

                        <h2 className="text-[26px] text-white font-normal">Built for People Who Care About the Planet</h2>
                    </div>

                    <div className="space-y-3">
                        <p className="text-white text-[19px]">
                            We're here for:
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-[#B3B3B3] ml-3">
                            <li className="text-[19px]">Individuals transitioning to an eco-friendly lifestyle</li>
                            <li className="text-[19px]">Environmental activists and advocates</li>
                            <li className="text-[19px]">Sustainable small business owners</li>
                            <li className="text-[19px]">Local communities hosting cleanups and recycling drives</li>
                            <li className="text-[19px]">Students, educators, and eco-conscious creators</li>
                        </ul>
                    </div>



                </div>

                <div  className="space-y-8 flex flex-col">

                    <div className="space-y-3">

                        <div className="flex py-1 px-5 bg-[#E8F5ED26] rounded-full w-[135px]  justify-center ">

                            <h1 className="text-[13px] text-[#169B4C] text-center">Our Vision</h1>

                        </div>

                        <h2 className="text-[26px] text-white font-normal">A Greener, More Connected World</h2>
                    </div>

                    <div className="space-y-3">
                        <p className="text-[#B3B3B3] text-[19px]">
                            Our vision is a future where sustainability is not just an option — it's a lifestyle.
                        </p>

                        <p className="text-[#B3B3B3] text-[19px]">
                            Where local communities work together to restore nature, reduce pollution, and make conscious choices that benefit generations to come.
                        </p>

                        <p className="text-[#B3B3B3] text-[19px]">
                            We aim to make eco-living accessible, practical, and rewarding for all.
                        </p>
                    </div>



                    </div>

                    </div>
                </div>
            </section>

             <section className="mt-16 px-4 py-8 space-y-16 md:px-14 lg:mx-auto lg:max-w-[1440px] ">

                <div className="lg:space-y-[65px] space-y-14 lg:grid lg:grid-cols-2 lg:gap-20 lg:mx-auto lg:px-[169px]">

                    <div  className=" flex flex-col">

                        <div className="space-y-3">

                            <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-[135px]  justify-center ">

                                <h1 className="text-[13px] text-[#169B4C] text-center">How We Work</h1>

                            </div>

                            <h2 className="text-[26px] text-black font-normal">We Build Tools That Empower Change</h2>

                        </div>

                    </div>

                    <div>
                          <Accordion />
                    </div>

                </div>



            </section>


        </main>
    );
}

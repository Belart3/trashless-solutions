export default function AboutPage() {
    return (
        <main className="">
            <section className="px-4 space-y-16 pb-4 md:px-14">
                <div className="flex">
                    <div className="bg-[url('/images/about/mission.png')] lg:bg-[url('/images/about/missionBig.png')] bg-cover bg-center w-full h-[290px] md:h-[460px] rounded-xl"/>
                </div>

                <div className="space-y-8">

                    <div className="space-y-4">
                        <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-1/3 justify-center">
                            <h1 className="text-[13px] text-[#169B4C] text-center">Our Purpose</h1>
                        </div>

                        <h2 className="text-[26px] text-black font-normal">Why we Exist</h2>
                    </div>

                    <p className="text-black text-[19px]">
                    <span className="text-[#999]"> Our platform was created to</span> promote sustainable living practices, support eco-conscious businesses, and help individuals reduce their environmental footprint.</p>

                    <p className="text-[#999] text-[19px]">
                    By connecting people with local resources, educational content, and impactful events, we empower everyday actions that drive real change.</p>

                </div>

                <div className="space-y-8">

                    <div className="space-y-4">
                        <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full w-1/2 justify-center">
                            <h1 className="text-[13px] text-[#169B4C] text-center">What We Stand For</h1>
                        </div>

                        <h2 className="text-[26px] text-black font-normal">Our Core Focus Areas</h2>
                    </div>

                    <div className="flex flex-col justify-center space-y-3">

                        <div className="flex flex-col bg-[#F5F7FA] rounded-2xl w-full h-[227px] space-y-8 p-5">

                            <div className=" w-16 h-16 rounded-full bg-[#ededed] items-center justify-center flex">
                                <div className="bg-white rounded-full w-[44.95px] h-[44.95px] items-center justify-center p-2">
                                    <div className="bg-[url('/images/icons/community.svg')] bg-center bg-cover w-full h-full"/>
                                </div>
                            </div>


                            <div
                            className="space-y-4">
                                <p className="text-[19px]">Environmental Impact</p>

                                <p className="text-[15px] text-[#666]">Reducing waste, promoting recycling, and supporting planet-positive practices.</p>
                            </div>

                        </div>

                        <div className="flex flex-col bg-[#F5F7FA] rounded-2xl w-full h-[227px] space-y-8 p-5">

                            <div className=" w-16 h-16 rounded-full bg-[#ededed] items-center justify-center flex">
                                <div className="bg-white rounded-full w-[44.95px] h-[44.95px] items-center justify-center p-2">
                                    <div className="bg-[url('/images/icons/community.svg')] bg-center bg-cover w-full h-full"/>
                                </div>
                            </div>


                            <div
                            className="space-y-4">
                                <p className="text-[19px]">Social Causes & Inclusions</p>

                                <p className="text-[15px] text-[#666]">Encouraging diverse participation and empowering underrepresented communities.</p>
                            </div>

                        </div>


                        <div className="flex flex-col bg-[#F5F7FA] rounded-2xl w-full h-[227px] space-y-8 p-5">

                            <div className=" w-16 h-16 rounded-full bg-[#ededed] items-center justify-center flex">
                                <div className="bg-white rounded-full w-[44.95px] h-[44.95px] items-center justify-center p-2">
                                    <div className="bg-[url('/images/icons/community.svg')] bg-center bg-cover w-full h-full"/>
                                </div>
                            </div>


                            <div
                            className="space-y-4">
                                <p className="text-[19px]">Economic Sustainability</p>

                                <p className="text-[15px] text-[#666]">Supporting local eco-friendly businesses and creating green job opportunities.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="bg-black mt-16 px-4 py-8 space-y-16">

                <div className="mt-16">
                    <div className="bg-[url('/images/about/leaf.png')] bg-center bg-cover w-full h-[287px] rounded-[8px]"/>
                </div>

                <div  className="space-y-8 flex flex-col">

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

            </section>


        </main>
    );
}

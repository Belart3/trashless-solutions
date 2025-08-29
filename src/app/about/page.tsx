export default function AboutPage() {
    return (
        <main>
            <section className="px-4 space-y-16 pb-4">
                <div className="flex">
                    <div className="bg-[url('/images/about/mission.png')] bg-cover bg-center w-full h-[290px] rounded-2xl"/>
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
                        <div className="flex flex-col bg-[#F5F7FA] rounded-2xl w-full h-[217px] space-y-8 p-5">

                        
                            <div className="bg-white rounded-full w-[44.952px] h-[44.952px] items-center justify-center p-2">
                                <div className="bg-[url('/images/icons/community.svg')] bg-center bg-cover w-full h-full"/>
                            </div>

                            <div
                            className="space-y-4">
                                <p>Environmental Impact</p>

                                <p>Reducing waste, promoting recycling, and supporting planet-positive practices.</p>
                            </div>

                        </div>

                        <div className="flex bg-[#F5F7FA] rounded-2xl w-full h-[217px]">

                        </div>

                        <div className="flex bg-[#F5F7FA] rounded-2xl w-full h-[217px]">

                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
}

import filter from "@/data/filter.json"
import Filter from "@/components/Filter";
import location from "@/data/location.json"
import Location from "@/components/Location";
import GreenBoxNigeria from "@/components/GreenBoxNigeria";
import greenBoxNigeria from "@/data/greenBoxNigeria.json"
import BusinessSubmissionForm from "@/components/BusinessSubmissionForm";
import businessSubmissionForm from "@/data/businessSubmissionForm.json";
export default function BizDirectoryPage() {
  return (
    <main>
        <section className="flex flex-col gap-16 lg:mx-auto lg:max-w-[1440px] pb-30">

            <section className="px-4 pb-4 md:px-14">
                <div className="lg:mx-auto lg:max-w-[1440px] flex flex-col gap-16">
                    <div>
                        <div className="bg-[url('/Images/discover-eco-friendly-businesses-mobile.webp')] md:bg-[url('/Images/discover-eco-friendly-businesses-desktop.webp')] bg-cover bg-center w-full h-[440px] md:h-[460px] rounded-xl"/>
                    </div>
                </div>

            </section>

            <section className="px-4 pb-4 md:px-14 flex flex-col gap-6">

                <div className="flex flex-row gap-2">
                    <div className="bg-[url('/Images/icons/Filter.svg')] bg-cover bg-center w-6 h-6" />

                    <div>
                        <h1 className="text-[19px] font-medium">Filters</h1>
                    </div>

                </div>

                <div className="flex flex-col gap-3">

                    <h1>By Categories</h1>

                    <div>
                        <Filter items={filter} />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1>By Location</h1>
                    <Location items={location} />
                </div>

            </section>

            <section className="px-4 pb-4 md:px-14 flex flex-col gap-8">

                <hr className="border-[#E6E6E6] w-full border"/>

                <div>
                    <GreenBoxNigeria items={greenBoxNigeria} />
                </div>


                <hr className="border-[#E6E6E6] w-full border"/>

            </section>

            <section className="px-4 pb-4 md:px-14 flex flex-col gap-8">

                <div className="flex flex-col gap-3">
                    <div className="flex py-1 px-5 bg-[#E8F5ED80] rounded-full  justify-center items-center w-fit">
                        <h1 className="text-[13px] text-[#169B4C] text-center whitespace-nowrap">
                            Are You A Sustainable Brand?
                        </h1>

                    </div>

<div className="flex flex-col gap-8 md:flex-row md:gap-20">
              {/* Selector */}
              <div className="md:w-1/2">
                        <h2 className="text-[30px] text-black font-normal">Get featured in our growing directory of eco-friendly businesses in Nigeria. Reach customers who care about the planet and are actively looking to support brands like yours.</h2>
              </div>

              {/* Donation Form (heading updates with selected option) */}
              <div className="flex-1">
                <BusinessSubmissionForm
                  fields={businessSubmissionForm}
                  heading="Business Submission Form"
                />
              </div>
            </div>

                </div>

            </section>

        </section>
    </main>
  );
}

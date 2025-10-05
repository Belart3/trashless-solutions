import Legal from "@/components/Legal";
export default function LegalPage() {
  return (
    <main>
  <section className="flex flex-col gap-16 lg:mx-auto lg:max-w-[1440px] pb-30">
        {/* Hero Section */}

        <section className="px-4  pt-6 md:px-14 md:pt-14 ">

            <div className="flex flex-col gap-4 items-start lg:flex-row lg:gap-20">

                <div className="lg:max-w-[686px]">
                    <h1 className="text-[40px]/[100%] tracking-[-2.4px] md:text-[40px]/[120%] md:tracking-[-2.88px] lg:text-[48px]">Our Commitment to Transparency</h1>
                </div>

                <div className="lg:max-w-[562px]">
                    <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[16px]/[150%]">We’re committed to creating a safe, respectful, and transparent community. Please take a moment to read through our Terms & Conditions and Privacy Policy so you understand how we operate and how we protect your data.</p>
                </div>
            </div>

        </section>

        <section className="px-4 md:px-14">
            <Legal />
        </section>

        </section>
    </main>
  )
}
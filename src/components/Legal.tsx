"use client"
import { useEffect, useState } from "react"
import links from "@/data/legalLinks.json"

export default function Legal() {
  const [active, setActive] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Checks screen size
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const sections = document.querySelectorAll("section[id]")
    const sidebar = document.getElementById("legal-sidebar")

    const handleScroll = () => {
      if (!sidebar) return

      const centerY = window.innerHeight / 2
      let closestId: string | null = null
      let minDistance = Infinity

      const secs = Array.from(sections) as HTMLElement[]

      // Find the visible section whose center is closest to the viewport center
      secs.forEach((sec) => {
        const rect = sec.getBoundingClientRect()
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const secMid = rect.top + rect.height / 2
          const dist = Math.abs(secMid - centerY)
          if (dist < minDistance) {
            minDistance = dist
            closestId = sec.id
          }
        }
      })

      // Ensure the last section becomes active when at page bottom
      const scrollBottom = window.innerHeight + window.scrollY
      const pageHeight = document.documentElement.scrollHeight
      if (scrollBottom >= pageHeight - 5) {
        const last = secs[secs.length - 1]
        if (last) closestId = last.id
      }

      if (closestId && closestId !== active) {
        setActive(closestId)
      }
    }

    // Use rAF to smooth updates
    const onScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", onScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [isDesktop, active])

  return (
    <main className="flex items-start flex-col md:flex-row gap-16 md:gap-20">
      {/* Side div*/}
<aside
  id="legal-sidebar"
  className="w-[320px] md:w-[280px] lg:w-[320px] md:sticky md:top-[200px]"
>
  <div className="px-5 py-5 rounded-xl border w-full">
    <ul className="flex flex-col gap-6 text-[#999] text-[16px]/[100%] tracking-[-0.96px] font-medium">
      {links.map((link) => (
        <li
          key={link.id}
          className={`cursor-pointer transition-colors ${
            active === link.id ? "text-green-600 font-semibold" : ""
          }`}
          onClick={() => {
            const target = document.getElementById(link.id)
            setActive(link.id)

            if (target) {
              const stickyOffset = 200 // 👈 matches md:top-[200px]
              const top = target.offsetTop - stickyOffset
              window.scrollTo({
                top,
                behavior: "smooth", // ✅ always smooth on all screens
              })
            }
          }}
        >
          {link.title}
        </li>
      ))}
    </ul>
  </div>
</aside>
      {/* Content */}
      <section className="flex flex-col md:flex-1 gap-8 md:gap-10">

            <div className="px-6"> <hr /></div>

        {/* Terms */}
        <section id="terms" className="px-6 flex flex-col gap-8 md:gap-10">
          <h2 className="text-[26px]/[100%] tracking-[-1.56px] md:text-[30px]/[120%] md:tracking-[-1.8px]">
            Terms & Conditions
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Use of the Platform
              </h2>
              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                By using this website, you agree to follow our community values:
                sustainability, respect, and honesty. You agree not to misuse
                the platform, spam users, or promote non-aligned products or
                services.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Account Responsibility
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                You are responsible for keeping your login information
                confidential and for any actions taken under your account.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Content Use
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                All content (articles, blogs, graphics) is owned by us unless
                otherwise stated. You may not republish, reproduce, or reuse
                content without written permission.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Business Listings & Products
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                Vendors listed in our directory and marketplace are responsible
                for the accuracy of their product descriptions and claims. We do
                not guarantee third-party services.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Events & Participation
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                By signing up for any event via this platform, you acknowledge
                personal responsibility for your participation. We are not
                liable for damages or injuries during third-party events.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Donations
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                Donations are non-refundable and are directed toward
                sustainability programs as described on the site. You’ll receive
                receipts and updates, but we do not promise any tax deduction
                benefit unless explicitly stated.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Termination
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                We reserve the right to suspend or terminate accounts that
                violate these terms or harm the integrity of the community.
              </p>
            </div>
          </div>
        </section>

        <div className="px-6"> <hr /></div>

        {/* Privacy */}
        <section id="privacy" className="px-6 flex flex-col gap-8 md:gap-10">
          <h2 className="text-[26px]/[100%] tracking-[-1.56px] md:text-[30px]/[120%] md:tracking-[-1.8px]">
            Privacy Policy
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                What We Collect
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                We collect only the information you choose to share, including
                your name, email address, and activity on the platform (e.g.
                saved items, event signups).
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                How We Use It
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                Your data helps us:
              </p>
              <ul className="list-disc pl-7 text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                <li>Provide services (e.g. show your dashboard, send event updates)</li>
                <li>Improve platform experience</li>
                <li>Communicate with you when needed</li>
                <li>Offer personalized sustainability suggestions</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Your Data Is Safe
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                We do not sell your personal data. We store it securely using
                encrypted services and never share it with third parties for
                advertising purposes.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Cookies
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                We may use trusted tools (e.g. analytics, payment processors
                like Paystack) that follow their own privacy standards.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[19px]/[100%] tracking-[-1.14px] md:text-[21px]/[120%] md:tracking-[-1.26px]">
                Your Rights
              </h2>

              <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                You can request to:
              </p>

              <ul className="list-disc pl-7 text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
                <li>View or edit your data</li>
                <li>Delete your account</li>
                <li>
                  Opt-out of communication <br />
                  Email us at privacy@[yourdomain].com
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="px-6"> <hr /></div>

        {/* Contact */}
        <section id="contact" className="px-6 flex flex-col gap-6 md:gap-8">
          <h2 className="text-[26px]/[100%] tracking-[-1.56px] md:text-[30px]/[120%] md:tracking-[-1.8px]">
            Questions or Concerns?
          </h2>

          <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
            If you have any questions about our legal terms or data practices,
            reach out to us at:
            <br />
            Email: legal@[yourdomain].com
            <br />
            WhatsApp: [+234 xxx xxx xxxx]
          </p>
        </section>

        <div className="px-6"> <hr /></div>

        {/* Final Note */}
        <section id="final" className="px-6 flex flex-col gap-6 md:gap-8">
          <h2 className="text-[26px]/[100%] tracking-[-1.56px] md:text-[30px]/[120%] md:tracking-[-1.8px]">
            Final Note
          </h2>

          <p className="text-[15px]/[150%] tracking-[-0.9px] text-[#666] md:text-[18px]/[150%] md:tracking-[-0.72px]">
            By continuing to use this platform, you acknowledge and accept these
            terms and our privacy practices.
          </p>
        </section>
      </section>
    </main>
  )
}
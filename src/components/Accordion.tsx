import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function ExamplePage() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">

        <AccordionTrigger>
            <p className="text-[19px]">Directory of verified eco-friendly businesses</p>
        </AccordionTrigger>

        <AccordionContent className="pt-14">
          <p className="text-[15px] text-[#666]">Browse a curated list of Nigerian businesses offering sustainable, plastic-free, and low-impact products.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">

        <AccordionTrigger>
            <p className="text-[19px]">Educational blog & guides on sustainable practices</p>
        </AccordionTrigger>

        <AccordionContent className="pt-14">
          <p className="text-[15px] text-[#666]"></p>

        </AccordionContent>
      </AccordionItem>

            <AccordionItem value="item-3">

        <AccordionTrigger>
            <p className="text-[19px]">Event listings for workshops & cleanups</p>
        </AccordionTrigger>

        <AccordionContent className="pt-14">
          <p className="text-[15px] text-[#666]"></p>

        </AccordionContent>
      </AccordionItem>

            <AccordionItem value="item-4">

        <AccordionTrigger>
            <p className="text-[19px]">Impact stats to track community contributions</p>
        </AccordionTrigger>

        <AccordionContent className="pt-14">
          <p className="text-[15px] text-[#666]"></p>

        </AccordionContent>
      </AccordionItem>

            <AccordionItem value="item-5">

        <AccordionTrigger>
            <p className="text-[19px]">Community forum to connect and collaborate</p>
        </AccordionTrigger>

        <AccordionContent className="pt-14">
          <p className="text-[15px] text-[#666]"></p>

        </AccordionContent>
      </AccordionItem>

    </Accordion>
      )
}

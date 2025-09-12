"use client"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

type AccordionItemType = {
  value: string
  title: string
  content: string
}

type CustomAccordionProps = {
  items: AccordionItemType[]
}

export default function ExamplePage({ items }: CustomAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="cursor-pointer">
          <AccordionTrigger className="cursor-pointer">
            <p className="text-[26px] md:text-[30px] leading-[120%] tracking-[-1.14px] md:tracking-[-1.8px]">{item.title}</p>
          </AccordionTrigger>
          <AccordionContent className="pt-14">
            <p className="text-[19px] md:text-[21px] text-[#666] leading-[150%] tracking-[-0.9px] md:leading-[120%] md:tracking-[-1.26px]">{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
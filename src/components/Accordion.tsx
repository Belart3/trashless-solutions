import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import accordionData from "@/data/accordionData.json"

export default function ExamplePage() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="cursor-pointer">
          <AccordionTrigger className="cursor-pointer">
            <p className="text-[19px]">{item.title}</p>
          </AccordionTrigger>
          <AccordionContent className="pt-14">
            <p className="text-[15px] text-[#666]">{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
"use client"
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import Image from "next/image"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b border-t py-5", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 cursor:pointer",
          className
        )}
        {...props}
      >
        {children}

        {/* Icon wrapper */}
        <div className="relative w-[30px] h-[30px] flex items-center justify-center">
          {/* Down Arrow (rotates up on open, hidden after rotation) */}
          <Image
            src="/Images/icons/downArrow.svg"
            alt="accordion closed"
            width={30}
            height={30}
            className="absolute origin-center transition-transform duration-300
                       group-data-[state=open]:rotate-180
                       group-data-[state=open]:opacity-0 group-data-[state=open]:delay-300
                       group-data-[state=closed]:opacity-100"
          />

          {/* Green Arrow (rotates down on close, hidden after rotation) */}
          <Image
            src="/Images/icons/greenArrow.svg"
            alt="accordion open"
            width={30}
            height={30}
            className="absolute origin-center transition-transform duration-300
                       rotate-0
                       opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:delay-300
                       group-data-[state=closed]:rotate-0 group-data-[state=closed]:delay-300"
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      {...props}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        // Closed: no height, invisible
        "data-[state=closed]:max-h-0 data-[state=closed]:opacity-0",
        // Open: expand smoothly
        "data-[state=open]:max-h-[500px] data-[state=open]:opacity-100",
        className
      )}
    >
      <div className="pt-0 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
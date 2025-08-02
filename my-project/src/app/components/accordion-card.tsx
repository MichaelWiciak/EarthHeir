"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, MinusIcon, PlusIcon } from "lucide-react";

import "../styles/accordion.css";

export function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
      className="accordion-root"
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className="accordion-item"
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className="accordion-trigger"
        {...props}
      >
        {children}
        <div className="accordion-icon-wrapper">
          <PlusIcon data-icon-open size={16} />
          <MinusIcon data-icon-closed size={16} />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="accordion-content"
      {...props}
    >
      <div className="accordion-inner">{children}</div>
    </AccordionPrimitive.Content>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "Is there a free plan available?",
    answer:
      "Yes! Our free plan gives you limited access to AI models with up to 100 requests per month. It's perfect for testing and small-scale use.",
  },
  {
    id: "item-2",
    question: "What is the cost of the Basic Plan?",
    answer:
      "The Basic Plan costs $15 per month and includes 5,000 AI requests, priority processing, and access to general-purpose AI models.",
  },
  {
    id: "item-3",
    question: "How much does the Pro Plan cost?",
    answer:
      "The Pro Plan is $25 per month and includes 20,000 AI requests, access to advanced AI models, and API rate limit increases for power users.",
  },
  {
    id: "item-4",
    question: "Do you offer annual subscription discounts?",
    answer:
      "Yes! The Basic Annual Plan is $144 per year (saving 20%), and the Pro Annual Plan is $300 per year (saving 25%).",
  },
  {
    id: "item-5",
    question: "Is there a trial period for paid plans?",
    answer:
      "Yes, we offer a 14-day free trial for the Pro Plan so you can test advanced AI features before committing.",
  },
  {
    id: "item-6",
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Absolutely! You can switch between plans at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    id: "item-7",
    question: "Are there any overage charges?",
    answer:
      "If you exceed your request limits, additional usage is billed at $0.005 per request. You can also upgrade to a higher plan to avoid overages.",
  },
];


export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <HeaderSection
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Explore our comprehensive FAQ to find quick answers to common
          inquiries. If you need further assistance, don't hesitate to
          contact us for personalized help."
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

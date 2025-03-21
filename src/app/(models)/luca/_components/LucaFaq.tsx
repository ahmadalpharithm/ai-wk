"use client"

import React, { useState } from "react";

const faqs = [
  {
    question: "What are the pricing plans for Luca?",
    answer: [
      "Standard Plan – $20/month: Get full access to Luca’s AI-powered bookkeeping and financial reporting. (No document storage included.)",
      "Premium Plan – $50/month: Enjoy all Standard Plan features plus secure document storage for invoices and receipts.",
      "Try Luca risk-free with a 2-week free trial—no commitment required."
    ]
  },
  {
    question: "Can Luca be customized?",
    answer: [
      "Need custom features? Contact us to tailor Luca to your specific business needs."
    ]
  }
];

const LucaFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="inline-flex justify-start items-start gap-20">
      {/* Left Title */}
      <div className="w-[479px] justify-start text-stone-900 text-4xl font-bold">
        FAQs (Frequently Asked Questions)
      </div>

      {/* FAQ Section */}
      <div className="w-[726px] flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="self-stretch pb-6 border-b border-black flex flex-col gap-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <div className="text-stone-900 text-xl font-semibold">{faq.question}</div>

              {/* SVG Toggle Icon */}
              <div>
                {openIndex === index ? (
                  // Up Arrow SVG (Open)
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 16.667V3.33366M10 3.33366L15 8.33366M10 3.33366L5 8.33366" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  // Down Arrow SVG (Closed)
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3.33301V16.6663M10 16.6663L15 11.6663M10 16.6663L5 11.6663" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>

            {/* Answer Section (Only Show When Open) */}
            {openIndex === index && (
              <div className="text-stone-900 text-base font-light leading-normal">
                {faq.answer.map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LucaFAQ;

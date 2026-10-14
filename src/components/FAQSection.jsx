import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const half = Math.ceil(faqsData.length / 2);
  const leftFaqs = faqsData.slice(0, half);
  const rightFaqs = faqsData.slice(half);

  const renderFaqCard = (faq, index) => {
    const isOpen = openIndices.includes(index);
    return (
      <ScrollReveal
        key={index}
        direction={index % 2 === 0 ? 'left' : 'right'}
        delay={(index % 4) * 80}
        duration={750}
        className={`bg-ivory rounded-none border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'border-taupe/60 shadow-md ring-1 ring-taupe/20'
            : 'border-sand-dark/40 shadow-sm hover:border-taupe/40 hover:shadow-md'
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full p-5 sm:p-6 text-left flex justify-between items-start gap-4 focus:outline-none cursor-pointer group"
          aria-expanded={isOpen}
        >
          <span className="font-serif font-bold text-charcoal text-base sm:text-lg group-hover:text-taupe transition-colors leading-snug">
            {faq.question}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 mt-0.5 ${
              isOpen ? 'rotate-180 bg-charcoal text-ivory' : 'bg-sand text-taupe group-hover:bg-sand-dark/40'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {isOpen && (
          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-charcoal-light leading-relaxed border-t border-sand/60 animate-fadeIn font-normal">
            <p>{faq.answer}</p>
          </div>
        )}
      </ScrollReveal>
    );
  };

  return (
    <section className="py-20 px-6 bg-ivory border-t border-sand-dark/40" id="faq">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" duration={800} className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3 text-charcoal">
            Câu hỏi thường gặp
          </h2>
          <p className="text-charcoal-light text-sm">
            Những thông tin bạn cần biết trước khi liên hệ Lamis Studio.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <div className="space-y-5">
            {leftFaqs.map((faq, idx) => renderFaqCard(faq, idx))}
          </div>
          <div className="space-y-5">
            {rightFaqs.map((faq, idx) => renderFaqCard(faq, idx + half))}
          </div>
        </div>
      </div>
    </section>
  );
}

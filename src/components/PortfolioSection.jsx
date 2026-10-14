import React, { useState } from 'react';
import { portfolioCategories } from '../data/portfolio';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AutoImage from './AutoImage';

export default function PortfolioSection({ onSelectService }) {
  const [categoryId, setCategoryId] = useState(portfolioCategories[0].id);
  const category = portfolioCategories.find((c) => c.id === categoryId) || portfolioCategories[0];

  const handleConsult = () => {
    if (onSelectService) {
      onSelectService(category.id === 'concept' ? 'concept' : category.id === 'outdoor' ? 'outdoor' : 'beauty');
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 bg-cream" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={800} className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3 text-charcoal">
            Portfolio — Những khoảnh khắc mang dấu ấn riêng.
          </h2>
          <p className="text-charcoal-light text-base">
            Khám phá các bộ ảnh được thực hiện theo nhiều phong cách, từ beauty và chân dung đến concept sáng tạo, ngoại cảnh và ảnh cưới.
          </p>

          {/* Category filter */}
          <div className="mt-6 inline-flex flex-wrap justify-center p-1 rounded-2xl bg-ivory border border-sand-dark/50 shadow-sm">
            {portfolioCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategoryId(c.id)}
                className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  c.id === categoryId ? 'bg-charcoal text-ivory shadow-sm' : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio cards: photo + category + CTA */}
        <div
          key={category.id}
          data-reveal-row
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pt-2 pb-6 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.images.map((src, index) => (
            <ScrollReveal
              key={src}
              direction={index % 2 === 0 ? 'up' : 'down'}
              delay={index * 90}
              triggerClosest="[data-reveal-row]"
              duration={800}
              className="font-roboto flex-shrink-0 snap-start flex w-[88vw] max-w-[480px] sm:w-[480px] bg-ivory border border-sand-dark/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-taupe/60 transition-all duration-300"
            >
              {/* Image flush to the card edges, left side */}
              <div className="w-[44%] shrink-0 relative">
                <AutoImage
                  images={[...category.images.slice(index), ...category.images.slice(0, index)]}
                  alt={`${category.label} ${String(index + 1).padStart(2, '0')} – Lamis Studio`}
                  imgClassName="object-cover object-top"
                  eager={index < 2}
                />
              </div>

              {/* Text, right side */}
              <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-taupe">
                    {String(index + 1).padStart(2, '0')} / {String(category.images.length).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal leading-snug mt-2">{category.label}</h3>
                  <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{category.description}</p>
                </div>

                <button
                  type="button"
                  onClick={handleConsult}
                  className="w-full py-3 font-bold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 bg-cream border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-ivory hover:border-charcoal"
                >
                  <span>Tư vấn phong cách này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

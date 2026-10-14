import React from 'react';
import ScrollReveal from './ScrollReveal';
import WaveBand from './WaveBand';
import AutoImage from './AutoImage';
import { servicesData } from '../data/services';

// First four services (with photos) are shown here; the rest continue in RoomsSection.
const featured = servicesData.slice(0, 4);

export default function ServicesSection() {
  return (
    <section className="relative -mt-16 py-24 px-6 overflow-x-clip" id="services">
      <WaveBand color="#24211F" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-ivory">
        {/* Text side */}
        <ScrollReveal direction="left" duration={900} className="lg:col-span-12 text-center lg:text-left">
          <p className="font-display italic text-2xl text-sand mb-3">Dịch vụ chụp ảnh</p>
          <h2 className="font-bold uppercase tracking-wide text-2xl sm:text-3xl leading-snug max-w-xl mx-auto lg:mx-0">
            Mỗi khung hình là một cách thể hiện riêng.
          </h2>
        </ScrollReveal>

        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {featured.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={Math.floor(index / 2) * 120}
              duration={800}
              className="relative flex items-stretch min-h-[13rem] sm:min-h-[13.5rem] rounded-none overflow-hidden bg-ivory border border-sand-dark/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-2/5 shrink-0 overflow-hidden">
                <AutoImage
                  images={item.images}
                  alt={item.name}
                  imgClassName="object-cover object-top"
                  startDelay={index * 400}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-6 py-4 text-charcoal">
                <span className="font-display italic text-3xl text-taupe leading-none mb-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold uppercase tracking-wider text-base">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

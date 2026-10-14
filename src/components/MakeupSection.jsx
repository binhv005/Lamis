import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AutoImage from './AutoImage';
import { servicesData } from '../data/services';

const SAND = '#E8DED1';

// Sand panel: fixed-height wavy top edge + solid body, so the wave keeps its shape at any section height.
const WavePanel = () => (
  <div className="absolute inset-0" aria-hidden="true">
    <svg
      className="absolute top-0 left-0 w-full h-20 block"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
    >
      <path
        d="M0 34 C180 -6 360 8 520 46 C680 84 820 70 980 34 C1140 -2 1290 6 1440 38 L1440 80 L0 80 Z"
        fill={SAND}
      />
    </svg>
    <div className="absolute inset-x-0 top-[79px] bottom-0" style={{ backgroundColor: SAND }} />
  </div>
);

// Remaining services: Makeup chuyên nghiệp, Đào tạo trang điểm (with photos) and Phóng sự cưới.
const photoServices = servicesData.filter((s) => ['makeup', 'makeup-training'].includes(s.id));
const textServices = ['makeup', 'makeup-training', 'wedding'].map((id) => servicesData.find((s) => s.id === id));

export default function MakeupSection({ onSelectService }) {
  const [first, second] = photoServices;

  const selectService = (serviceId) => {
    if (onSelectService) onSelectService(serviceId);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-0 pb-20 overflow-x-clip" id="makeup">
      {/* Full-width sand wavy panel (bottom layer) */}
      <div className="absolute inset-x-0 -top-16 bottom-0 z-0">
        <WavePanel />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
        {/* Overlapping photo frames (top layer) */}
        <ScrollReveal
          direction="clip"
          duration={1000}
          className="relative z-20 lg:col-span-5 h-[420px] sm:h-[520px] lg:h-[560px]"
        >
          <div className="absolute top-0 left-0 w-[62%] aspect-[4/5] border-[6px] border-ivory shadow-xl bg-ivory">
            <AutoImage
              images={first.images}
              alt="Makeup beauty tại Lamis Studio"
              imgClassName="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 right-0 lg:right-[-8%] w-[62%] aspect-[4/5] border-[6px] border-ivory shadow-2xl bg-ivory">
            <AutoImage
              images={second.images}
              alt="Trang điểm và tạo kiểu tại Lamis Studio"
              imgClassName="object-cover object-top"
              startDelay={1000}
            />
          </div>
        </ScrollReveal>

        {/* Text block */}
        <ScrollReveal
          direction="right"
          duration={900}
          delay={150}
          className="relative z-10 lg:col-span-7 lg:pl-16 lg:pr-8 pt-6 pb-4 lg:pt-12 lg:pb-10 text-left text-charcoal"
        >
          <p className="font-display italic text-2xl text-taupe mb-3">Makeup, đào tạo &amp; phóng sự cưới</p>
          <h2 className="font-bold uppercase tracking-wide text-xl sm:text-2xl leading-snug mb-8">
            Trang điểm chỉn chu cho mọi khoảnh khắc.
          </h2>

          <div className="space-y-8">
            {textServices.map((service) => (
              <div key={service.id}>
                <h3 className="font-bold text-base mb-1">{service.name}</h3>
                <p className="text-sm leading-relaxed text-charcoal-light">{service.description}</p>
                <div className="mt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => selectService(service.id)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-charcoal hover:text-taupe transition-colors group"
                  >
                    <span>Tư vấn {service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href="#booking"
              className="text-xs font-semibold underline underline-offset-4 text-charcoal hover:text-taupe transition-colors"
            >
              Tư vấn chọn dịch vụ
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

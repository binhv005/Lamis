import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AutoImage from './AutoImage';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-ivory px-6 overflow-hidden">
      {/* Background Image with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <AutoImage
          images={['/images/newfolder/albums/blossom/09.webp', '/images/newfolder/albums/blossom/04.webp']}
          alt="Bộ ảnh concept hoa hồng của Lamis Studio"
          imgClassName="object-cover object-center"
          eager
        />
        {/* Smooth overlays for optimal text contrast */}
        <div className="absolute inset-0 bg-charcoal/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/60"></div>
      </div>

      {/* Hero Centered Content */}
      <div className="max-w-4xl mx-auto relative z-10 text-center py-24 sm:py-32">
        <div className="space-y-7">
          <ScrollReveal direction="up" duration={800} delay={100}>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-sand">
              Photography · Makeup · Art
            </p>
          </ScrollReveal>

          {/* The single H1 of the entire page */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display italic font-normal leading-[1.25] text-ivory tracking-normal drop-shadow-lg max-w-4xl mx-auto">
            <ScrollReveal as="span" direction="up" duration={900} delay={250} className="block">
              Lưu giữ vẻ đẹp của bạn
            </ScrollReveal>
            <ScrollReveal as="span" direction="up" duration={900} delay={450} className="block mt-1 sm:mt-2">
              theo cách riêng.
            </ScrollReveal>
          </h1>



          <ScrollReveal direction="up" duration={900} delay={750} className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#booking"
              className="px-9 py-4 rounded-full bg-charcoal hover:bg-ivory hover:text-charcoal border border-charcoal hover:border-ivory text-ivory font-semibold text-base transition-all shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2.5 group"
            >
              <span>Đặt lịch chụp ảnh</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="px-9 py-4 rounded-full border border-ivory/70 hover:border-ivory hover:bg-ivory/10 text-ivory font-medium text-base transition-all backdrop-blur-sm"
            >
              Khám phá portfolio
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" duration={900} delay={900}>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase text-ivory/80">
              <MapPin className="w-4 h-4" />
              <span>Vinh, Nghệ An</span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

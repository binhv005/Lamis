import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AutoImage from './AutoImage';
import { contactInfo } from '../data/contact';

export default function FinalCTASection() {
  return (
    <section className="w-full relative overflow-hidden bg-charcoal text-ivory py-24 md:py-32">
      {/* Background Image on the Left with Gradient Fade to Right */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-1/2 z-0 pointer-events-none overflow-hidden">
        <AutoImage
          images={['/images/newfolder/albums/blossom/04.webp', '/images/newfolder/albums/blossom/09.webp']}
          alt="Bộ ảnh concept Blossom của Lamis Studio"
          imgClassName="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-charcoal/75 to-charcoal"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/40"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
        <ScrollReveal direction="up" duration={850} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal italic leading-tight text-ivory drop-shadow-md">
            Lưu giữ vẻ đẹp của bạn theo cách riêng.
          </h2>

          <p className="text-ivory/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-light">
            Hãy để Lamis Studio đồng hành cùng bạn trong bộ ảnh và buổi makeup tiếp theo tại Vinh, Nghệ An.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#contact"
              className="px-10 py-4 rounded-full bg-ivory hover:bg-sand text-charcoal font-bold text-sm tracking-wide transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Liên hệ Lamis Studio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.phoneHref}
              className="px-8 py-4 rounded-full border border-ivory/40 hover:border-ivory text-ivory font-medium text-sm transition-all hover:bg-ivory/10 backdrop-blur-sm"
            >
              Hotline {contactInfo.phoneDisplay}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

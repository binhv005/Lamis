import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AutoImage from './AutoImage';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-ivory border-y border-sand-dark/30 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Asymmetrical Editorial Image Grid */}
        <ScrollReveal direction="left" duration={900} className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div>
            <div className="rounded-none overflow-hidden aspect-[4/5] shadow-md border border-sand-dark/30">
              <AutoImage
                images={['blossom/02.webp', 'blossom/05.webp', 'blossom/07.webp', 'blossom/10.webp'].map((f) => `/images/newfolder/albums/${f}`)}
                alt="Chân dung concept hoa hồng tại Lamis Studio"
                imgClassName="object-cover object-top"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className="rounded-none overflow-hidden aspect-[4/5] shadow-md border border-sand-dark/30">
              <AutoImage
                images={['thanh-xuan/04.webp', 'thanh-xuan/05.webp', 'thanh-xuan/06.jpg', 'thanh-xuan/03.webp'].map((f) => `/images/newfolder/albums/${f}`)}
                alt="Ảnh chân dung ngoại cảnh áo dài trắng của Lamis Studio"
                imgClassName="object-cover object-top"
                startDelay={700}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Story Content */}
        <ScrollReveal direction="right" duration={900} delay={150} className="lg:col-span-6 space-y-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-taupe">Giới thiệu Studio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display italic font-normal text-charcoal leading-tight">
            Một không gian dành cho vẻ đẹp và cá tính riêng.
          </h2>
          <p className="text-charcoal-light leading-relaxed text-base">
            Lamis Studio đồng hành cùng bạn trong những buổi chụp ảnh cá nhân, bộ ảnh beauty, concept sáng tạo và những dấu mốc đặc biệt của cuộc sống. Bên cạnh dịch vụ chụp ảnh, studio còn cung cấp makeup chuyên nghiệp và đào tạo trang điểm, hướng đến trải nghiệm phù hợp với nhu cầu của từng khách hàng.
          </p>
          <div className="pt-2">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-charcoal hover:bg-taupe text-ivory text-sm font-semibold tracking-wide transition-colors group"
            >
              <span>Tìm hiểu dịch vụ</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

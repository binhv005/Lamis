import React from 'react';
import { Asterisk } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import WaveBand from './WaveBand';

// No official price list yet: this section only explains how to get a consultation.
const topics = [
  {
    step: '01',
    title: 'Dịch vụ',
    description: 'Chia sẻ dịch vụ bạn quan tâm: beauty, chân dung, concept, ngoại cảnh, cưới, makeup hoặc đào tạo trang điểm.'
  },
  {
    step: '02',
    title: 'Phong cách',
    description: 'Cho studio biết phong cách hoặc concept bạn mong muốn để được tư vấn hướng thể hiện phù hợp.'
  },
  {
    step: '03',
    title: 'Chi phí',
    description: 'Studio tư vấn chi phí dựa trên nhu cầu thực tế của bạn, không áp dụng một mức giá chung cho mọi buổi chụp.'
  }
];

export default function PricingSection() {
  return (
    <section className="relative z-10 -mb-16 py-32 px-6 overflow-x-clip" id="pricing">
      <WaveBand color="#24211F" />

      <div className="relative z-10 max-w-6xl mx-auto text-ivory">
        <ScrollReveal direction="up" duration={800} className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-display italic text-2xl text-sand mb-3">Bảng giá tham khảo</p>
          <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3">
            Lựa chọn gói chụp phù hợp.
          </h2>
          <p className="text-sm text-ivory/80">
            Mỗi nhu cầu chụp ảnh đều có những yêu cầu riêng. Liên hệ Lamis Studio để được tư vấn về phong cách, dịch vụ và chi phí phù hợp với mong muốn của bạn.
          </p>
        </ScrollReveal>

        {/* 3 topics in columns, no cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {topics.map((item, index) => (
            <ScrollReveal
              key={item.step}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 150}
              duration={800}
              className="text-center max-w-xs mx-auto"
            >
              <Asterisk className="w-14 h-14 mx-auto mb-5 text-sand-dark" strokeWidth={2.5} />
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-ivory/70 mb-1">
                {item.step}
              </span>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ivory/85">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={300} duration={800} className="mt-14 flex justify-center">
          <a
            href="#booking"
            className="px-8 py-3 rounded-full bg-ivory text-charcoal text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:bg-sand transition-all duration-200"
          >
            Liên hệ nhận tư vấn
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

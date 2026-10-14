import React from 'react';
import ScrollReveal from './ScrollReveal';

// No verified customer reviews yet: only a neutral message is shown.
export default function ReviewsSection() {
  const keywords = ['BEAUTY', 'PORTRAIT', 'CONCEPT', 'MAKEUP'];

  return (
    <section
      className="min-h-[80vh] flex items-center justify-center py-24 px-6 text-charcoal text-center relative overflow-hidden bg-sand"
      id="reviews"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/newfolder/albums/reviews-bg-landscape.jpg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ivory/30" />
      <div className="w-full max-w-4xl mx-auto relative z-10 space-y-8">
        <ScrollReveal direction="up" duration={800}>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-taupe">Đánh giá khách hàng</p>
          <h2 className="mt-3 text-lg sm:text-xl font-display italic font-normal text-charcoal-light">
            Cảm nhận từ khách hàng.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={900}>
          <blockquote className="text-2xl sm:text-3xl md:text-5xl font-display font-normal leading-tight italic text-charcoal">
            “Mỗi bộ ảnh là một hành trình sáng tạo cùng khách hàng.”
          </blockquote>
        </ScrollReveal>

        <ScrollReveal direction="right" duration={900} delay={150}>
          <p className="text-charcoal-light text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Hãy liên hệ studio để tìm hiểu thêm về dịch vụ và xem portfolio thực tế.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={900} delay={300}>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            {keywords.map((word) => (
              <div key={word} className="flex items-center gap-2 text-charcoal hover:text-taupe transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-taupe"></span>
                <span>{word}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

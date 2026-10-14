import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { contactInfo } from '../data/contact';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-charcoal text-ivory/80 pt-16 pb-12 px-6 border-t border-ivory/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand Description */}
          <ScrollReveal direction="left" duration={800} delay={0} className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/newfolder/brand/brand-logo.jpg"
                alt="Logo Lamis Studio"
                className="w-10 h-10 rounded-full object-cover shadow-sm border border-ivory/20 shrink-0"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory">
                {contactInfo.brand}
              </span>
            </div>
            <p className="text-xs text-ivory/70 leading-relaxed max-w-sm">
              {contactInfo.tagline}. Chụp ảnh beauty, chân dung, concept, ngoại cảnh, phóng sự cưới, makeup chuyên nghiệp và đào tạo trang điểm.
            </p>
            <div className="text-xs text-sand font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sand-dark shrink-0" />
              <span>{contactInfo.area}</span>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" duration={800} delay={120}>
            <h4 className="font-serif text-sm font-bold text-ivory uppercase tracking-wider mb-4">
              Khám phá
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-sand transition-colors">Giới thiệu Studio</a></li>
              <li><a href="#services" className="hover:text-sand transition-colors">Dịch vụ chụp ảnh</a></li>
              <li><a href="#portfolio" className="hover:text-sand transition-colors">Portfolio</a></li>
              <li><a href="#albums" className="hover:text-sand transition-colors">Album theo concept</a></li>
              <li><a href="#pricing" className="hover:text-sand transition-colors">Bảng giá tham khảo</a></li>
              <li><a href="#faq" className="hover:text-sand transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal direction="right" duration={800} delay={240}>
            <h4 className="font-serif text-sm font-bold text-ivory uppercase tracking-wider mb-4">
              Liên hệ Lamis Studio
            </h4>
            <ul className="space-y-3 text-xs text-ivory/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sand-dark shrink-0" />
                <a href={contactInfo.phoneHref} className="hover:text-sand transition-colors">
                  Hotline: {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-sand-dark shrink-0" />
                <a href={contactInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                  {contactInfo.facebookLabel}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sand-dark shrink-0" />
                <a href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                  {contactInfo.mapsLabel}
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/50 gap-4">
          <p>© {new Date().getFullYear()} Lamis Studio – Photography &amp; Makeup, Vinh, Nghệ An.</p>
          <a href="#booking" className="hover:text-ivory transition-colors">
            Đặt lịch chụp ảnh
          </a>
        </div>
      </div>
    </footer>
  );
}

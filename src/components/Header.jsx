import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu Studio', href: '#about' },
    { name: 'Dịch vụ chụp ảnh', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Album theo concept', href: '#albums' },
    { name: 'Bảng giá tham khảo', href: '#pricing' },
    { name: 'Đánh giá khách hàng', href: '#reviews' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      className={`animate-headerIn sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand-dark/30 py-3'
          : 'bg-cream/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <img
            src="/images/newfolder/brand/brand-logo.jpg"
            alt="Logo Lamis Studio"
            className="w-10 h-10 rounded-full object-cover shadow-sm border border-sand-dark/40 transition-transform duration-300 group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-charcoal group-hover:text-taupe transition-colors">
              Lamis Studio
            </span>
            <span className="text-[10px] text-charcoal-light tracking-widest uppercase font-medium -mt-1">
              Photography &amp; Makeup · Vinh
            </span>
          </div>
        </a>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-5 shrink-0">
          <a
            href={contactInfo.phoneHref}
            className="hidden lg:inline text-sm font-semibold tracking-wide text-charcoal hover:text-taupe transition-colors"
          >
            Hotline: {contactInfo.phoneDisplay}
          </a>
          <a
            href="#booking"
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-full bg-charcoal hover:bg-taupe text-ivory text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Đặt lịch chụp ảnh
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-charcoal hover:bg-sand transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Navigation Menu (second row) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 mt-3 pt-3 border-t border-sand-dark/30">
        <nav className="flex items-center justify-center gap-6 xl:gap-9 text-[13px] font-medium tracking-wide text-charcoal/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-taupe transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-taupe hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-b border-sand-dark/40 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-taupe py-2 border-b border-sand/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 space-y-3">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-2xl bg-charcoal text-ivory font-bold text-sm shadow-md"
            >
              Đặt lịch chụp ảnh
            </a>
            <a
              href={contactInfo.phoneHref}
              className="w-full flex items-center justify-center py-3 rounded-2xl border border-charcoal/30 text-charcoal font-semibold text-sm"
            >
              Hotline: {contactInfo.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { ClipboardCheck, X, Phone, User, Sparkles, Calendar, MessageSquare, Copy, Check } from 'lucide-react';
import { contactInfo } from '../data/contact';

// The site has no booking backend, so this modal does NOT claim the request was received.
// It summarises the visitor's information and helps them send it to the studio.
export default function BookingSuccessModal({ requestData, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!requestData) return null;

  const summary = [
    'Yêu cầu tư vấn - Lamis Studio',
    `Họ và tên: ${requestData.fullName}`,
    `Số điện thoại: ${requestData.phone}`,
    `Dịch vụ quan tâm: ${requestData.serviceName || ''}`,
    `Phong cách/concept: ${requestData.concept || 'Chưa chọn'}`,
    `Ngày dự kiến chụp: ${requestData.shootDate || 'Chưa chọn'}`,
    `Nội dung cần tư vấn: ${requestData.notes || '(không có)'}`
  ].join('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const rows = [
    { icon: User, label: 'Họ và tên', value: requestData.fullName },
    { icon: Phone, label: 'Số điện thoại', value: requestData.phone },
    { icon: Sparkles, label: 'Dịch vụ', value: requestData.serviceName },
    { icon: Sparkles, label: 'Phong cách', value: requestData.concept || 'Chưa chọn' },
    { icon: Calendar, label: 'Ngày dự kiến', value: requestData.shootDate || 'Chưa chọn' },
    { icon: MessageSquare, label: 'Nội dung', value: requestData.notes || '—' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-ivory rounded-none max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-sand-dark/40">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal/60 hover:text-charcoal hover:bg-sand transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3 mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-sand text-taupe flex items-center justify-center">
            <ClipboardCheck className="w-9 h-9" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-charcoal">Thông tin yêu cầu tư vấn</h3>
          <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
            Cảm ơn <strong className="text-charcoal">{requestData.fullName}</strong>. Website chưa tự động gửi yêu cầu này, vui lòng gọi hotline{' '}
            <strong className="text-charcoal">{contactInfo.phoneDisplay}</strong> hoặc gửi nội dung bên dưới qua Facebook Lamis Studio để được tư vấn.
          </p>
        </div>

        <div className="bg-sand/60 p-4 rounded-none border border-sand-dark/40 space-y-2 text-xs sm:text-sm">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start justify-between gap-4 py-1 border-b border-sand-dark/30 last:border-0">
              <span className="text-charcoal-light flex items-center gap-1.5 shrink-0">
                <Icon className="w-4 h-4 text-taupe" />
                <span>{label}:</span>
              </span>
              <span className="font-semibold text-charcoal text-right break-words">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={contactInfo.phoneHref}
            className="py-3.5 rounded-2xl bg-charcoal hover:bg-taupe text-ivory font-bold text-sm tracking-wide transition-all shadow-md text-center"
          >
            Gọi {contactInfo.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="py-3.5 rounded-2xl border border-charcoal/30 hover:bg-sand text-charcoal font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Đã sao chép' : 'Sao chép nội dung'}</span>
          </button>
        </div>
        <a
          href={contactInfo.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-xs font-semibold underline underline-offset-4 text-charcoal hover:text-taupe"
        >
          Mở Facebook Lamis Studio
        </a>
        <button onClick={onClose} className="mt-4 w-full text-center text-xs text-charcoal-light hover:text-charcoal">
          Đóng
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/services';
import { albumsData } from '../data/albums';
import BookingSuccessModal from './BookingSuccessModal';
import ScrollReveal from './ScrollReveal';
import AutoImage from './AutoImage';

const inputClass =
  'w-full rounded-xl border border-sand-dark bg-cream/70 text-sm focus:border-taupe focus:ring-1 focus:ring-taupe p-3 text-charcoal outline-none transition-all';

export default function BookingSection({ prefilledData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceId: servicesData[0].id,
    concept: '',
    shootDate: '',
    notes: ''
  });

  const [submittedRequest, setSubmittedRequest] = useState(null);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        ...prefilledData
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceObj = servicesData.find((s) => s.id === formData.serviceId);

    // There is no booking backend: the request is only summarised for the visitor,
    // who is then asked to send it to the studio (hotline / Facebook).
    setSubmittedRequest({
      ...formData,
      serviceName: serviceObj?.name
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" id="booking">
      <ScrollReveal direction="up" duration={850} className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-ivory border border-sand-dark/60 shadow-xl overflow-hidden rounded-none items-stretch">
        {/* Left Column: Full-bleed image */}
        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
          <div className="absolute inset-0">
            <AutoImage
              images={albumsData[0].images}
              alt="Chân dung concept An Nhiên của Lamis Studio"
              imgClassName="object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column: The Booking Form */}
        <div className="lg:col-span-7 px-6 py-6 sm:px-10 sm:py-8 lg:px-10 lg:py-8 bg-ivory flex flex-col justify-center">
          <div className="mb-4 pb-3 border-b border-sand-dark/40">
            <h2 className="font-display italic font-normal text-charcoal text-2xl sm:text-3xl leading-snug">
              Cùng Lamis Studio lên ý tưởng cho bộ ảnh tiếp theo.
            </h2>
            <p className="mt-2 text-sm text-charcoal-light leading-relaxed">
              Chia sẻ nhu cầu chụp ảnh hoặc makeup của bạn để studio có thể tư vấn dịch vụ, phong cách và lịch hẹn phù hợp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Họ và tên <span className="text-taupe">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nhập họ và tên"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Số điện thoại <span className="text-taupe">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Dịch vụ quan tâm
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className={`${inputClass} cursor-pointer`}
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                  Phong cách hoặc concept mong muốn
                </label>
                <input
                  type="text"
                  list="concept-options"
                  placeholder="Chọn gợi ý hoặc tự nhập"
                  value={formData.concept}
                  onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
                  className={inputClass}
                />
                <datalist id="concept-options">
                  {albumsData.map((a) => (
                    <option key={a.id} value={a.name} />
                  ))}
                </datalist>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                Ngày dự kiến chụp
              </label>
              <input
                type="date"
                value={formData.shootDate}
                onChange={(e) => setFormData({ ...formData, shootDate: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal uppercase mb-1.5">
                Nội dung cần tư vấn
              </label>
              <textarea
                rows={3}
                placeholder="Mô tả ngắn gọn nhu cầu của bạn"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className={inputClass}
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-charcoal hover:bg-taupe text-ivory font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg uppercase"
              >
                Gửi yêu cầu tư vấn
              </button>
              <p className="text-center text-[11px] text-charcoal-light mt-2">
                * Website chưa tự động gửi yêu cầu. Sau khi điền, bạn sẽ được hướng dẫn gửi thông tin tới Lamis Studio qua hotline hoặc Facebook.
              </p>
            </div>
          </form>
        </div>
      </ScrollReveal>

      {submittedRequest && (
        <BookingSuccessModal
          requestData={submittedRequest}
          onClose={() => setSubmittedRequest(null)}
        />
      )}
    </section>
  );
}

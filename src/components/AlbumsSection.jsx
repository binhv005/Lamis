import React, { useState, useEffect, useCallback } from 'react';
import { albumsData } from '../data/albums';
import { Images, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AutoImage from './AutoImage';

function AlbumLightbox({ album, onClose }) {
  const [index, setIndex] = useState(0);
  const total = album.images.length;
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Album ${album.name}`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full text-ivory hover:bg-ivory/10 transition-colors"
        aria-label="Đóng album"
      >
        <X className="w-6 h-6" />
      </button>
      {total > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-6 p-3 rounded-full text-ivory hover:bg-ivory/10 transition-colors"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-6 p-3 rounded-full text-ivory hover:bg-ivory/10 transition-colors"
            aria-label="Ảnh sau"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}
      <figure className="max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={album.images[index]}
          alt={`${album.name} – ảnh ${index + 1}`}
          className="max-h-[80vh] max-w-full w-auto object-contain"
        />
        <figcaption className="mt-3 text-xs tracking-widest uppercase text-ivory/80">
          {album.name} · {index + 1} / {total}
        </figcaption>
      </figure>
    </div>
  );
}

export default function AlbumsSection({ onSelectConcept }) {
  const [openAlbum, setOpenAlbum] = useState(null);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="albums">
      <ScrollReveal direction="up" duration={800} className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display italic font-normal mb-3 text-charcoal">
          Tìm phong cách phù hợp với bạn.
        </h2>
        <p className="text-charcoal-light text-sm">
          Mỗi concept mở ra một cách thể hiện khác nhau. Hãy khám phá những bộ ảnh hiện có để tìm cảm hứng cho buổi chụp tiếp theo.
        </p>
      </ScrollReveal>

      {/* Album cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {albumsData.map((album, index) => (
          <ScrollReveal
            key={album.id}
            direction={['left', 'up', 'right'][index % 3]}
            delay={(index % 3) * 150}
            duration={800}
            className="rounded-none bg-ivory overflow-hidden flex flex-col justify-between border border-sand-dark/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <button
                type="button"
                onClick={() => setOpenAlbum(album)}
                className="block w-full overflow-hidden relative text-left"
                aria-label={`Xem album ${album.name}`}
              >
                <div className="w-full aspect-[4/5]">
                  <AutoImage
                    images={[album.cover, ...album.images.filter((f) => f !== album.cover)]}
                    alt={`Album ${album.name} – Lamis Studio`}
                    imgClassName="object-cover object-top"
                    startDelay={(index % 3) * 500}
                  />
                </div>
                <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-sm text-ivory text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {album.category}
                </div>
              </button>

              <div className="p-6 pb-0">
                <h3 className="font-serif text-2xl font-bold text-charcoal flex items-center justify-between">
                  <span>{album.name}</span>
                  <Images className="w-5 h-5 text-taupe" />
                </h3>
                <p className="text-xs text-charcoal-light mt-1">{album.images.length} ảnh</p>
              </div>
            </div>

            <div className="mx-6 mb-6 mt-6 pt-4 border-t border-sand-dark/40 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setOpenAlbum(album)}
                className="text-xs font-bold text-charcoal hover:text-taupe transition-colors"
              >
                Xem album
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onSelectConcept) onSelectConcept(album.name);
                  const bookingEl = document.getElementById('booking');
                  if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3.5 py-1.5 rounded-xl bg-sand hover:bg-charcoal hover:text-ivory text-charcoal text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <span>Tư vấn concept</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {openAlbum && <AlbumLightbox album={openAlbum} onClose={() => setOpenAlbum(null)} />}
    </section>
  );
}

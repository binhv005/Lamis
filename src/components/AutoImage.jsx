import React, { useEffect, useState } from 'react';

/**
 * Crossfades through `images` every `interval` ms.
 * The wrapper fills its parent (parent must provide the size / aspect ratio).
 * Images are only mounted once they are needed, and the next one is preloaded.
 */
export default function AutoImage({
  images,
  alt,
  interval = 2000,
  startDelay = 0,
  fade = 800,
  eager = false,
  className = '',
  imgClassName = 'object-cover object-center'
}) {
  const list = Array.isArray(images) ? images : [images];
  const [index, setIndex] = useState(0);
  const [visited, setVisited] = useState(1);

  useEffect(() => {
    if (list.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        if (document.hidden) return;
        setIndex((i) => (i + 1) % list.length);
      }, interval);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.length, interval, startDelay]);

  useEffect(() => {
    setVisited((v) => Math.max(v, Math.min(list.length, index + 1)));
    // Preload the next image so the crossfade never shows a blank frame.
    if (list.length > 1) {
      const preload = new Image();
      preload.src = list[(index + 1) % list.length];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {list.map((src, i) => {
        // Mount a slide only once it has been shown (or is the first one).
        const mounted = i === 0 || i < visited || i === index;
        if (!mounted) return null;
        return (
          <img
            key={src}
            src={src}
            alt={i === index ? alt : ''}
            aria-hidden={i === index ? undefined : true}
            loading={i === 0 && eager ? 'eager' : 'lazy'}
            draggable="false"
            className={`absolute inset-0 w-full h-full transition-opacity ease-in-out ${imgClassName}`}
            style={{ opacity: i === index ? 1 : 0, transitionDuration: `${fade}ms` }}
          />
        );
      })}
    </div>
  );
}

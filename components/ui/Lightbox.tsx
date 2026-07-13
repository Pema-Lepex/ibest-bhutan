"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

// Full-screen image viewer for the experience gallery. Closes on Escape or
// backdrop click; arrow keys step through the set.
export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = index !== null;

  const step = useCallback(
    (dir: number) => {
      if (index === null) return;
      onNavigate((index + dir + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    // Keep the page behind from scrolling while the viewer is open.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, onClose, step]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-80 flex items-center justify-center bg-primary-900/95 p-4 backdrop-blur-sm"
    >
      {/* Backdrop — clicking anywhere outside the image closes the viewer */}
      <button
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-zoom-out"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <figure className="pointer-events-none relative z-0 max-h-full w-full max-w-5xl">
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={1400}
          height={900}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="max-h-[80vh] w-full rounded-2xl object-contain animate-fadeIn"
        />
        <figcaption className="mt-4 text-center text-sm text-white/60">
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}

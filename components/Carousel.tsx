"use client";
import { SlideProps } from "@/types/CommonProps";
import React, { useState, useEffect, useCallback, ReactNode } from "react";
import Image from "next/image";
interface Props {
  slides: SlideProps[];
  children?: ReactNode;
  hideDot?: boolean;
}
const Carousel: React.FC<Props> = ({ slides = [], children, hideDot }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  if (slides.length === 0) return null;

  // Preload the next slide for smoother transitions
  const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="w-full m-auto relative group ">
      <div className="w-full overflow-hidden">
        <div className="w-full overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <React.Fragment key={index}>
              <Image
                src={slide.img}
                alt={slide.title || `Slide ${index + 1}`}
                width={1920}
                height={1080}
                priority={index === 0}
                className={`
                            absolute inset-0
                            w-full h-auto
                            object-cover
                            transition-opacity duration-700 ease-in-out
                            ${index === currentIndex ? "opacity-100" : "opacity-0"}
               `}
              />

              {/* Per-slide unique content — add anything: buttons, styled text, etc. */}
              {slide.content && (
                <div
                  className={`
                            absolute inset-0 z-20
                            transition-opacity duration-700 ease-in-out
                            ${
                              index === currentIndex
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                            }
                          `}
                >
                  <div className="w-full h-full">{slide.content}</div>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Keeps the container height */}
          <Image
            src={slides[0].img}
            alt=""
            width={1920}
            height={1080}
            className="opacity-0"
          />
        </div>
        {/* Hidden preload for the next slide */}
        <link
          rel="preload"
          as="image"
          href={
            typeof slides[nextIndex].img === "string"
              ? slides[nextIndex].img
              : slides[nextIndex].img.src
          }
        />
      </div>

      {hideDot ? (
        <></>
      ) : (
        <div className="absolute flex justify-center py-2 z-100 bottom-0 w-full lg:gap-3 md:gap-2 gap-1">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer lg:text-5xl md:text-5xl text-3xl ${
                index === currentIndex ? "text-accent-500" : "text-gray-400"
              }`}
            >
              &bull;
            </div>
          ))}
        </div>
      )}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-5 pointer-events-none">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="pointer-events-auto hidden group-hover:flex size-10 justify-center items-center text-xl text-white bg-accent-500/20 hover:bg-accent-500 rounded-full"
        >
          &#10094;
        </button>

        {/* Shared content across all slides (optional) */}
        <div className="pointer-events-auto">{children}</div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="pointer-events-auto hidden group-hover:flex size-10 justify-center items-center text-xl text-white bg-accent-500/20 hover:bg-accent-500 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

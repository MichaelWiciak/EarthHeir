// components/ImageGallery.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ImageCaptionOverlay from "./ImageCaption";
import { Slide } from "../types/ui";

interface ImageGalleryProps {
  title: string;
  slides: Slide[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, slides }) => {
  return (
    <div className="w-full mt-12 mb-12">
      {/* if title is "", then dont print it */}
      {title && <h2 className="font-bold text-center">{title}</h2>}

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="relative w-full max-w-4xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={slide.imageUrl}
                alt={slide.alt || `Slide ${index + 1}`}
                fill
                className="object-cover"
              />
              <ImageCaptionOverlay
                heading={slide.heading}
                paragraph={slide.paragraph}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #009eff !important;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;

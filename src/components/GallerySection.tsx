'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  
  const images = [
    { src: "/shiksha-gal-1.jpg" },
    { src: "/shiksha-gal-2.jpg" },
    { src: "/shiksha-gal-3.jpg" },
    { src: "/shiksha-gal-4.jpg" }
  ];

  return (
    <section id="gallery" className="section-wrapper bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="section-badge">
            <Camera className="w-3.5 h-3.5 text-brand-primary" />
            VISUAL GALLERY
          </div>
          <h2 className="section-title">
            Impact in <span className="text-brand-primary">Action.</span>
          </h2>
          <p className="section-subtitle">
            Ground-level moments from our educational camps, book distributions, and student mentorship initiatives across India.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-brand-forest/10 cursor-pointer hover:-translate-y-1"
              onClick={() => setIndex(idx)}
            >
              <Image 
                src={img.src} 
                alt={`Shiksha Sankalp initiative photo ${idx + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-brand-forest text-xs font-bold px-4 py-2 rounded-full transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
      />
    </section>
  );
};

export default GallerySection;

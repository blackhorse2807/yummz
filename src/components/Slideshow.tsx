'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: '/landing-page/corn.jpeg',
    title: 'YUMMZ FOODS PVT LTD',
    subtitle: 'Agro-Food Processing with Global Standards'
  },
  {
    image: '/landing-page/food-processing.jpg',
    title: 'Fresh, Dried, Processed & Packaged',
    subtitle: 'Fruits, Vegetables, Spices, Pulses, Fish & More'
  },
  {
    image: '/landing-page/cold-storage.jpeg',
    title: '2500 MT Multipurpose Cold Storage',
    subtitle: 'Pre-Cooling, Ripening & Temperature-Controlled Chambers'
  },
  {
    image: '/landing-page/quality-control.jpeg',
    title: 'ISO 22000:2005 Certified | FSSAI Registered Manufacturer',
    subtitle: 'Quality, Hygiene & Safety – No Compromises'
  },
  {
    image: '/landing-page/bottled-products.jpg',
    title: 'Tailor-Made Canned & Bottled Products',
    subtitle: 'From Mango Pickle to Tomato Ketchup – We Bottle Your Taste'
  },
  {
    image: '/landing-page/packaged.jpg',
    title: 'Serving Local & Global Markets',
    subtitle: 'Exporter | Importer | Stockist | Wholesale Trader'
  },
  {
    image: '/landing-page/fields.png',
    title: 'Research-Driven & Technology-Backed',
    subtitle: 'We Invest in Innovation So You Get the Best'
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Image Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 opacity-100">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto transition-all duration-500 opacity-100">
          {slides[currentSlide].subtitle}
        </p>
        <p className="text-lg text-yellow-400 font-semibold mt-8">
          &quot;Crafting Taste with Trust, Technology & Tradition&quot;
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow; 
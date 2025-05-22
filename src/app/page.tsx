'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // Array of product images to cycle through
  const productImages = [
    "/images/leechang1.jpg",
    "/images/leechang2.jpg",
    "/images/leechang4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle slide transition
  const slideToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Auto-cycle through images every 3 seconds with slide effect
  useEffect(() => {
    // Start the automatic slideshow
    timerRef.current = setInterval(slideToNext, 3000);
    
    // Cleanup function to clear the interval when component unmounts
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#001434] relative min-h-screen overflow-hidden">
        {/* Left curved shape */}
        <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
          <div className="absolute -left-[30%] top-[-10%] w-[60%] h-[60%] bg-[#11253d] rounded-full opacity-70"></div>
        </div>
        
        {/* Right curved shape */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 overflow-hidden">
          <div className="absolute right-[-5%] bottom-[-20%] w-[70%] h-[70%] bg-[#11253d] rounded-full opacity-60"></div>
        </div>

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            {/* Text Content */}
            <div className="flex flex-col justify-center px-8 py-24 md:py-0 md:pl-8 lg:pl-16">
              <h1 className="text-white text-9xl md:text-7xl lg:text-6xl banner-heading font-bold leading-tight">
                Pure Taste.<br />
                Real Ingredients.
              </h1>
              <p className="text-gray-300 mt-8 text-2xl">
                Processing Industry with 2500 MT<br />
                Multipurpose Cold Storage
              </p>
              <div className="mt-12">
                <Link 
                  href="/tospe" 
                  className="inline-block bg-white text-[#001434] font-semibold py-[12px] px-[25px] text-[15px] rounded-[5px] hover:bg-gray-100 transition-colors"
                >
                  VIEW PRODUCTS
                </Link>
              </div>
            </div>

            {/* Image Slider with Sliding Effect - Auto Only */}
            <div className="relative flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-[#8091a9] rounded-full opacity-20 blur-3xl"></div>
              </div>
              <div className="relative z-10 p-8 md:p-0 flex items-center justify-center w-full">
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
                  <div className="slider-container w-full h-full relative">
                    {productImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                          index === currentImageIndex 
                            ? 'opacity-100 z-10 translate-x-0' 
                            : index === (currentImageIndex + 1) % productImages.length || 
                              (currentImageIndex === productImages.length - 1 && index === 0)
                              ? 'opacity-0 z-0 translate-x-full' 
                              : 'opacity-0 z-0 -translate-x-full'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`YUMMZ FOODS Product ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-gradient-to-b from-white to-[#faf9f6] py-16">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-3 gap-12 items-center px-6">
          {/* Logo */}
          <div className="mx-auto md:mx-0 bg-white p-6 rounded-3xl shadow-xl ring-1 ring-gray-100 w-fit">
            <Image src="/logo-demo.png" alt="Yummz Logo" width={240} height={90} className="object-contain" />
          </div>

          {/* Intro Text */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2a44] leading-tight relative inline-block">
              Welcome to YUMMZ FOODS
              <span className="block h-1 w-24 bg-gradient-to-r from-[#1a2a44] to-[#0a2340] mt-3 mx-auto md:mx-0"></span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[#1a2a44]/80 leading-relaxed">
              For over a century, we have fused <span className="font-semibold text-[#1a2a44]">heritage</span> with
              <span className="font-semibold text-[#1a2a44]"> cutting-edge technology</span> to craft premium spices,
              condiments, and packaged foods trusted by families and professionals worldwide.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#product-range" className="bg-white text-[#1a2a44] font-semibold py-[12px] px-[25px] text-[15px] rounded-[5px] shadow hover:bg-gray-100 transition-colors">
                Explore Products
              </Link>
              <Link href="/about" className="bg-white text-[#1a2a44] font-semibold py-[12px] px-[25px] text-[15px] rounded-[5px]  shadow hover:bg-gray-100 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#0a2340] py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Why Choose Yummz</h2>
        <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-4">
          {/* Natural Ingredients */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/organic.png" alt="Natural" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">100% Natural<br />Ingredients</span>
          </div>

          {/* World-Class Manufacturing */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/factory.png" alt="Manufacturing" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">World-Class<br />Manufacturing</span>
          </div>

          {/* Export Quality Standards */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/export.png" alt="Export" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">Export<br />Quality Standards</span>
          </div>

          {/* Customized Bulk Packaging */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/boxes.png" alt="Packaging" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">Customized<br />Bulk Packaging</span>
          </div>

          {/* Stringent Quality Control */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/qulaity-check.png" alt="Quality Control" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">Stringent<br />Quality Control</span>
          </div>

          {/* Global Export Expertise */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/logistic.png" alt="Global Export" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">Global Export<br />Expertise</span>
          </div>

          {/* State-of-the-Art Processing Units */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/business.png" alt="Processing Units" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">State-of-the-Art<br />Processing Units</span>
          </div>

          {/* Innovation Meets Tradition */}
          <div className="flex flex-col items-center text-center">
            <Image src="/emojis/tradition.png" alt="Innovation" width={64} height={64} className="mb-4" />
            <span className="text-white font-semibold text-sm">Innovation<br />Meets Tradition</span>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section id="product-range" className="bg-[#faf9f6] py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a2a44] text-center mb-10">Our Product Range</h2>
        <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
            <Image src="/infographics/green-chili-pickle.jpg" alt="Green Chili Pickel" width={200} height={200} className="object-contain mb-2" />
            <span className="text-[#1a2a44] font-semibold text-sm text-center">Green Chili Pickel</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
            <Image src="/infographics/synthetic-vinegar.jpg" alt="Synthetic Vineger" width={200} height={200} className="object-contain mb-2" />
            <span className="text-[#1a2a44] font-semibold text-sm text-center">Synthetic Vineger</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
            <Image src="/infographics/sweet-corn-canned.jpg" alt="Sweet Corn" width={200} height={200} className="object-contain mb-2" />
            <span className="text-[#1a2a44] font-semibold text-sm text-center">Sweet Corn</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4">
            <Image src="/infographics/green-chili-sauce.jpg" alt="Green Chili Sauce" width={200} height={200} className="object-contain mb-2" />
            <span className="text-[#1a2a44] font-semibold text-sm text-center">Green Chili Sauce</span>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="#" className="bg-white text-[#1a2a44] font-semibold py-[12px] px-[25px] text-[15px] rounded-[5px] shadow hover:bg-gray-100 transition-colors">
            VIEW PRODUCTS
          </Link>
        </div>
      </section>

      {/* Built on Excellence Section */}
      <section className="relative bg-[#0a2340] bg-cover bg-center py-20" style={{backgroundImage: 'url(/img1yummz.avif)'}}>
        <div className="absolute inset-0 bg-[#0a2340]/85" />
        <div className="relative max-w-[1320px] mx-auto px-4 z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Built on Excellence</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-[15px] leading-7 tracking-normal text-center font-light italic">
              At Yummz Foods, our infrastructure reflects our commitment to quality and efficiency.<br />
              We operate modern, fully automated facilities with strict hygiene and safety protocols.<br />
              Every product is processed and packed in a controlled environment to ensure purity.<br />
              Our systems are designed for high-volume production without compromising standards.<br />
              This foundation of excellence drives our promise of consistency and global trust.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

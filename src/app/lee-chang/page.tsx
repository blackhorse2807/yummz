'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LeeChangPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/leechang2.jpg"
            alt="Lee-Chang Asian Cuisine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-black/50 mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <h1 className="mt-8 text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight">
              <span className="text-red-400">Lee-Chang</span>
            </h1>
            <p className="mt-6 text-xl text-red-50 max-w-2xl mx-auto font-light">
              Authentic Asian flavors for the modern kitchen
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-12 border border-red-50">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-serif text-red-800">Taste of Asia</h2>
            <p className="mt-6 text-lg text-red-700 leading-relaxed font-light text-justify">
              Lee-Chang brings you a carefully curated selection of authentic Asian cuisine products, from savory sauces to noodles and specialty ingredients. Our products are crafted using traditional recipes and premium ingredients to deliver the genuine flavors of Asia to your table.
            </p>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-red-800">Our Product Range</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mt-4"></div>
          <p className="mt-6 text-red-700 max-w-3xl mx-auto">
            Discover our selection of premium Asian cuisine products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src="/landing-page/packaged.jpg" 
                alt="Lee-Chang Noodles"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-red-800">Premium Egg Noodles</h3>
              <p className="mt-2 text-red-700 text-justify">
                Our premium egg noodles are made using traditional techniques and high-quality wheat flour. Perfect for stir-fries, soups, or as a standalone dish, these noodles deliver authentic texture and taste.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-red-800 font-medium">Available in: 200g, 500g</span>
              </div>
            </div>
          </motion.div>

          {/* Product Card 2 */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src="/landing-page/corn.jpeg" 
                alt="Lee-Chang Soy Sauce"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-red-800">Premium Soy Sauce</h3>
              <p className="mt-2 text-red-700 text-justify">
                Our naturally brewed soy sauce is aged to perfection for a rich, complex flavor profile. Made from select soybeans and wheat, it adds depth and umami to any dish, from marinades to dipping sauces.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-red-800 font-medium">Available in: 250ml, 500ml, 1L</span>
              </div>
            </div>
          </motion.div>

          {/* Product Card 3 */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src="/landing-page/quality-control.jpeg" 
                alt="Lee-Chang Stir-Fry Sauce"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-red-800">Signature Stir-Fry Sauce</h3>
              <p className="mt-2 text-red-700 text-justify">
                Our signature stir-fry sauce combines premium soy sauce, aromatic ginger, garlic, and a blend of traditional spices. This versatile sauce is perfect for quick and delicious stir-fries with authentic Asian flavor.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-red-800 font-medium">Available in: 250ml, 500ml</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Category */}
      <div className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-red-800">Featured Category: Ready-to-Cook</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 mx-auto mt-4"></div>
            <p className="mt-6 text-red-700 max-w-3xl mx-auto">
              Our premium ready-to-cook meal kits bring authentic Asian dishes to your kitchen in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif font-bold text-red-800 mb-6">Restaurant Quality, Home Convenience</h3>
              <div className="space-y-4 text-justify">
                <p className="text-red-700">
                  Lee-Chang&apos;s ready-to-cook meal kits bring restaurant-quality Asian cuisine to your home kitchen with minimal preparation and maximum flavor. Each kit contains pre-measured, premium ingredients and our signature sauces.
                </p>
                <p className="text-red-700">
                  Developed by culinary experts with authentic recipes from across Asia, our meal kits make it easy to create delicious dishes like Kung Pao Chicken, Mongolian Beef, and Vegetable Stir-Fry in just minutes.
                </p>
                <p className="text-red-700">
                  Our innovative packaging keeps ingredients fresh while reducing food waste and preparation time, making gourmet Asian cooking accessible for everyday meals.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-red-800 font-medium mb-2">Kung Pao Chicken</h4>
                  <p className="text-red-600 text-sm">Ready in 15 minutes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-red-800 font-medium mb-2">Mongolian Beef</h4>
                  <p className="text-red-600 text-sm">Ready in 20 minutes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-red-800 font-medium mb-2">Vegetable Stir-Fry</h4>
                  <p className="text-red-600 text-sm">Ready in 10 minutes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-red-800 font-medium mb-2">Sweet & Sour Pork</h4>
                  <p className="text-red-600 text-sm">Ready in 18 minutes</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/landing-page/food-processing.jpg"
                alt="Lee-Chang Ready-to-Cook Meals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-red-100 text-lg font-semibold">Premium ready-to-cook meal kits for authentic Asian cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-red-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-4 text-red-800">Premium Ingredients</h3>
            <p className="text-red-700 text-justify">
              We source only the highest quality ingredients, working directly with trusted suppliers to ensure authenticity and freshness. Our strict procurement standards guarantee that every Lee-Chang product delivers exceptional flavor.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-red-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-4 text-red-800">Authentic Recipes</h3>
            <p className="text-red-700 text-justify">
              Our culinary team has spent years perfecting traditional Asian recipes, honoring centuries-old techniques while adapting them for the modern kitchen. Each Lee-Chang product preserves the authentic flavors of its cultural origin.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-red-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-4 text-red-800">Quality Assurance</h3>
            <p className="text-red-700 text-justify">
              Our ISO 22000:2005 certified facility in Khamarshimulia, Nadia implements rigorous quality control standards throughout production. Every batch undergoes multiple testing phases to ensure consistency, safety, and exceptional taste.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-500 to-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Bring Home the Authentic Taste of Asia</h2>
          <p className="text-white max-w-3xl mx-auto mb-10 opacity-90">
            Discover the Lee-Chang difference with our premium Asian cuisine products. Perfect for home cooks and professional chefs alike.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/contact" className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300">
              Order Now
            </a>
            <a href="#" className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-white/10 transition-all transform hover:scale-105 duration-300">
              View Recipes
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-serif font-bold text-red-800 text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="/images/leechang1.jpg" alt="Lee-Chang 1" width={400} height={300} className="rounded-lg" />
          <Image src="/images/leechang2.jpg" alt="Lee-Chang 2" width={400} height={300} className="rounded-lg" />
          <Image src="/images/leechang4.jpg" alt="Lee-Chang 4" width={400} height={300} className="rounded-lg" />
          <Image src="/images/leechang5.jpeg" alt="Lee-Chang 5" width={400} height={300} className="rounded-lg" />
          <Image src="/images/leechang.png" alt="Lee-Chang Logo" width={400} height={300} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
} 
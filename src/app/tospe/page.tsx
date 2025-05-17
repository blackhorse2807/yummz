'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TOSPEPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/landing-page/food-processing.jpg"
            alt="TOSPE Brand"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-800/70 to-black/50 mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <h1 className="mt-8 text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight">
              <span className="text-amber-400">TOSPE</span>
            </h1>
            <p className="mt-6 text-xl text-amber-50 max-w-2xl mx-auto font-light">
              Premium quality traditional spices with authentic flavors
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-12 border border-amber-50">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-serif text-amber-800">Authentic Flavors</h2>
            <p className="mt-6 text-lg text-amber-700 leading-relaxed font-light text-justify">
              TOSPE brings you the finest collection of traditional Indian spices, carefully sourced and processed to preserve their authentic flavors and aromatic properties. Our spices are cultivated using sustainable farming practices and processed in our state-of-the-art facility to ensure maximum freshness and quality.
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
          <h2 className="text-3xl font-serif font-bold text-amber-800">Our Spice Collection</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mt-4"></div>
          <p className="mt-6 text-amber-700 max-w-3xl mx-auto">
            Discover our premium selection of traditional and exotic spices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src="/landing-page/corn.jpeg" 
                alt="TOSPE Turmeric Powder"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-amber-800">Premium Turmeric Powder</h3>
              <p className="mt-2 text-amber-700 text-justify">
                Our premium turmeric powder is sourced from the finest turmeric roots, known for its vibrant color and earthy flavor. Rich in curcumin, it adds both taste and health benefits to your dishes.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-amber-800 font-medium">Available in: 100g, 250g, 500g</span>
              </div>
            </div>
          </motion.div>

          {/* Product Card 2 */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src="/landing-page/dairy-machinery.jpg" 
                alt="TOSPE Garam Masala"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-amber-800">Traditional Garam Masala</h3>
              <p className="mt-2 text-amber-700 text-justify">
                Our traditional garam masala is a perfect blend of 11 aromatic spices, carefully roasted and ground to perfection. This authentic blend adds depth and warmth to curries, stews, and rice dishes.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-amber-800 font-medium">Available in: 50g, 100g, 200g</span>
              </div>
            </div>
          </motion.div>

          {/* Product Card 3 */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src="/landing-page/packaged.jpg" 
                alt="TOSPE Red Chili Powder"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-amber-800">Red Chili Powder</h3>
              <p className="mt-2 text-amber-700 text-justify">
                Made from select red chilies grown in the fertile soil of West Bengal, our red chili powder delivers the perfect balance of heat and flavor. Each batch is carefully tested for color, aroma, and spice level.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-amber-800 font-medium">Available in: 100g, 250g, 500g</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quality Commitment */}
      <div className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-6">Our Quality Commitment</h2>
              <div className="space-y-4 text-justify">
                <p className="text-amber-700">
                  At TOSPE, we are committed to delivering the highest quality spices to your kitchen. Our integrated farming and processing approach ensures complete traceability from farm to table.
                </p>
                <p className="text-amber-700">
                  Every batch of TOSPE spices undergoes rigorous quality checks, including testing for purity, color, moisture content, and volatile oil content. We use advanced techniques to preserve the natural oils and flavors of our spices.
                </p>
                <p className="text-amber-700">
                  Our processing facility in Khamarshimulia, Nadia adheres to ISO 22000:2005 standards, ensuring that all our products meet international food safety protocols.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-amber-700">No artificial colors or preservatives</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-amber-700">Sustainably sourced ingredients</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-amber-700">Advanced processing techniques</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2 text-amber-700">Stringent quality control</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/landing-page/quality-control.jpeg"
                alt="TOSPE Quality Control"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-amber-100 text-lg font-semibold">Our state-of-the-art quality testing lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-amber-800 mb-6">Experience the TOSPE Difference</h2>
        <p className="text-amber-700 max-w-3xl mx-auto mb-10">
          Ready to elevate your culinary creations with TOSPE&apos;s premium spices? Explore our full range of products or contact us for wholesale inquiries.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300">
            Contact for Orders
          </a>
          <a href="#" className="inline-block px-8 py-3 bg-white border-2 border-amber-500 text-amber-600 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-amber-50 transition-all transform hover:scale-105 duration-300">
            Download Catalog
          </a>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-serif font-bold text-amber-800 text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="/images/topse.png" alt="TOSPE Logo" width={400} height={300} className="rounded-lg" />
          <Image src="/images/img1yummz.avif" alt="Gallery Image 1" width={400} height={300} className="rounded-lg" />
          <Image src="/images/img2yummz.avif" alt="Gallery Image 2" width={400} height={300} className="rounded-lg" />
          <Image src="/images/img3yummz.avif" alt="Gallery Image 3" width={400} height={300} className="rounded-lg" />
          <Image src="/images/img4yummz.avif" alt="Gallery Image 4" width={400} height={300} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
} 
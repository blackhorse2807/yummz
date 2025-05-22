"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className=" bg-white text-justify">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/landing-page/food-processing.jpg"
            alt="YUMMZ FOODS Heritage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a44]/70 to-black/50 mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1a2a44]"></div>
              <h1 className="mt-8 text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight">
                About <span className="text-[#ffffff]">YUMMZ</span>
              </h1>
              <p className="mt-6 text-xl text-white max-w-2xl mx-auto font-light leading-relaxed">
                A century of culinary excellence, blending tradition with innovation since 1920
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section with Custom Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-12 border border-[#1a2a44]/10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-serif text-[#1a2a44]">Est. 1920</h2>
            <p className="mt-6 text-lg text-[#1a2a44] leading-relaxed font-light">
              YUMMZ FOODS brings together a remarkable legacy of culinary expertise with modern innovation. 
              Our journey spans four generations, with each contributing their passion and knowledge to 
              create an exceptional range of products that honor our heritage while embracing the future.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center">
                <div className="h-px w-12 bg-[#1a2a44]"></div>
                <svg className="h-5 w-5 mx-3 text-[#1a2a44]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="h-px w-12 bg-[#1a2a44]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Heritage Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="inline-block">
              <h2 className="text-3xl font-serif font-bold text-[#1a2a44] mb-2">Our Heritage</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#1a2a44] to-[#0a2340]"></div>
            </div>
            <p className="text-[#1a2a44] mb-4 leading-relaxed font-light">
              The YUMMZ FOODS legacy began in the 1920s during the time of undivided Bengal in British India. Late Nasiram Saha, the great grandfather of Mr. Sabyasachi Saha, established a thriving wholesale business of fruits and dry fruits in Ishwardi of Pabna district (now in Bangladesh), which was then a famous railway junction and business hub.
            </p>
            <p className="text-[#1a2a44]/80 mb-4 leading-relaxed font-light">
              The family owned prestigious distributorships of famous bakeries like Britannia, Lily, and Santosh. Later, Mr. Saha&apos;s grandfather, Late Hiralal Saha, expanded the business to Simulia Kumarbhoge village in the Dhaka district.
            </p>
            <p className="text-[#1a2a44]/80 leading-relaxed font-light">
              This rich heritage of quality and tradition continues to inspire YUMMZ FOODS PVT LTD today, as we combine time-honored techniques with modern technology to deliver exceptional food products to markets around the world.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/landing-page/corn.jpeg"
              alt="Heritage of Quality"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2340]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-[#1a2a44]/80 backdrop-blur-sm px-6 py-4 rounded-lg inline-block">
                <p className="text-white font-serif text-2xl">Est. 1920</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modern Journey Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInUp}
            className="order-2 md:order-1 relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/landing-page/food-processing.jpg"
              alt="Modern Journey"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-amber-800/80 backdrop-blur-sm px-6 py-4 rounded-lg inline-block">
                <p className="text-white font-serif text-2xl">Innovation & Excellence</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="inline-block">
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-2">Our Modern Journey</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-amber-500"></div>
            </div>
            <p className="text-amber-800 mb-4 leading-relaxed font-light">
              In 1993, Mr. Sabyasachi Saha, after graduating in Bio-Science from Krishnanagar College, began his entrepreneurial journey in healthcare, establishing a nursing home with his wife, Mrs. Dipanwita Saha.
            </p>
            <p className="text-amber-700 mb-4 leading-relaxed font-light">
              By 1999, he expanded into agro-eco-farming, cultivating herbs, medicinal plants, and extracting aromatic essential oils. They established dairy and goat farming operations in Pedong near Kalimpong in the Himalayan region of West Bengal, later adding mushroom cultivation to their portfolio.
            </p>
            <p className="text-amber-700 leading-relaxed font-light">
              Eventually, Mr. Saha realized his dream project – establishing a full-fledged food processing unit with an integrated cold chain in his native Nadia district, now a recognized export processing zone for Baby and Sweet Corn and vegetables by APEDA, Ministry of Commerce, Govt. of India.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission and Vision Section */}
      <div className="mt-32 py-24 bg-[#faf9f6]">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-serif font-bold text-[#1a2a44]">Our Guiding Principles</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#1a2a44] to-[#0a2340] mx-auto mt-4"></div>
              <p className="mt-6 text-[#1a2a44]/80 max-w-3xl mx-auto font-light">
                The philosophies that drive every decision we make
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-12 rounded-2xl shadow-xl border border-[#1a2a44]/10 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="text-[#1a2a44] bg-[#faf9f6] p-5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a2a44] text-center mb-6">Our Mission</h3>
              <p className="text-[#1a2a44]/80 text-center leading-relaxed font-light">
                To deliver exceptional quality processed food products that honor our heritage while embracing innovation. We strive to support local farmers, promote sustainable agricultural practices, and bring the authentic flavors of India to global markets while maintaining the highest standards of quality and safety.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-12 rounded-2xl shadow-xl border border-[#1a2a44]/10 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="text-[#1a2a44] bg-[#faf9f6] p-5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a2a44] text-center mb-6">Our Vision</h3>
              <p className="text-[#1a2a44]/80 text-center leading-relaxed font-light">
                To be a globally recognized leader in food processing innovation that bridges traditional knowledge with cutting-edge technology. We aim to create a sustainable ecosystem that benefits farmers, consumers, and the environment while preserving and promoting the rich culinary heritage of India.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="text-center mb-20">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-serif font-bold text-[#1a2a44]">Why Choose YUMMZ FOODS?</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#1a2a44] to-[#0a2340] mx-auto mt-4"></div>
            <p className="mt-6 text-[#1a2a44]/80 max-w-3xl mx-auto font-light">
              Our commitment to excellence is reflected in every aspect of our business
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#1a2a44]/10 hover:border-[#1a2a44]/20"
          >
            <div className="text-[#1a2a44] bg-[#faf9f6] p-4 rounded-xl inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3 text-[#1a2a44]">Century-old Legacy</h3>
            <p className="text-[#1a2a44]/80 font-light leading-relaxed">Our four-generation heritage in food commerce brings unparalleled expertise and time-tested methods to every product we create.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#1a2a44]/10 hover:border-[#1a2a44]/20"
          >
            <div className="text-[#1a2a44] bg-[#faf9f6] p-4 rounded-xl inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3 text-[#1a2a44]">Scientific Approach</h3>
            <p className="text-[#1a2a44]/80 font-light leading-relaxed">Led by a Bio-Science graduate, we combine traditional knowledge with scientific principles for optimal flavor, nutrition, and safety.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#1a2a44]/10 hover:border-[#1a2a44]/20"
          >
            <div className="text-[#1a2a44] bg-[#faf9f6] p-4 rounded-xl inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3 text-[#1a2a44]">Local Sourcing</h3>
            <p className="text-[#1a2a44]/80 font-light leading-relaxed">We source most raw materials within a 50km radius, ensuring freshness while supporting local farmers and reducing our carbon footprint.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#1a2a44]/10 hover:border-[#1a2a44]/20"
          >
            <div className="text-[#1a2a44] bg-[#faf9f6] p-4 rounded-xl inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3 text-[#1a2a44]">ISO 22000:2005 Certified</h3>
            <p className="text-[#1a2a44]/80 font-light leading-relaxed">Our stringent quality management systems ensure food safety and consistency at every stage of processing, packaging, and distribution.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#1a2a44]/10 hover:border-[#1a2a44]/20"
          >
            <div className="text-[#1a2a44] bg-[#faf9f6] p-4 rounded-xl inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3 text-[#1a2a44]">Diverse Experience</h3>
            <p className="text-[#1a2a44]/80 font-light leading-relaxed">Our expertise spans dairy, goat farming, mushroom cultivation, and medicinal plant extraction – knowledge that enhances our food processing capabilities.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#1a2a44]/10 hover:border-[#1a2a44]/20"
          >
            <div className="text-[#1a2a44] bg-[#faf9f6] p-4 rounded-xl inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3 text-[#1a2a44]">Integrated Cold Chain</h3>
            <p className="text-[#1a2a44]/80 font-light leading-relaxed">Our 2500 MT multipurpose cold storage with specialized chambers ensures optimal preservation from farm to consumer.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Leadership Section */}
      <div className="py-32 bg-amber-50">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-20">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-serif font-bold text-amber-800">Our Leadership</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mt-4"></div>
              <p className="mt-6 text-amber-700 max-w-3xl mx-auto font-light">
                Visionary leaders with decades of experience in agriculture and food processing
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="relative h-[500px]">
                <Image
                  src="/landing-page/quality-control.jpeg"
                  alt="Mr. Sabyasachi Saha"
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-900/50 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="border-l-4 border-amber-400 pl-6">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">Mr. Sabyasachi Saha</h3>
                    <p className="text-amber-200 font-medium text-xl">Promoter Director</p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <p className="text-amber-700 font-light leading-relaxed text-lg">
                  Bio-Science graduate with extensive experience in healthcare, agro-farming, and food processing. A visionary entrepreneur who transformed a family legacy into a modern agro-processing enterprise.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="relative h-[500px]">
                <Image
                  src="/landing-page/packaged.jpg"
                  alt="Mrs. Dipanwita Saha"
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-900/50 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="border-l-4 border-amber-400 pl-6">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">Mrs. Dipanwita Saha</h3>
                    <p className="text-amber-200 font-medium text-xl">Promoter Director</p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <p className="text-amber-700 font-light leading-relaxed text-lg">
                  Post-graduate with extensive experience in accounts and office management. Brings crucial financial and operational expertise to YUMMZ FOODS while also spearheading mushroom cultivation initiatives.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Closing Statement */}
      <div className="bg-amber-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-100 text-xl font-light italic">
            &ldquo;At YUMMZ FOODS, we don&apos;t just process food. We preserve heritage, nurture traditions, and create experiences that connect generations.&rdquo;
          </p>
          <div className="mt-6 text-amber-300 font-serif text-sm tracking-wider uppercase">Mr. Sabyasachi Saha, Founder & CEO</div>
        </div>
      </div>
    </div>
  );
} 

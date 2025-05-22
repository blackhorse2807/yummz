'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-[#1a2a44] sticky top-0 z-50 shadow-md">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo-demo.png" 
                alt="YUMMZ FOODS Logo" 
                width={140} 
                height={140} 
                className="mr-3"
              />
              {/* <span className="text-xl font-bold text-[#1a2a44]">YUMMZ FOODS</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/lee-chang" className="uppercase text-[15px] font-semibold hover:text-[#0a2340] transition-colors">
              LEECHANG
            </Link>
            <Link href="/tospe" className="uppercase text-[15px] font-semibold hover:text-[#0a2340] transition-colors">
              TOSPE
            </Link>
            <Link href="/about" className="uppercase text-[15px] font-semibold hover:text-[#0a2340] transition-colors">
              COMPANY
            </Link>
            <Link href="/contact" className="uppercase text-[15px] font-semibold hover:text-[#0a2340] transition-colors">
              CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1a2a44] hover:text-[#0a2340] hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link 
              href="/lee-chang" 
              className="block py-2 px-3 rounded-md uppercase text-[15px] font-semibold hover:bg-gray-100 hover:text-[#0a2340]"
              onClick={() => setMobileMenuOpen(false)}
            >
              LEECHANG
            </Link>
            <Link 
              href="/tospe" 
              className="block py-2 px-3 rounded-md uppercase text-[15px] font-semibold hover:bg-gray-100 hover:text-[#0a2340]"
              onClick={() => setMobileMenuOpen(false)}
            >
              TOSPE
            </Link>
            <Link 
              href="/about" 
              className="block py-2 px-3 rounded-md uppercase text-[15px] font-semibold hover:bg-gray-100 hover:text-[#0a2340]"
              onClick={() => setMobileMenuOpen(false)}
            >
              COMPANY
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 px-3 rounded-md uppercase text-[15px] font-semibold hover:bg-gray-100 hover:text-[#0a2340]"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

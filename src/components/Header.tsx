'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-yellow-400 to-amber-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-100 transition-colors">
                YUMMZ FOODS
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link href="/" className="inline-flex items-center px-3 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-yellow-100 hover:border-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="inline-flex items-center px-3 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-yellow-100 hover:border-white transition-colors">
              About Us
            </Link>
            <Link href="/tospe" className="inline-flex items-center px-3 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-yellow-100 hover:border-white transition-colors">
              TOSPE
            </Link>
            <Link href="/lee-chang" className="inline-flex items-center px-3 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-yellow-100 hover:border-white transition-colors">
              Lee-Chang
            </Link>
            <Link href="/contact" className="inline-flex items-center px-3 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:text-yellow-100 hover:border-white transition-colors">
              Contact Us
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-100 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-500">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-white text-base font-medium text-white hover:bg-yellow-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-yellow-400 hover:border-white hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/tospe" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-yellow-400 hover:border-white hover:text-white transition-colors">
              TOSPE
            </Link>
            <Link href="/lee-chang" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-yellow-400 hover:border-white hover:text-white transition-colors">
              Lee-Chang
            </Link>
            <Link href="/contact" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-yellow-400 hover:border-white hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
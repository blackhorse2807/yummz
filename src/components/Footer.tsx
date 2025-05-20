'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Column */}
          <div className="flex flex-col">
              <Image 
              src="/yummz-white.png" 
              alt="Yummz Logo" 
              width={160}
                height={50} 
              className="mb-6"
              />
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              Delivering quality, flavor,<br />
              and freshness through<br />
              every product we make.
            </p>

            {/* Social Media */}
            <div className="flex space-x-2">
              <Link 
                href="#" 
                aria-label="Facebook" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5998]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                </svg>
              </Link>
              <Link 
                href="#" 
                aria-label="Twitter" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52833 8.31345 7.04328 7.56059C5.55822 6.80773 4.24887 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82801 10.022 3.1789 9.84271 2.598 9.51993V9.57193C2.5982 10.5376 2.93237 11.4735 3.54385 12.221C4.15533 12.9684 5.00648 13.4814 5.953 13.6729C5.33661 13.84 4.69031 13.8646 4.063 13.7449C4.32987 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.97 16.6499C7.10248 17.3313 6.10918 17.8349 5.04689 18.1321C3.98459 18.4293 2.87542 18.5142 1.779 18.3819C3.6907 19.6114 5.91599 20.264 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" />
                </svg>
              </Link>
              <Link 
                href="#" 
                aria-label="Instagram" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E1306C]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
              </Link>
              <Link 
                href="#" 
                aria-label="LinkedIn" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 5.00002C6.94 5.97002 6.15 6.76002 5.19 6.76002C4.23 6.76002 3.44 5.97002 3.44 5.00002C3.44 4.03002 4.23 3.24002 5.19 3.24002C6.15 3.24002 6.94 4.03002 6.94 5.00002Z" />
                  <path d="M7 8.48002H3.5V21H7V8.48002Z" />
                  <path d="M13.3 8.48002H9.80005V21H13.3V14.43C13.3 10.77 18.1 10.43 18.1 14.43V21H21.6V13.07C21.6 6.90002 14.9 7.13002 13.3 10.16V8.48002Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/tospe" className="text-gray-400 hover:text-white transition-colors">
                  Tospe
                </Link>
              </li>
              <li>
                <Link href="/lee-chang" className="text-gray-400 hover:text-white transition-colors">
                  LeeChang
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-6">Locations</h3>
            <div className="w-full h-[130px] bg-gray-300 rounded-sm overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=23.4341618,88.4894105&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Yummz Foods Location"
              />
            </div>
          </div>
        </div>
          </div>

      {/* Copyright Footer */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">{currentYear} Copyright Yummz Foods.</p>
      </div>
    </footer>
  );
};

export default Footer; 
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/khaataicon.png"
              alt="Khaatawise Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900">Khaatawise</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium text-sm">Features</a>
            <a href="#download" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium text-sm">Download</a>
            <a href="#about" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium text-sm">About</a>
          </div>

          {/* Desktop Download Button */}
          <div className="hidden lg:block">
            <a
              href="#download"
              className="px-4 sm:px-6 py-2 bg-[#20B2AA] text-white rounded-lg hover:bg-[#1a9b94] transition-colors font-semibold text-sm shadow-md"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#download"
              className="px-3 py-1.5 bg-[#20B2AA] text-white rounded-lg hover:bg-[#1a9b94] transition-colors font-semibold text-xs shadow-md"
            >
              Download
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-[#20B2AA] focus:outline-none focus:ring-2 focus:ring-[#20B2AA] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-gray-100">
            <a
              href="#features"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:text-[#20B2AA] hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#download"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:text-[#20B2AA] hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Download
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:text-[#20B2AA] hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#16161a]/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={theme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg'}
              alt="Khaatawise Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Khaatawise</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium text-sm">Features</a>
            <a href="#download" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium text-sm">Download</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium text-sm">About</a>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <a
              href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/f9ed5cc9-9854-4a4e-9cad-fa0fc41b8a52"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 bg-primary dark:bg-accent text-white rounded-lg hover:bg-primary-dark dark:hover:bg-primary transition-colors font-semibold text-sm shadow-md"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <a
              href="https://expo.dev/accounts/safersavvy12/projects/khaata-app/builds/f9ed5cc9-9854-4a4e-9cad-fa0fc41b8a52"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-primary dark:bg-accent text-white rounded-lg hover:bg-primary-dark dark:hover:bg-primary transition-colors font-semibold text-xs shadow-md"
            >
              Download
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent rounded-lg transition-colors"
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
          <div className="py-4 space-y-3 border-t border-gray-100 dark:border-gray-800">
            <a
              href="#features"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#download"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors font-medium"
            >
              Download
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors font-medium"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

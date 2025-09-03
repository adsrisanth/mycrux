"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Logo from '../assets/logo.png'

interface NavigationProps {
  currentPage?: 'home' | 'privacy' | 'terms' | 'contact' | 'waitlist' | 'info' | 'categories' | 'cities';
}

const Navigation = ({ currentPage = 'home' }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-black/20 backdrop-blur-sm bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={Logo} 
              alt="Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10" 
            />
            <span className="text-black text-2xl sm:text-3xl font-bold tracking-wide">mycrux.</span>
          </Link>
          
          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden sm:flex items-center space-x-4 text-xs sm:text-sm">
            <Link 
              href="/" 
              className={`transition-colors duration-300 ${
                currentPage === 'home' 
                  ? 'text-black border-b border-black pb-1 font-semibold' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Info
            </Link>
            <Link 
              href="/cities" 
              className={`transition-colors duration-300 ${
                currentPage === 'cities' 
                  ? 'text-black border-b border-black pb-1 font-semibold' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Cities
            </Link>
            <Link 
              href="/waitlist" 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold"
            >
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex items-center space-x-2">
            <Link 
              href="/waitlist" 
              className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold text-sm"
            >
              Join Waitlist
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu Dropdown */}
        <div className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-black/20 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-lg">
            <nav className="flex flex-col py-6 px-4 space-y-1">
              <Link 
                href="/" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === 'home' 
                    ? 'text-black border-l-4 border-black bg-gray-50 font-medium' 
                    : 'text-black hover:text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Info</span>
                </span>
              </Link>
              <Link 
                href="/cities" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === 'cities' 
                    ? 'text-black border-l-4 border-black bg-gray-50 font-medium' 
                    : 'text-black hover:text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Cities</span>
                </span>
              </Link>
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link 
                  href="/waitlist" 
                  className="block w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Waitlist
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
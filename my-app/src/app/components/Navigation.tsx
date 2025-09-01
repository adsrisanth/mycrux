"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from '../assets/logo.png'

interface NavigationProps {
  currentPage?: 'home' | 'privacy' | 'terms' | 'contact' | 'waitlist' | 'info' | 'categories';
}

const Navigation = ({ currentPage = 'home' }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-black/20 backdrop-blur-sm bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src={Logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-black text-2xl sm:text-3xl font-bold tracking-wide">mycrux.</span>
          </Link>
          
          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden sm:flex items-center space-x-6 text-xs sm:text-sm">
            <Link 
              href="/info" 
              className={`transition-colors duration-300 ${
                currentPage === 'info' 
                  ? 'text-black border-b border-black pb-1 font-semibold' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Info
            </Link>
            <Link 
              href="/waitlist"
              className="bg-black text-white text-sm py-2 px-4 rounded-md hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl border-2 border-black hover:border-gray-800"
            >
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex items-center space-x-3">
            <Link 
              href="/waitlist"
              className="bg-black text-white text-xs py-2 px-3 rounded-md hover:bg-gray-800 transition-all duration-300 font-medium border-2 border-black hover:border-gray-800"
            >
              Join Waitlist
            </Link>
            
            {/* Enhanced Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 p-1 rounded-lg hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0 scale-0' : ''
              }`}></span>
              <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
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
                href="/info" 
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === 'info' 
                    ? 'text-black border-l-4 border-black bg-gray-50 font-medium' 
                    : 'text-black hover:text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Info</span>
                </span>
              </Link>
              {/* Mobile-specific waitlist button */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link 
                  href="/waitlist"
                  className="block w-full bg-black text-white text-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium border-2 border-black hover:border-gray-800"
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

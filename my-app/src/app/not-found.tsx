"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Logo from './assets/logodark.png';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-black rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black rounded-full animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-black rounded-full animate-ping opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-black rounded-full animate-ping opacity-20" style={{animationDelay: '3s'}}></div>
      </div>

      <Navigation currentPage="home" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 xs:space-y-6 sm:space-y-8 max-w-2xl mx-auto">
          {/* Logo with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <Image 
              src={Logo} 
              alt="Logo" 
              className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 mx-auto drop-shadow-2xl animate-float" 
            />
          </div>

          {/* 404 Error */}
          <div className="space-y-2 xs:space-y-4">
            <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <div className="w-16 xs:w-20 sm:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-black to-gray-600 mx-auto rounded-full"></div>
          </div>

          {/* Error message */}
          <div className="space-y-4 xs:space-y-6">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-black">
              Page Not Found
            </h2>
            <p className="text-black text-sm xs:text-base sm:text-lg max-w-md mx-auto leading-relaxed px-2">
              Oops! The page you're looking for seems to have wandered off. Don't worry, even the best explorers sometimes take a wrong turn.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center items-center pt-4 xs:pt-6">
            <Link 
              href="/"
              className="w-full sm:w-auto bg-black text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold text-sm xs:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            <Link 
              href="/cities"
              className="w-full sm:w-auto border-2 border-black text-black px-6 xs:px-8 py-3 xs:py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold text-sm xs:text-base"
            >
            Explore Cities
            </Link>
          </div>

          {/* Helpful links */}
          <div className="pt-6 xs:pt-8 border-t border-gray-200 w-full">
            <p className="text-gray-600 text-xs xs:text-sm mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-3 xs:gap-4 text-xs xs:text-sm">
              <Link href="/info" className="text-black hover:text-gray-600 transition-colors duration-300 underline">
                About Us
              </Link>
              <Link href="/contact" className="text-black hover:text-gray-600 transition-colors duration-300 underline">
                Contact
              </Link>
              <Link href="/waitlist" className="text-black hover:text-gray-600 transition-colors duration-300 underline">
                Join Waitlist
              </Link>
              <Link href="/privacy" className="text-black hover:text-gray-600 transition-colors duration-300 underline">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer currentPage="home" />

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;

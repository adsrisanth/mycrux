"use client";

import Image from "next/image";
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Logo from './assets/logodark.png'
import Link from 'next/link';

const Home = () => {
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

          {/* Main heading with gradient text */}
          <div className="space-y-2 xs:space-y-4">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            <div className="w-16 xs:w-20 sm:w-24 h-0.5 xs:h-1 bg-gradient-to-r from-black to-gray-600 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-black text-sm xs:text-base sm:text-lg md:text-xl max-w-md mx-auto leading-relaxed px-2">
            Something extraordinary is brewing. Stay tuned for the unveiling.
          </p>

          {/* Join Waitlist Button */}
          <div className="pt-2 xs:pt-4">
            <Link 
              href="/waitlist"
              className="inline-block bg-black text-white text-sm xs:text-base sm:text-lg md:text-xl py-2 xs:py-3 px-4 xs:px-6 sm:px-8 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl border-2 border-black hover:border-gray-800"
            >
              Join the Waitlist
            </Link>
          </div>

          {/* Animated dots */}
          <div className="flex justify-center space-x-1 xs:space-x-2">
            <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-black rounded-full animate-bounce"></div>
            <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-black rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-black rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-20 xs:w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
      </main>

      <Footer currentPage="home" />
    </div>
  );
};

export default Home;

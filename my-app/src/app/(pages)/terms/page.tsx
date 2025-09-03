"use client";

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const Terms = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  // Handle smooth scrolling to sections
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  // Throttle function for performance
  const throttle = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return function (this: any, ...args: any[]) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  useEffect(() => {
    const sections = [
      'acceptance',
      'service-description', 
      'user-eligibility',
      'payment-terms',
      'intellectual-property',
      'data-protection',
      'liability',
      'dispute-resolution',
      'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -30% 0px'
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add throttled scroll listener as fallback for contact section
    const handleScroll = throttle(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        const rect = contactElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If contact section is visible in viewport, activate it
        if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.3) {
          setActiveSection('contact');
        }
      }
    }, 100); // Throttle to 100ms

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="bg-white scroll-smooth">
      <Navigation currentPage="terms" />
      <main className="pt-20">
        {/* Hero Section - Nike Style */}
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Terms of Service
            </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Please read these terms carefully before using our services. By using mycrux, you agree to be bound by these terms.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white text-black px-4 py-2 rounded-full">Legal Compliance</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">User Rights</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Transparent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Amazon Style */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation - Amazon Style */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-black mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <button 
                    onClick={() => scrollToSection('acceptance')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'acceptance' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Acceptance of Terms
                  </button>
                  <button 
                    onClick={() => scrollToSection('service-description')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'service-description' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Service Description
                  </button>
                  <button 
                    onClick={() => scrollToSection('user-eligibility')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'user-eligibility' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    User Eligibility
                  </button>
                  <button 
                    onClick={() => scrollToSection('payment-terms')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'payment-terms' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Payment Terms
                  </button>
                  <button 
                    onClick={() => scrollToSection('intellectual-property')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'intellectual-property' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Intellectual Property
                  </button>
                  <button 
                    onClick={() => scrollToSection('data-protection')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'data-protection' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Data Protection
                  </button>
                  <button 
                    onClick={() => scrollToSection('liability')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'liability' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Liability
                  </button>
                  <button 
                    onClick={() => scrollToSection('dispute-resolution')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'dispute-resolution' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Dispute Resolution
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'contact' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Contact Us
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <p className="text-sm text-gray-600 mb-0">
                    <strong>Last Updated:</strong> December 2024
                  </p>
          </div>

                <section id="acceptance" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Acceptance of Terms</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                By accessing and using mycrux services, you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to abide by these terms, please do 
                not use this service.
              </p>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                <strong>Legal Basis:</strong> This agreement is governed by the Indian Contract Act, 1872, 
                and the Information Technology Act, 2000, along with the Information Technology (Reasonable 
                Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </p>
                    </div>
                  </div>
            </section>

                <section id="service-description" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Service Description</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                mycrux is an e-commerce platform providing premium lifestyle products including fashion, 
                beauty, wellness, and lifestyle items. Our services include:
              </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Online marketplace for curated products</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Membership-based premium services</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">AI-powered product recommendations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">3DStructFit technology for size recommendations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Customer support and delivery services</span>
                      </div>
                    </div>
                  </div>
            </section>

                <section id="user-eligibility" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">User Eligibility and Registration</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                To use our services, you must:
              </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Age Requirement</h4>
                          <p className="text-gray-600 text-sm">Be at least 18 years of age or have parental consent</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Accurate Information</h4>
                          <p className="text-gray-600 text-sm">Provide accurate, complete, and current information</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Account Security</h4>
                          <p className="text-gray-600 text-sm">Maintain the security of your account credentials</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Legal Compliance</h4>
                          <p className="text-gray-600 text-sm">Comply with all applicable Indian laws and regulations</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                <strong>Legal Compliance:</strong> User registration is subject to the Information Technology 
                Act, 2000, and we reserve the right to verify user identity as per the Prevention of Money 
                Laundering Act, 2002.
              </p>
                    </div>
                  </div>
            </section>

                <section id="payment-terms" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Payment Terms and Refunds</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                All transactions are processed in Indian Rupees (₹) and are subject to:
              </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span className="text-gray-700">Goods and Services Tax (GST) as applicable</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span className="text-gray-700">Payment gateway terms and conditions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span className="text-gray-700">Refund policy in accordance with Consumer Protection Act</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span className="text-gray-700">Chargeback and dispute resolution procedures</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                <strong>Consumer Rights:</strong> You have the right to return goods within 7 days of delivery 
                as per the Consumer Protection (E-Commerce) Rules, 2020, subject to certain conditions.
              </p>
                    </div>
                  </div>
            </section>

                <section id="intellectual-property" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Intellectual Property Rights</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                All content, trademarks, and intellectual property on mycrux are protected under:
              </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Copyright Act, 1957</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Trademarks Act, 1999</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Designs Act, 2000</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Patents Act, 1970</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                        <strong>Important:</strong> Unauthorized use, reproduction, or distribution of our intellectual property is strictly 
                prohibited and may result in legal action under applicable Indian laws.
              </p>
                    </div>
                  </div>
            </section>

                <section id="data-protection" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Data Protection and Privacy</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      We are committed to protecting your personal data in accordance with:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Information Technology Act, 2000</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">IT (Reasonable Security Practices) Rules, 2011</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Digital Personal Data Protection Act, 2023</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Consumer Protection Act, 2019</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                        <strong>Your Rights:</strong> You have the right to access, correct, delete, and port your personal data. 
                        For detailed information about our data practices, please refer to our Privacy Policy.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="liability" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Limitation of Liability</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      To the maximum extent permitted by law, mycrux's liability is limited as follows:
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Service Availability</h4>
                          <p className="text-gray-600 text-sm">We do not guarantee uninterrupted service availability and are not liable for temporary service disruptions</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Third-Party Content</h4>
                          <p className="text-gray-600 text-sm">We are not responsible for content, products, or services provided by third parties</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Consequential Damages</h4>
                          <p className="text-gray-600 text-sm">We are not liable for indirect, incidental, or consequential damages</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Maximum Liability</h4>
                          <p className="text-gray-600 text-sm">Our total liability shall not exceed the amount paid by you for the specific service in question</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                        <strong>Legal Notice:</strong> This limitation of liability is subject to applicable Indian consumer protection laws 
                        and does not affect your statutory rights as a consumer.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="dispute-resolution" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Dispute Resolution</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Any disputes arising from these terms or your use of our services will be resolved through:
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Direct Communication</h4>
                          <p className="text-gray-600 text-sm">First, contact our customer support team to resolve the issue amicably</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Mediation</h4>
                          <p className="text-gray-600 text-sm">If direct resolution fails, disputes may be referred to mediation through a neutral third party</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Arbitration</h4>
                          <p className="text-gray-600 text-sm">Binding arbitration under the Arbitration and Conciliation Act, 2015</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Jurisdiction</h4>
                          <p className="text-gray-600 text-sm">Courts in [Your City], India shall have exclusive jurisdiction over any legal proceedings</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                        <strong>Consumer Rights:</strong> You may also approach the Consumer Disputes Redressal Commission 
                        under the Consumer Protection Act, 2019 for resolution of consumer disputes.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="contact" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Contact Information</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      For any legal queries or concerns regarding these Terms of Service, please contact us:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2 flex items-center">
                          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Email
                        </h4>
                        <p className="text-gray-600">admin@crux.in</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2 flex items-center">
                          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Contact Page
                        </h4>
                        <Link href="/contact" className="text-gray-600 hover:text-black underline">Visit our contact page</Link>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                        <strong>Last Updated:</strong> December 2024
                      </p>
                    </div>
                  </div>
            </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer currentPage="terms" />
    </div>
  );
};

export default Terms;

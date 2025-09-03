"use client";

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";


const Privacy = () => {
  const [activeSection, setActiveSection] = useState('legal-framework');

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
      'legal-framework',
      'information-collection',
      'legal-basis',
      'data-usage',
      'data-sharing',
      'security',
      'your-rights',
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
      <Navigation currentPage="privacy" />
      <main className="pt-20">
        {/* Hero Section - Nike Style */}
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Privacy Policy
            </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Your privacy matters to us. Learn how we protect and handle your personal information.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white text-black px-4 py-2 rounded-full">GDPR Compliant</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Secure Data</div>
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
                    onClick={() => scrollToSection('legal-framework')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'legal-framework' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Legal Framework
                  </button>
                  <button 
                    onClick={() => scrollToSection('information-collection')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'information-collection' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Information We Collect
                  </button>
                  <button 
                    onClick={() => scrollToSection('legal-basis')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'legal-basis' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Legal Basis
                  </button>
                  <button 
                    onClick={() => scrollToSection('data-usage')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'data-usage' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    How We Use Data
                  </button>
                  <button 
                    onClick={() => scrollToSection('data-sharing')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'data-sharing' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Data Sharing
                  </button>
                  <button 
                    onClick={() => scrollToSection('security')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'security' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Security
                  </button>
                  <button 
                    onClick={() => scrollToSection('your-rights')}
                    className={`block text-sm transition-colors text-left w-full ${
                      activeSection === 'your-rights' 
                        ? 'text-black font-bold border-l-4 border-black pl-2' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Your Rights
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
                    <strong>Last Updated:</strong> August 2025
                  </p>
          </div>

                <section id="legal-framework" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Legal Framework</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                This Privacy Policy is governed by and complies with the following Indian laws and regulations:
              </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Information Technology Act, 2000</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Information Technology Rules, 2011</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Right to Privacy (Supreme Court)</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Personal Data Protection Bill, 2019</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Consumer Protection Act, 2019</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                <strong>Data Controller:</strong> mycrux is the data controller responsible for processing your personal information 
                in accordance with applicable Indian data protection laws.
              </p>
                    </div>
                  </div>
            </section>

                <section id="information-collection" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Information We Collect</h2>
                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Name, email address, phone number</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Billing and shipping addresses</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Date of birth and gender</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Payment information (PCI-compliant)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Account credentials and preferences</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        Sensitive Personal Data (SPDI)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Password and authentication</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Financial information</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Health information (with consent)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Biometric data (3DStructFit)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        Automatically Collected Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">IP address and device info</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Browser type and version</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Pages visited and time spent</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Cookies and tracking technologies</span>
                        </div>
                      </div>
                    </div>
                  </div>
            </section>

                <section id="legal-basis" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Legal Basis for Processing</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                We process your personal information based on the following legal grounds under Indian law:
              </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Consent</h4>
                          <p className="text-gray-600 text-sm">Explicit consent for marketing communications and sensitive data processing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Contract Performance</h4>
                          <p className="text-gray-600 text-sm">Processing necessary for service delivery and account management</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Legal Obligation</h4>
                          <p className="text-gray-600 text-sm">Compliance with applicable Indian laws and regulations</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Legitimate Interest</h4>
                          <p className="text-gray-600 text-sm">Business operations, fraud prevention, and service improvement</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Vital Interest</h4>
                          <p className="text-gray-600 text-sm">Protection of life and safety in emergency situations</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </section>

                <section id="data-usage" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">How We Use Your Information</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                We use your information for the following purposes in compliance with Indian law:
              </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Process orders, payments, and deliveries</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Provide customer support and respond to inquiries</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Send order confirmations and shipping updates</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Personalize your shopping experience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Conduct market research and improve services</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Prevent fraud and ensure platform security</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Comply with legal obligations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">Send marketing communications (with consent)</span>
                      </div>
                    </div>
                  </div>
            </section>

                <section id="data-sharing" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Information Sharing and Disclosure</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                We may share your information with third parties only in the following circumstances:
              </p>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Service Providers</h4>
                        <p className="text-gray-600 text-sm">Trusted partners who assist in operations (payment processors, logistics, customer support)</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Legal Requirements</h4>
                        <p className="text-gray-600 text-sm">When required by law, court order, or government authority</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Business Transfers</h4>
                        <p className="text-gray-600 text-sm">In case of merger, acquisition, or sale of assets</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Consent</h4>
                        <p className="text-gray-600 text-sm">With your explicit consent for specific purposes</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Emergency Situations</h4>
                        <p className="text-gray-600 text-sm">To protect life, safety, or property</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                <strong>Data Localization:</strong> We ensure that sensitive personal data is stored and processed 
                within India as required by the Information Technology Act, 2000.
              </p>
                    </div>
                  </div>
            </section>

                <section id="security" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Data Security Measures</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                We implement comprehensive security measures as required by Indian law:
              </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">ISO 27001 certified security practices</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">SSL/TLS encryption for data transmission</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Secure data storage with access controls</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Regular security audits and assessments</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Employee training on data protection</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Incident response procedures</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-gray-700">Data backup and recovery systems</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                <strong>Breach Notification:</strong> In case of any data breach, we will notify affected users 
                and relevant authorities within 72 hours as required by Indian law.
              </p>
                    </div>
                  </div>
            </section>

                <section id="your-rights" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Your Rights Under Indian Law</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Right to Access</h4>
                        <p className="text-gray-600 text-sm">Request copies of your personal information</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Right to Correction</h4>
                        <p className="text-gray-600 text-sm">Update or correct inaccurate information</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Right to Withdraw Consent</h4>
                        <p className="text-gray-600 text-sm">Withdraw consent for data processing</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Right to Erasure</h4>
                        <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Right to Data Portability</h4>
                        <p className="text-gray-600 text-sm">Receive your data in a structured format</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Right to Object</h4>
                        <p className="text-gray-600 text-sm">Object to processing for marketing purposes</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Right to Grievance</h4>
                        <p className="text-gray-600 text-sm">File complaints with supervisory authorities</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
                      <p className="text-sm text-gray-800">
                <strong>Exercise Your Rights:</strong> To exercise any of these rights, contact us at 
                admin@crux.in. We will respond within 30 days as required by law.
              </p>
                    </div>
                  </div>
            </section>



                <section id="contact" className="mb-12 pt-4">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Contact Information</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                For any privacy-related queries or concerns, please contact us:
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
                        <strong>Last Updated:</strong> August 2025
                      </p>
                    </div>
                  </div>
            </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer currentPage="privacy" />
    </div>
  );
};

export default Privacy;

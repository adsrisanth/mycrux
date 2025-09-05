"use client";

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useState } from 'react';

const Waitlist = () => {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const scrollToWaitlist = () => {
    console.log('Scroll function called');
    const waitlistSection = document.getElementById('waitlist-form');
    console.log('Waitlist section found:', waitlistSection);
    if (waitlistSection) {
      const offsetTop = waitlistSection.offsetTop - 100; // Account for fixed header
      console.log('Scrolling to:', offsetTop);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.log('Waitlist section not found');
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white">
      <Navigation currentPage="waitlist" />
      <main className="pt-20">
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Join the Waitlist
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
                Be first in line for exclusive membership access. Unlock premium benefits before anyone else.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white text-black px-4 py-2 rounded-full">Early Access</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Exclusive Discounts</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">3DStructFit Beta</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Made in India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-black">
              <h2 className="text-3xl font-bold text-black mb-4">Early Access Fee</h2>
              <div className="text-6xl font-bold text-black mb-2">₹49</div>
              <p className="text-lg text-gray-600 mb-6">Early access fee (non-refundable)</p>
              <button 
                onClick={scrollToWaitlist}
                className="w-full bg-black text-white rounded-lg p-4 mb-6 hover:bg-gray-800 transition-colors duration-300"
              >
                <p className="text-lg font-semibold">Secure your spot in the queue!</p>
                <p className="text-sm opacity-90">Non-refundable early access fee</p>
              </button>
            </div>
          </div>
        </div>

        {/* Registration Process Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">How Registration Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, secure, and transparent registration process designed for your convenience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Fill Details</h3>
                <p className="text-gray-600">Provide your basic information including name, email, phone, and city.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Pay ₹49</h3>
                <p className="text-gray-600">Secure payment of ₹49 (non-refundable) to secure your spot.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Get Confirmation</h3>
                <p className="text-gray-600">Receive instant confirmation and your unique waitlist number.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Early Access</h3>
                <p className="text-gray-600">Get notified when we launch and enjoy 3 months free premium.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Requirements */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Registration Requirements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple requirements to ensure you get the best experience with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Valid Email</h3>
                <p className="text-gray-600">Provide a valid email address for account verification and important updates.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">For You</h3>
                <p className="text-gray-600">This service is designed for you. Local address and phone number preferred for better experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div id="waitlist-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get Early Access</h2>
              <p className="text-lg text-gray-600 mb-4">
                Join thousands of early adopters who are already on our waitlist. Get exclusive access to premium products, special discounts, and be the first to experience our revolutionary 3DStructFit technology.
              </p>
              
              {/* Detailed Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">What You Get:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Exclusive early access to new products</span>
                      <p className="text-sm text-gray-500">Be the first to shop new arrivals before public release</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Special member-only discounts</span>
                      <p className="text-sm text-gray-500">Up to 25% off on premium products and exclusive deals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Priority customer support</span>
                      <p className="text-sm text-gray-500">Dedicated support team with faster response times</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Beta access to 3DStructFit technology</span>
                      <p className="text-sm text-gray-500">Try our revolutionary virtual fitting technology first</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Free delivery on orders above ₹4999</span>
                      <p className="text-sm text-gray-500">Free delivery nationwide on orders ₹4999 and above</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Exclusive member events and previews</span>
                      <p className="text-sm text-gray-500">Invite-only events, product launches, and special previews</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Privacy */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-black mb-3">Your Data is Safe</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Bank-level encryption for all transactions</p>
                  <p>• Your personal data is never shared with third parties</p>
                  <p>• GDPR compliant data handling</p>
                  <p>• Secure payment processing</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Join Waitlist</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                      Full Name <span className="text-black font-bold">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address <span className="text-black font-bold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">We'll send you updates and confirmation here</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                        Phone Number <span className="text-black font-bold">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 text-sm">+91</span>
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="000 000 0000"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Enter your 10-digit mobile number</p>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-black mb-2">
                        City <span className="text-black font-bold">*</span>
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="Enter your city"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Local city preferred</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-black mb-2">
                      Shopping Interests (Optional)
                    </label>
                    <select
                      id="interests"
                      name="interests"
                      value={selectedInterest}
                      onChange={(e) => setSelectedInterest(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
                    >
                      <option value="">Select your primary interest</option>
                      <option value="mens-fashion">Men's Fashion</option>
                      <option value="womens-fashion">Women's Fashion</option>
                      <option value="accessories">Accessories</option>
                      <option value="shoes">Shoes</option>
                      <option value="tech-gadgets">Tech & Gadgets</option>
                      <option value="home-living">Home & Living</option>
                      <option value="beauty">Beauty & Wellness</option>
                      <option value="others">Others (specify below)</option>
                    </select>
                  </div>

                  {selectedInterest === 'others' && (
                    <div>
                      <label htmlFor="customInterests" className="block text-sm font-medium text-black mb-2">
                        Custom Interests
                      </label>
                      <input
                        id="customInterests"
                        name="customInterests"
                        type="text"
                        placeholder="Please specify your shopping interests"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Tell us about your specific shopping preferences</p>
                    </div>
                  )}

                  <div className="flex items-start space-x-3">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the <a href="/terms" className="text-black font-semibold hover:underline">Terms of Service</a> and <a href="/privacy" className="text-black font-semibold hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      id="marketing"
                      name="marketing"
                      type="checkbox"
                      className="mt-1 h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                    />
                    <label htmlFor="marketing" className="text-sm text-gray-600">
                      I'd like to receive updates about new products and exclusive offers
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-lg"
                  >
                    Join Waitlist - ₹49
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Your ₹49 fee is non-refundable</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      Secure payment • Instant confirmation • Early access secured
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Membership Tiers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the membership level that suits your lifestyle and unlock exclusive benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Tier */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-black mb-2">Free</div>
                  <p className="text-gray-600">Standard access</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Access to basic products</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Standard shipping</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                  Current Plan
                </button>
              </div>

              {/* Premium Tier */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-black relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-4">Premium</h3>
                  <div className="text-4xl font-bold text-black mb-2">Free</div>
                  <p className="text-gray-600">3 months free for waitlist members</p>
                  <p className="text-sm text-gray-500 mt-1">Then ₹4999/month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Early access to new products</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">15% member discount</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Free delivery on orders above ₹4999</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">3DStructFit beta access</span>
                  </li>
                </ul>
                <button 
                  onClick={scrollToWaitlist}
                  className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  Join Waitlist
                </button>
              </div>

              {/* VIP Tier */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-4">VIP</h3>
                  <div className="text-4xl font-bold text-black mb-2">₹4999</div>
                  <p className="text-gray-600">After waitlist period for members</p>
                  <p className="text-sm text-gray-500 mt-1">₹999/month for non-waitlist</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Everything in Premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">25% member discount</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Express delivery</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Personal shopping assistant</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Exclusive VIP events</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                  Available After Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Why Join Our Waitlist?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of the future of premium shopping in India. Join thousands of early adopters who are already on our waitlist.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Early Access</h3>
                <p className="text-gray-600">Get first access to new products and exclusive collections before they're available to the public.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white font-bold">₹</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Exclusive Discounts</h3>
                <p className="text-gray-600">Enjoy special member-only discounts and early bird pricing on premium products.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Premium Experience</h3>
                <p className="text-gray-600">Experience the future of shopping with our revolutionary 3DStructFit technology and personalized recommendations.</p>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about joining our waitlist.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What happens after I join the waitlist?",
                  answer: "After joining, you'll receive a confirmation email and regular updates about our progress. You'll get early access to our platform when we launch, along with 3 months of free premium membership."
                },
                {
                  question: "Is the ₹49 fee refundable?",
                  answer: "No, the ₹49 early access fee is non-refundable. This fee secures your spot in our waitlist and provides you with exclusive early access benefits. Please consider this before registering."
                },
                {
                  question: "What is 3DStructFit technology?",
                  answer: "3DStructFit is our revolutionary virtual fitting technology that uses AI and 3D modeling to help you find the perfect fit for clothing and accessories without trying them on physically."
                },
                {
                  question: "When will you be available in my city?",
                  answer: "We're starting with major metro cities and expanding rapidly. Check our cities page for the latest updates on availability in your area."
                },
                {
                  question: "How do I upgrade to VIP membership?",
                  answer: "VIP membership will be available exclusively to waitlist members after our launch. You'll receive an invitation to upgrade with special pricing."
                },
                {
                  question: "Who is this service for?",
                  answer: "Our waitlist and services are designed for you. Local address and phone number are preferred for the best experience. We may expand globally in the future."
                },
                {
                  question: "What is the minimum order for free delivery?",
                  answer: "Free delivery is available on all orders above ₹4999. Orders below ₹4999 will have a small delivery charge. This helps us keep our prices competitive while offering quality service."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset"
                  >
                    <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      <svg 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Support Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions? We're here to help. Reach out to our team for any inquiries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Email Support</h3>
                <p className="text-gray-600 mb-4">Get help via email within 24 hours</p>
                <a href="mailto:admin@mycrux.in" className="text-black font-semibold hover:underline">admin@mycrux.in</a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-4">Get in touch with our support team</p>
                <a href="/contact" className="text-black font-semibold hover:underline">Contact Us</a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our headquarters</p>
                <p className="text-black font-semibold">Vizag, India</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer currentPage="waitlist" />
    </div>
  );
};

export default Waitlist;
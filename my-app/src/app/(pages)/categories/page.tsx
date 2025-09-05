"use client";

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';


const Categories = () => {
  return (
    <div className="bg-white">
      <Navigation currentPage="categories" />
      <main className="pt-20">
        {/* Hero Section - Nike Style */}
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                mycrux: beinghomegrown
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover authentic Indian products across all categories, powered by AI and 3D StructFit technology for the perfect shopping experience.
              </p>
              <div className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold">
                🇮🇳 Made in India
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid - Enhanced Design */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Exclusive Indian Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform exclusively features Indian-made products across all categories. Each product is carefully curated and enhanced with AI-powered recommendations and 3D StructFit technology to ensure the perfect fit and style for every customer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fashion */}
            <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Fashion & Apparel</h3>
              <p className="text-gray-600 mb-4">Indian designer clothing with 3D StructFit technology</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Traditional & contemporary wear</li>
                <li>• Handcrafted accessories & jewelry</li>
                <li>• Premium Indian footwear</li>
                <li>• Sustainable & eco-friendly fashion</li>
                <li>• AI-powered style recommendations</li>
                <li>• Perfect fit guarantee with 3D StructFit</li>
              </ul>
              <div className="text-xs text-gray-400">Launching Soon</div>
            </div>

            {/* Beauty */}
            <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Beauty & Wellness</h3>
              <p className="text-gray-600 mb-4">Indian natural beauty products with AI recommendations</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Ayurvedic & organic skincare</li>
                <li>• Traditional Indian makeup</li>
                <li>• Natural haircare & oils</li>
                <li>• Wellness & health supplements</li>
                <li>• AI-powered skin analysis</li>
                <li>• Personalized care routines</li>
              </ul>
              <div className="text-xs text-gray-400">Launching Soon</div>
            </div>

            {/* Wellness */}
            <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Health & Fitness</h3>
              <p className="text-gray-600 mb-4">Indian health products and fitness equipment</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Traditional fitness equipment</li>
                <li>• Ayurvedic health supplements</li>
                <li>• Yoga & meditation accessories</li>
                <li>• Wellness & spa products</li>
                <li>• AI-powered health tracking</li>
                <li>• Personalized fitness plans</li>
              </ul>
              <div className="text-xs text-gray-400">Launching Soon</div>
            </div>

            {/* Lifestyle */}
            <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Home & Lifestyle</h3>
              <p className="text-gray-600 mb-4">Indian home decor and lifestyle products</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Traditional home decor</li>
                <li>• Indian kitchen essentials</li>
                <li>• Handcrafted art & crafts</li>
                <li>• Lifestyle accessories</li>
                <li>• AI-powered home styling</li>
                <li>• Personalized recommendations</li>
              </ul>
              <div className="text-xs text-gray-400">Launching Soon</div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Revolutionary Shopping Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're building India's first AI-powered e-commerce platform with 3D StructFit technology. Our team is carefully curating authentic Indian products from local artisans and established brands, enhanced with cutting-edge technology to deliver the perfect shopping experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">3D StructFit Technology</h3>
                <p className="text-gray-600">Revolutionary body measurement technology ensures perfect fit for every fashion product.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">AI-Powered Recommendations</h3>
                <p className="text-gray-600">Advanced AI analyzes your preferences to suggest the perfect products and care routines.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Direct-to-Customer</h3>
                <p className="text-gray-600">Connect directly with Indian businesses and artisans for authentic products.</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="/waitlist" className="inline-flex items-center bg-black text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg shadow-lg hover:shadow-xl">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Why Choose mycrux?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              mycrux is India's first AI-powered e-commerce platform with 3D StructFit technology, exclusively featuring Indian-made products. 
              We combine cutting-edge technology with authentic Indian craftsmanship to deliver an unparalleled shopping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">3D StructFit Technology</h3>
              <p className="text-gray-600 mb-4">Revolutionary body measurement technology that creates accurate 3D models for perfect fit visualization.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Precise body measurements</li>
                <li>• Virtual try-on experience</li>
                <li>• Perfect fit guarantee</li>
                <li>• Reduced return rates</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">AI-Powered Fashion Assistance</h3>
              <p className="text-gray-600 mb-4">Intelligent AI system that provides personalized style recommendations and daily care routines.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Style recommendations</li>
                <li>• Personalized care routines</li>
                <li>• Trend analysis</li>
                <li>• Holistic lifestyle approach</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Direct-to-Customer Marketplace</h3>
              <p className="text-gray-600 mb-4">Connect directly with Indian businesses and artisans for authentic products and better prices.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Direct business connections</li>
                <li>• Authentic Indian products</li>
                <li>• Reduced overhead costs</li>
                <li>• Enhanced brand visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer currentPage="categories" />
    </div>
  );
};

export default Categories;

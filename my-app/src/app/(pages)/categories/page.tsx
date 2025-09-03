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
                Product Categories
            </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our curated collection of premium products across various categories. Quality and style in every item.
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
            <h2 className="text-4xl font-bold text-black mb-6">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collection of premium products across all lifestyle categories. 
              Each category is thoughtfully selected to enhance your daily life with quality and style.
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
              <h3 className="text-xl font-bold text-black mb-3">Fashion</h3>
              <p className="text-gray-600 mb-4">Premium clothing, accessories, and footwear</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Designer clothing</li>
                <li>• Handcrafted accessories</li>
                <li>• Premium footwear</li>
                <li>• Sustainable fashion</li>
              </ul>
              <div className="text-xs text-gray-400">Coming Soon</div>
            </div>

            {/* Beauty */}
            <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Beauty</h3>
              <p className="text-gray-600 mb-4">Natural skincare, makeup, and haircare</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Organic skincare</li>
                <li>• Premium makeup</li>
                <li>• Haircare essentials</li>
                <li>• Wellness products</li>
              </ul>
              <div className="text-xs text-gray-400">Coming Soon</div>
            </div>

            {/* Wellness */}
            <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Wellness</h3>
              <p className="text-gray-600 mb-4">Fitness, supplements, and wellness products</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Fitness equipment</li>
                <li>• Health supplements</li>
                <li>• Yoga & meditation</li>
                <li>• Wellness tools</li>
              </ul>
              <div className="text-xs text-gray-400">Coming Soon</div>
            </div>

            {/* Lifestyle */}
            <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Lifestyle</h3>
              <p className="text-gray-600 mb-4">Home decor, kitchen, and lifestyle essentials</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Home decor</li>
                <li>• Kitchen essentials</li>
                <li>• Art & crafts</li>
                <li>• Lifestyle accessories</li>
              </ul>
              <div className="text-xs text-gray-400">Coming Soon</div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're curating the finest Made in India products for you. Our team of experts is carefully selecting 
                premium products from local artisans and established brands to bring you the best of Indian craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Quality Assured</h3>
                <p className="text-gray-600">Every product undergoes rigorous quality checks to ensure premium standards.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Local Artisans</h3>
                <p className="text-gray-600">Supporting local craftsmen and promoting authentic Indian products.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Quick and reliable delivery across 500+ cities in India.</p>
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
              We're building the future of premium shopping in India with cutting-edge technology and authentic products. 
              Our platform combines innovation with tradition to deliver an unparalleled shopping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">AI-Powered</h3>
              <p className="text-gray-600 mb-4">Advanced AI technology for personalized recommendations and perfect fit suggestions.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Machine learning algorithms</li>
                <li>• Personalized recommendations</li>
                <li>• 3DStructFit technology</li>
                <li>• Smart size prediction</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Community Driven</h3>
              <p className="text-gray-600 mb-4">Supporting local artisans and building a community of quality-conscious consumers.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Local artisan partnerships</li>
                <li>• Community feedback system</li>
                <li>• Sustainable practices</li>
                <li>• Cultural preservation</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Lightning Fast</h3>
              <p className="text-gray-600 mb-4">Quick delivery across India with premium packaging and exceptional service.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 2-5 day delivery</li>
                <li>• Real-time tracking</li>
                <li>• Premium packaging</li>
                <li>• Express delivery options</li>
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

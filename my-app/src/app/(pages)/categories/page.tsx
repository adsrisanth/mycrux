import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop - mycrux',
  description: 'Shop premium fashion, beauty, wellness, and lifestyle products. Made in India, developed in India.',
};

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
                Shop Premium
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Curated collection of premium fashion, beauty, wellness, and lifestyle products
              </p>
              <div className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold">
                🇮🇳 Made in India
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid - Nike Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fashion */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Fashion</h3>
              <p className="text-sm text-gray-600">Clothing, accessories, shoes</p>
            </div>

            {/* Beauty */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Beauty</h3>
              <p className="text-sm text-gray-600">Skincare, makeup, haircare</p>
            </div>

            {/* Wellness */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Wellness</h3>
              <p className="text-sm text-gray-600">Fitness, supplements, yoga</p>
            </div>

            {/* Lifestyle */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Lifestyle</h3>
              <p className="text-sm text-gray-600">Home decor, kitchen, art</p>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're curating the finest Made in India products for you. Join our waitlist to be the first to know when we launch.
              </p>
            </div>
            <div className="text-center">
              <a href="/waitlist" className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose mycrux?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building the future of premium shopping in India with cutting-edge technology and authentic products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">AI-Powered</h3>
              <p className="text-gray-600">Advanced AI technology for personalized recommendations and perfect fit suggestions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Community Driven</h3>
              <p className="text-gray-600">Supporting local artisans and building a community of quality-conscious consumers.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Quick delivery across India with premium packaging and exceptional service.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer currentPage="categories" />
    </div>
  );
};

export default Categories;

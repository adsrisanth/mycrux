import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - mycrux',
  description: 'Learn about mycrux - your premium destination for curated fashion, beauty, wellness, and lifestyle products.',
};

const Info = () => {
  return (
    <div className="bg-white">
      <Navigation currentPage="info" />
      <main className="pt-20">
        {/* Hero Section - Nike Style */}
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                About mycrux
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Your premium destination for curated fashion, beauty, wellness, and lifestyle products across India.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white text-black px-4 py-2 rounded-full">Premium Quality</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Fast Delivery</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Easy Returns</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">24/7 Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Born from a vision to revolutionize online shopping in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide Indian consumers with access to premium, curated products that enhance their lifestyle. 
                  We believe in quality over quantity, and every product in our collection is carefully selected 
                  to meet the highest standards of excellence.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become India's most trusted premium lifestyle platform, where technology meets tradition, 
                  and where every customer feels valued and understood. We're building a community of 
                  discerning consumers who appreciate quality and authenticity.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Why Choose mycrux?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Curated selection of premium products</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Fast and reliable delivery across India</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Exceptional customer service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Secure and easy payment options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Hassle-free returns and exchanges</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Our Values</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                    <p className="font-semibold text-gray-800">Quality</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <p className="font-semibold text-gray-800">Trust</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">I</span>
                    </div>
                    <p className="font-semibold text-gray-800">Innovation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <p className="font-semibold text-gray-800">Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">What We Offer</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium products across all lifestyle categories, carefully curated for the modern Indian consumer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Fashion */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-sm">
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
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-sm">
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
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-sm">
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
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden shadow-sm">
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
        </div>

        {/* Technology Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Cutting-Edge Technology</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building the future of online shopping with advanced AI and innovative features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">AI Recommendations</h3>
              <p className="text-gray-600">Personalized product suggestions based on your preferences and style.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">3DStructFit</h3>
              <p className="text-gray-600">Revolutionary body measurement technology for perfect fit recommendations.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Fast Checkout</h3>
              <p className="text-gray-600">Streamlined checkout process with multiple payment options and security.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black mb-4">Ready to experience premium shopping?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our waitlist to be the first to know when we launch and get exclusive early access benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/waitlist" className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors text-center">
                  Join Waitlist
                </a>
                <a href="/categories" className="border border-black text-black font-semibold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-all text-center">
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Info;

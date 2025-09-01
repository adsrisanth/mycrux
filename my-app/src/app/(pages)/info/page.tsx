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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Born from a vision to revolutionize online shopping in India, mycrux represents the perfect fusion 
              of technology, tradition, and premium quality. We're not just another e-commerce platform – 
              we're building the future of lifestyle shopping.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To provide Indian consumers with access to premium, curated products that enhance their lifestyle. 
                  We believe in quality over quantity, and every product in our collection is carefully selected 
                  to meet the highest standards of excellence.
                </p>
                <p className="text-gray-600 text-sm">
                  We're committed to supporting local artisans and bringing authentic, high-quality products 
                  to discerning customers who value craftsmanship and sustainability.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To become India's most trusted premium lifestyle platform, where technology meets tradition, 
                  and where every customer feels valued and understood. We're building a community of 
                  discerning consumers who appreciate quality and authenticity.
                </p>
                <p className="text-gray-600 text-sm">
                  By 2030, we aim to be the go-to destination for premium lifestyle products, 
                  setting new standards in customer experience and product quality.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black">Why Choose mycrux?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Curated selection of premium products</span>
                      <p className="text-gray-500 text-sm">Handpicked by our expert team</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Fast and reliable delivery across India</span>
                      <p className="text-gray-500 text-sm">2-5 day delivery to 500+ cities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Exceptional customer service</span>
                      <p className="text-gray-500 text-sm">24/7 support in multiple languages</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Secure and easy payment options</span>
                      <p className="text-gray-500 text-sm">Multiple payment methods with bank-grade security</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Hassle-free returns and exchanges</span>
                      <p className="text-gray-500 text-sm">30-day return policy with free pickup</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black">Our Values</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">Q</span>
                    </div>
                    <p className="font-semibold text-gray-800 mb-1">Quality</p>
                    <p className="text-gray-500 text-xs">Premium standards</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <p className="font-semibold text-gray-800 mb-1">Trust</p>
                    <p className="text-gray-500 text-xs">Transparent practices</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">I</span>
                    </div>
                    <p className="font-semibold text-gray-800 mb-1">Innovation</p>
                    <p className="text-gray-500 text-xs">Cutting-edge tech</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <p className="font-semibold text-gray-800 mb-1">Care</p>
                    <p className="text-gray-500 text-xs">Customer-first approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Premium products across all lifestyle categories, carefully curated for the modern Indian consumer. 
                Each category is thoughtfully selected to enhance your daily life with quality and style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Fashion */}
              <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Fashion</h3>
                <p className="text-gray-600 mb-4">Premium clothing, accessories, and footwear</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Designer clothing</li>
                  <li>• Handcrafted accessories</li>
                  <li>• Premium footwear</li>
                  <li>• Sustainable fashion</li>
                </ul>
              </div>

              {/* Beauty */}
              <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Beauty</h3>
                <p className="text-gray-600 mb-4">Natural skincare, makeup, and haircare</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Organic skincare</li>
                  <li>• Premium makeup</li>
                  <li>• Haircare essentials</li>
                  <li>• Wellness products</li>
                </ul>
              </div>

              {/* Wellness */}
              <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Wellness</h3>
                <p className="text-gray-600 mb-4">Fitness, supplements, and wellness products</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Fitness equipment</li>
                  <li>• Health supplements</li>
                  <li>• Yoga & meditation</li>
                  <li>• Wellness tools</li>
                </ul>
              </div>

              {/* Lifestyle */}
              <div className="group cursor-pointer bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Lifestyle</h3>
                <p className="text-gray-600 mb-4">Home decor, kitchen, and lifestyle essentials</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Home decor</li>
                  <li>• Kitchen essentials</li>
                  <li>• Art & crafts</li>
                  <li>• Lifestyle accessories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Cutting-Edge Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of online shopping with advanced AI and innovative features. 
              Our technology stack ensures a seamless, personalized, and secure shopping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">AI Recommendations</h3>
              <p className="text-gray-600 mb-4">Personalized product suggestions based on your preferences and style.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Machine learning algorithms</li>
                <li>• Behavioral analysis</li>
                <li>• Style preference tracking</li>
                <li>• Real-time recommendations</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">3DStructFit</h3>
              <p className="text-gray-600 mb-4">Revolutionary body measurement technology for perfect fit recommendations.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 3D body scanning</li>
                <li>• Size prediction algorithms</li>
                <li>• Fit guarantee system</li>
                <li>• Virtual try-on technology</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Fast Checkout</h3>
              <p className="text-gray-600 mb-4">Streamlined checkout process with multiple payment options and security.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• One-click checkout</li>
                <li>• Multiple payment methods</li>
                <li>• Bank-grade security</li>
                <li>• Express delivery options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Stats Section */}
        <div className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Building the future of premium shopping in India with measurable results and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-300">Cities Served</div>
                <div className="text-sm text-gray-400 mt-1">Across India</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-gray-300">Waitlist Members</div>
                <div className="text-sm text-gray-400 mt-1">And growing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-300">Customer Support</div>
                <div className="text-sm text-gray-400 mt-1">Always available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Made in India</div>
                <div className="text-sm text-gray-400 mt-1">Supporting local</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black mb-6">Ready to experience premium shopping?</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join our waitlist to be the first to know when we launch and get exclusive early access benefits. 
                Be part of the premium shopping revolution in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/waitlist" className="bg-black text-white font-semibold py-4 px-10 rounded-lg hover:bg-gray-800 transition-colors text-center text-lg shadow-lg hover:shadow-xl">
                  Join Waitlist
                </a>
                <a href="/categories" className="border-2 border-black text-black font-semibold py-4 px-10 rounded-lg hover:bg-black hover:text-white transition-all text-center text-lg">
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

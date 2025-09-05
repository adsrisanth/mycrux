"use client";

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';


const Info = () => {
  return (
    <div className="bg-white">
      <Navigation currentPage="about" />
      <main className="pt-20">
        {/* Hero Section - Nike Style */}
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                mycrux: beinghomegrown
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                An innovative e-commerce platform, 100% developed and designed in India, dedicated to empowering Indian businesses with AI and 3D StructFit technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white text-black px-4 py-2 rounded-full">Made in India</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">AI-Powered</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">3D StructFit</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Direct-to-Customer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Executive Summary
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              mycrux is an innovative e-commerce platform, 100% developed and designed in India, dedicated to empowering Indian businesses to sell their products directly to customers. Similar to established online marketplaces, mycrux distinguishes itself by exclusively featuring Indian-made products and integrating cutting-edge Artificial Intelligence (AI) to enhance the customer shopping experience. A key differentiator is the introduction of 3D StructFit, a revolutionary feature allowing users to digitally design their precise body structure, ensuring accurate fashion product recommendations and fit visualization.
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
                  <h3 className="text-2xl font-bold text-black">Direct-to-Customer Marketplace</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  mycrux provides a streamlined platform for Indian business people to register and sell their products directly to customers. This fosters local entrepreneurship and ensures consumers have access to a wide array of authentic Indian goods.
                </p>
                <p className="text-gray-600 text-sm">
                  By connecting Indian businesses directly with customers, we eliminate intermediaries and create a more sustainable ecosystem for local commerce.
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
                  <h3 className="text-2xl font-bold text-black">AI-Powered Fashion Assistance</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our integrated AI system provides personalized assistance for fashion picking. This includes style recommendations that analyze user preferences, browsing history, and current trends to suggest fashion products that align with their individual style.
                </p>
                <p className="text-gray-600 text-sm">
                  Beyond fashion, the AI can also recommend daily care routines tailored to the user's skin type, hair type, and other personal attributes, offering a holistic lifestyle approach.
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
                  <h3 className="text-2xl font-bold text-black">3D StructFit: Personalized Fit Technology</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Accurate Body Representation</span>
                      <p className="text-gray-500 text-sm">Users can input their exact body shape, size, weight, and other relevant measurements to create a highly accurate digital avatar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Virtual Try-On and Fit Visualization</span>
                      <p className="text-gray-500 text-sm">Based on the user's 3D StructFit model, the platform will visually demonstrate how different fashion products would fit their unique body</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Personalized Product Suggestions</span>
                      <p className="text-gray-500 text-sm">This feature enables the AI to provide even more precise fashion product recommendations, ensuring suggested items are not only stylish but also a perfect fit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-gray-700 font-medium">Eliminates Guesswork</span>
                      <p className="text-gray-500 text-sm">Reduces returns and ensures customer satisfaction with accurate fit predictions</p>
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
                  <h3 className="text-2xl font-bold text-black">Benefits</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-black pl-4">
                    <h4 className="font-bold text-gray-800 mb-2">For Sellers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Direct access to a nationwide customer base</li>
                      <li>• Reduced overhead costs by bypassing intermediaries</li>
                      <li>• Promotion of "Made in India" products</li>
                      <li>• Enhanced brand visibility and reach</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-black pl-4">
                    <h4 className="font-bold text-gray-800 mb-2">For Customers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Access to a wide range of authentic Indian products</li>
                      <li>• Personalized shopping experience with AI assistance</li>
                      <li>• Accurate fit visualization with 3D StructFit</li>
                      <li>• Reduced risk of purchasing ill-fitting items</li>
                    </ul>
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

        {/* Future Outlook Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-6">Future Outlook</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                mycrux aims to become the leading e-commerce platform for Indian products, leveraging technology to create an unparalleled shopping experience. We are committed to continuous innovation, further integrating AI capabilities, and expanding the functionalities of 3D StructFit to offer an even more immersive and personalized customer journey.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                For inquiries, please contact our team. We're here to help and answer any questions you may have.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Dinesh SriSanth A.</h3>
                <p className="text-gray-300">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Email</h3>
                <p className="text-gray-300">adsrisanth2005@gmail.com</p>
                <p className="text-gray-300">admin@mycrux.in</p>
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
                Be part of the premium shopping revolution in India. Waitlist starting soon!
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

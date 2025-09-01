import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from "next/link";

const Terms = () => {
  return (
    <div className="bg-white">
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
                  <a href="#acceptance" className="block text-sm text-gray-600 hover:text-black transition-colors">Acceptance of Terms</a>
                  <a href="#service-description" className="block text-sm text-gray-600 hover:text-black transition-colors">Service Description</a>
                  <a href="#user-eligibility" className="block text-sm text-gray-600 hover:text-black transition-colors">User Eligibility</a>
                  <a href="#payment-terms" className="block text-sm text-gray-600 hover:text-black transition-colors">Payment Terms</a>
                  <a href="#intellectual-property" className="block text-sm text-gray-600 hover:text-black transition-colors">Intellectual Property</a>
                  <a href="#data-protection" className="block text-sm text-gray-600 hover:text-black transition-colors">Data Protection</a>
                  <a href="#liability" className="block text-sm text-gray-600 hover:text-black transition-colors">Liability</a>
                  <a href="#dispute-resolution" className="block text-sm text-gray-600 hover:text-black transition-colors">Dispute Resolution</a>
                  <a href="#contact" className="block text-sm text-gray-600 hover:text-black transition-colors">Contact Us</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <p className="text-sm text-gray-600 mb-0">
                    <strong>Last Updated:</strong> December 2024 | <strong>Effective Date:</strong> [Launch Date]
                  </p>
          </div>

                <section id="acceptance" className="mb-12">
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-200 pb-3">Acceptance of Terms</h2>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                By accessing and using mycrux services, you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to abide by these terms, please do 
                not use this service.
              </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                      <p className="text-sm text-blue-800">
                <strong>Legal Basis:</strong> This agreement is governed by the Indian Contract Act, 1872, 
                and the Information Technology Act, 2000, along with the Information Technology (Reasonable 
                Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </p>
                    </div>
                  </div>
            </section>

                <section id="service-description" className="mb-12">
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

                <section id="user-eligibility" className="mb-12">
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
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                      <p className="text-sm text-yellow-800">
                <strong>Legal Compliance:</strong> User registration is subject to the Information Technology 
                Act, 2000, and we reserve the right to verify user identity as per the Prevention of Money 
                Laundering Act, 2002.
              </p>
                    </div>
                  </div>
            </section>

                <section id="payment-terms" className="mb-12">
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
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <p className="text-sm text-green-800">
                <strong>Consumer Rights:</strong> You have the right to return goods within 7 days of delivery 
                as per the Consumer Protection (E-Commerce) Rules, 2020, subject to certain conditions.
              </p>
                    </div>
                  </div>
            </section>

                <section id="intellectual-property" className="mb-12">
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
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="text-sm text-red-800">
                        <strong>Important:</strong> Unauthorized use, reproduction, or distribution of our intellectual property is strictly 
                prohibited and may result in legal action under applicable Indian laws.
              </p>
                    </div>
                  </div>
            </section>



                <section id="contact" className="mb-12">
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
                        <p className="text-gray-600">admin@mycrux.com</p>
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
                    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Last Updated:</strong> December 2024 | <strong>Effective Date:</strong> [Launch Date]
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

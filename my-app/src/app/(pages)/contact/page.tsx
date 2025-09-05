"use client";

import { useState } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { validateContactForm } from '@/lib/utils/validation';
import { submitContactForm } from '@/lib/utils/api';
import { ContactFormRequest } from '@/lib/models/Contact';


const Contact = () => {
  const [formData, setFormData] = useState<ContactFormRequest>({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'general',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);
    setSubmitStatus({ type: null, message: '' });

    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <Navigation currentPage="contact" />
      <main className="pt-20">
        {/* Hero Section - Nike Style */}
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Contact Us
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Get in touch with our team. We're here to help and answer any questions you may have.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white text-black px-4 py-2 rounded-full">24/7 Support</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Quick Response</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Expert Help</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Puma/Adidas Style Split Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Send us a message</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-black mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-black mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-black mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="requesting-city">Requesting City</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Error Messages */}
                {errors.length > 0 && (
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-black">Please fix the following errors:</h3>
                        <div className="mt-2 text-sm text-gray-700">
                          <ul className="list-disc pl-5 space-y-1">
                            {errors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Success Message */}
                {submitStatus.type === 'success' && (
                  <div className="bg-white border border-gray-300 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-black">{submitStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus.type === 'error' && (
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-black">{submitStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            {/* Contact Information Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Get in touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Prefer to reach out directly? Here are our contact details.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Email Contact */}
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Email Support</h3>
                      <p className="text-gray-600 mb-2">Get help via email</p>
                      <a 
                        href="mailto:admin@crux.in" 
                        className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
                      >
                        admin@crux.in
                      </a>
                    </div>
                  </div>
                </div>
                {/* Social Media Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Follow us on social media</h3>
                  <p className="text-gray-600 mb-6">Stay updated with our latest news and updates</p>
                  <div className="grid grid-cols-2 gap-4">
                    {/* X (Twitter) */}
                    <a href="https://x.com/mycruxin?t=CzqDnOMbflOFfqhk4KRBJg&s=08" target='_blank' className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300" title="Follow us on X">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-black">X (Twitter)</span>
                    </a>
                    
                    {/* Instagram */}
                    <a href="https://www.instagram.com/mycrux.in?igsh=MXBiY2J5Y2FmY2xuaw==" target='_blank' className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300" title="Follow us on Instagram">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-black">Instagram</span>
                    </a>
                    
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/mycruxin/" target='_blank' className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300" title="Connect on LinkedIn">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-black">LinkedIn</span>
                    </a>
                    
                    {/* Threads */}
                    <a href="https://www.threads.com/@mycrux.in" target='_blank' className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300" title="Follow us on Threads">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.744-.507-.574-1.37-.962-2.497-.896-1.128.065-2.161.355-3.08.862-.095.053-.192.108-.293.165l-.893-1.553c.214-.121.4-.221.573-.308 1.072-.538 2.37-.879 3.868-.956 1.853-.095 3.456.463 4.312 1.548.895 1.135 1.045 2.632.637 4.372.012-.002.024-.007.036-.01.448-.182.914-.373 1.382-.563l.717 1.704c-.526.221-1.053.442-1.58.664-.022.009-.044.018-.067.027.24 1.04.177 2.16-.188 3.319-.543 1.716-1.684 3.239-3.298 4.407-1.614 1.168-3.448 1.656-5.442 1.645z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-black">Threads</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer currentPage="contact" />
    </div>
  );
};

export default Contact;
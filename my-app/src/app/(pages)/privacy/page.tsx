import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from "next/link";

const Privacy = () => {
  return (
    <div className="h-screen bg-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-black rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black rounded-full animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-black rounded-full animate-ping opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-black rounded-full animate-ping opacity-20" style={{animationDelay: '3s'}}></div>
      </div>

      <Navigation currentPage="privacy" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col h-[calc(100vh-140px)] px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto rounded-full mb-6"></div>
            {/* <p className="text-gray-400 text-lg">Last updated: December 2024</p> */}
          </div>

          <div className="space-y-8 text-black leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
              <p className="text-black mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                sign up for our newsletter, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
                <li>Feedback and support requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">How We Use Your Information</h2>
              <p className="text-black mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Information Sharing</h2>
              <p className="text-black">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information with 
                trusted third-party service providers who assist us in operating our website and serving you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Data Security</h2>
              <p className="text-black">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Your Rights</h2>
              <p className="text-black mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-black space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">Contact Us</h2>
              <p className="text-black">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <Link href="/contact" className="text-black hover:text-gray-600 underline">
                  our contact page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer currentPage="privacy" />
    </div>
  );
};

export default Privacy;

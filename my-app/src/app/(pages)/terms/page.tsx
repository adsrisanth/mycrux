import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from "next/link";

const Terms = () => {
  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-20" style={{animationDelay: '3s'}}></div>
      </div>

      <Navigation currentPage="terms" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col h-[calc(100vh-140px)] px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full mb-6"></div>
            {/* <p className="text-gray-400 text-lg">Last updated: December 2024</p> */}
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-400">
                By accessing and using mycrux services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Use License</h2>
              <p className="text-gray-400 mb-4">
                Permission is granted to temporarily download one copy of mycrux for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software contained on mycrux</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">User Accounts</h2>
              <p className="text-gray-400 mb-4">
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding the password 
                and for all activities that occur under your account.
              </p>
              <p className="text-gray-400">
                You agree not to disclose your password to any third party and to take sole 
                responsibility for any activities or actions under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Intellectual Property</h2>
              <p className="text-gray-400">
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of mycrux and its licensors. The Service is protected by copyright, 
                trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Limitation of Liability</h2>
              <p className="text-gray-400">
                In no event shall mycrux, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Termination</h2>
              <p className="text-gray-400">
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Governing Law</h2>
              <p className="text-gray-400">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which 
                mycrux operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Changes to Terms</h2>
              <p className="text-gray-400">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any 
                time. If a revision is material, we will try to provide at least 30 days notice prior 
                to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">Contact Information</h2>
              <p className="text-gray-400">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <Link href="/contact" className="text-gray-300 hover:text-gray-200 underline">
                  our contact page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer currentPage="terms" />
    </div>
  );
};

export default Terms;

import Link from "next/link";

interface FooterProps {
  currentPage?: 'home' | 'privacy' | 'terms' | 'contact' | 'waitlist' | 'shop' | 'categories';
}

const Footer = ({ currentPage = 'home' }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-black/20 backdrop-blur-sm bg-white/50">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 xs:space-y-3 sm:space-y-0">
          <div className="text-black text-xs xs:text-sm text-center sm:text-left">
            © {currentYear} mycrux. All rights reserved.
          </div>
          <div className="flex items-center space-x-3 xs:space-x-4 text-xs xs:text-sm">
            <Link 
              href="/privacy" 
              className={`transition-colors duration-300 ${
                currentPage === 'privacy' 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className={`transition-colors duration-300 ${
                currentPage === 'terms' 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Terms
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors duration-300 ${
                currentPage === 'contact' 
                  ? 'text-black hover:text-gray-600' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

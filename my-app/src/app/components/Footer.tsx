import Link from "next/link";

interface FooterProps {
  currentPage?: 'home' | 'privacy' | 'terms' | 'contact';
}

const Footer = ({ currentPage = 'home' }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-gray-800/50 backdrop-blur-sm bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} mycrux. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-xs sm:text-sm">
            <Link 
              href="/privacy" 
              className={`transition-colors duration-300 ${
                currentPage === 'privacy' 
                  ? 'text-gray-200 hover:text-gray-400' 
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className={`transition-colors duration-300 ${
                currentPage === 'terms' 
                  ? 'text-gray-200 hover:text-gray-400' 
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              Terms
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors duration-300 ${
                currentPage === 'contact' 
                  ? 'text-gray-200 hover:text-gray-400' 
                  : 'text-gray-500 hover:text-gray-400'
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

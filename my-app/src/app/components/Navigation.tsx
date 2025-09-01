import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo.png'

interface NavigationProps {
  currentPage?: 'home' | 'privacy' | 'terms' | 'contact';
}

const Navigation = ({ currentPage = 'home' }: NavigationProps) => {
  return (
    <header className="relative z-10 border-b border-black/20 backdrop-blur-sm bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src={Logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-black text-sm sm:text-base font-medium tracking-wide">mycrux</span>
          </Link>
          <nav className="hidden sm:flex items-center space-x-6 text-xs sm:text-sm">
            {/* <Link 
              href="/privacy" 
              className={`transition-colors duration-300 ${
                currentPage === 'privacy' 
                  ? 'text-gray-200 border-b border-gray-200 pb-1' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Privacy
            </Link> */}
            {/* <Link 
              href="/terms" 
              className={`transition-colors duration-300 ${
                currentPage === 'terms' 
                  ? 'text-gray-200 border-b border-gray-200 pb-1' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Terms
            </Link> */}
            {/* <Link 
              href="/contact" 
              className={`transition-colors duration-300 ${
                currentPage === 'contact' 
                  ? 'text-gray-200 border-b border-gray-200 pb-1' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Contact
            </Link> */}
            {currentPage === 'home' && (
              <span className="text-black hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                Join the waitlist
              </span>
            )}
          </nav>
          <div className="sm:hidden text-black text-xs">
            <span className="cursor-pointer">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

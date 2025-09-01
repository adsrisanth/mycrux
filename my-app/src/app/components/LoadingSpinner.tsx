import Image from 'next/image';
import Logo from '../assets/logodark.png';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-600 to-black rounded-full blur-xl opacity-20 animate-pulse"></div>
        <Image 
          src={Logo} 
          alt="Loading..." 
          className="relative w-16 h-16 animate-spin" 
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;

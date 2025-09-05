'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Hide loading after a short delay to show the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
};

export default LoadingProvider;

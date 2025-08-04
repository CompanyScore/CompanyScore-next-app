'use client';

import { useEffect, useState } from 'react';
import { Toaster, toast as baseToast } from 'react-hot-toast';

export function useToast() {
  return {
    success: (msg: string) => baseToast.success(msg),
    error: (msg: string) => baseToast.error(msg),
    loading: (msg: string) => baseToast.loading(msg),
    info: (msg: string) => baseToast(msg),
  };
}

export function Toast() {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth <= 768,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Toaster
      position={isMobile ? 'bottom-center' : 'top-right'}
      toastOptions={{
        duration: 3000,
        style: {
          padding: '12px 16px',
          fontSize: '14px',
        },
      }}
    />
  );
}

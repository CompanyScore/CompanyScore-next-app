'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/shared/hooks/use-auth';
import { useEffect } from 'react';

const PROTECTED_PATHS = ['/analytic', '/profile'];

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isProtected = PROTECTED_PATHS.some(p => pathname?.startsWith(p));

  useEffect(() => {
    if (isProtected && !loading && !isLoggedIn) {
      router.replace('/login');
    }
  }, [isProtected, isLoggedIn, loading]);

  if (isProtected && loading) return <div>Загрузка...</div>;
  if (isProtected && !isLoggedIn) return null;

  return <>{children}</>;
};

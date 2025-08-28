'use client';

import { useAuth } from '@/api';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const PROTECTED_PATHS = ['/analytic', '/profile'];

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isProtected = PROTECTED_PATHS.some(p => pathname?.startsWith(p));

  const { isAuth, profileQuery } = useAuth(isProtected);
  const loading = isProtected && profileQuery.isLoading;

  useEffect(() => {
    if (isProtected && !loading && !isAuth) {
      router.replace('/');
    }
  }, [isProtected, loading, isAuth, pathname, router]);

  if (isProtected && loading) return <div>Загрузка...</div>;
  if (isProtected && !isAuth) return null;

  return <>{children}</>;
};

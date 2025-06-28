'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ClientAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const publicPaths = ['/login'];

    const isPublic = publicPaths.includes(pathname);
    const isLoggedIn = !!accessToken;

    if (!isPublic && !isLoggedIn) {
      router.push('/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
}

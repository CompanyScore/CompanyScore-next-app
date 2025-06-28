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

    // если мы не на /login и не залогинены — редиректим
    if (pathname !== '/login' && !accessToken) {
      router.replace('/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
}

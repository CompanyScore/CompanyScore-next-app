'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ClientAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const isLoginPage = pathname === '/login' || pathname.startsWith('/login');

    if (!accessToken && !isLoginPage) {
      router.replace('/login');
    } else {
      setIsReady(true); // всё хорошо, показываем children
    }
  }, [pathname, router]);

  // Пока не поняли, нужно ли редиректить — не рендерим
  if (!isReady) return null;

  return <>{children}</>;
}

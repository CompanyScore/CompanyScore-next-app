'use client';

// import { useEffect, useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';

export default function ClientAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const router = useRouter();
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   const checkAuth = () => {
  //     const accessToken = localStorage.getItem('accessToken');
  //     const isLoginPage =
  //       pathname === '/login' || pathname.startsWith('/login');

  //     if (!accessToken && !isLoginPage) {
  //       router.replace('/login');
  //     } else {
  //       setIsReady(true);
  //     }
  //   };

  //   // Проверяем после небольшого тайм-аута, чтобы дать браузеру прогрузиться
  //   const timeout = setTimeout(checkAuth, 50);

  //   return () => clearTimeout(timeout);
  // }, [pathname]);

  // if (!isReady) return null;

  return <>{children}</>;
}

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 минут – данные считаются свежими
            gcTime: 1000 * 60 * 10, // 10 минут – удаляются из кэша после неиспользования
            refetchOnWindowFocus: false, // отключить авто-рефетч при переключении вкладок
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

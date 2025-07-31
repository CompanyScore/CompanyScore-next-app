import { Inter } from 'next/font/google';
import { Header, HeaderMobile, Footer } from '@/widgets';
import './globals.css';

import { Tanstack } from './tanstack';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        {/* <ThemeProvider> */}
        <Tanstack>
          <Header />
          <HeaderMobile />

          <main className="flex-1 h-full">{children}</main>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Tanstack>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

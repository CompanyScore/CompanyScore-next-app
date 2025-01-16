import { Geist, Geist_Mono } from "next/font/google";
// import "@/app/global.css"; // Подключаем общие стили
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";
import ThemeProvider from "@/shared/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function CompaniesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1 container mx-auto h-full px-4">
            {/* Можно добавить уникальный контент для страницы companies */}
            <section className="py-4">
              <h1 className="text-2xl font-bold">Companies</h1>
            </section>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

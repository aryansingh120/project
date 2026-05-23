import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEO Admin Panel',
  description: 'Premium admin dashboard for SEO and blog management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background dark:text-white min-h-screen flex">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="p-6 flex-1 overflow-auto">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

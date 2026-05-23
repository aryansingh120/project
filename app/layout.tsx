import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'A working Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <main>{children}</main>
      </body>
    </html>
  );
}

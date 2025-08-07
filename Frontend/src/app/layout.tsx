import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Upwork Dashboard',
  description: 'Professional dashboard for freelancers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-screen bg-slate-50'>
          <Sidebar />
          <div className='flex-1 overflow-auto'>{children}</div>
        </div>
      </body>
    </html>
  );
}

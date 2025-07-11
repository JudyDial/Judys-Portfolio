import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Judy Njenga | Portfolio',
  description: 'Judy Njenga’s personal portfolio showcasing projects and skills.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}>
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}

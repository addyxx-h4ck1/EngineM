import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { NotiProvider } from './context/NotiContext';
import Noti from './components/Noti';
import 'react-loading-skeleton/dist/skeleton.css';
config.autoAddCss = false;

const roboto = Poppins({
  weight: '300',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Enginem - Powerful, Secure, and Free Email Delivery Engine',
  description:
    'Enginem is a powerful, secure, and easy-to-use email delivery engine, offering a free API to ensure your emails reach the inbox. Perfect for developers, businesses, and enterprises.',
  keywords:
    'email engine, free email API, email delivery, secure email, inbox delivery, email service, SMTP, email API, email marketing',
  authors: [
    { name: 'Pixelrart Team', url: 'https://mailclient-p1hb.onrender.com' },
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Enginem - Your Go-To Email Delivery Engine',
    description:
      'Enginem provides a powerful and secure email delivery API. Its easy to use, free, and ensures your emails reach the inbox.',
    url: 'https://mailclient-p1hb.onrender.com',
    type: 'website',
    images: [
      {
        url: 'https://media.istockphoto.com/id/1245268075/vector/sending-fast-mail-icon-newsletter-message-logo-vector.jpg?s=612x612&w=0&k=20&c=-OnmTfaCfo4uIVPO4n0C0jvY0t1xQik8zY7wD095ahM=', // Make sure you have an Open Graph image at this path
        width: 1200,
        height: 630,
        alt: 'Enginem - Powerful, Secure Email Delivery Engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enginem - Powerful, Secure, and Free Email Delivery Engine',
    description:
      'Enginem provides a powerful, secure, and easy-to-use email delivery API, ensuring your emails reach the inbox.',
    images:
      'https://media.istockphoto.com/id/1245268075/vector/sending-fast-mail-icon-newsletter-message-logo-vector.jpg?s=612x612&w=0&k=20&c=-OnmTfaCfo4uIVPO4n0C0jvY0t1xQik8zY7wD095ahM=', // Same image as in Open Graph
  },
};

export function generateViewport() {
  return 'width=device-width, initial-scale=1';
}

function getInitialTheme(): string {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return savedTheme || (prefersDarkMode ? 'dark' : 'light');
  }
  // Default to 'light' for server-side rendering
  return 'light';
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={getInitialTheme()}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={roboto.className}>
        <NotiProvider>
          <Noti />
          <ThemeProvider>{children}</ThemeProvider>
        </NotiProvider>
      </body>
    </html>
  );
}

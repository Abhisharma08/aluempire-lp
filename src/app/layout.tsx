import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'AluEmpire | Sliding Partition Doors',
  description:
    'Transform your interiors with elegant, flexible, and space-saving sliding partition doors tailored to your design vision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load gtag.js after hydration */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17338354366"
          strategy="afterInteractive"
        />
        {/* Initialize Google Analytics */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17338354366');
          `}
        </Script>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}

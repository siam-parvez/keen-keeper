import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TailwindHelper } from '@/components/tailwind-helper';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { AppProvider } from '@/context/FriendsContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | KeenKeeper',
    default: 'KeenKeeper - Keep Your Friendships Alive',
  },
  description: 'Keep Your Friendships Alive',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Header className="fixed inset-x-0 bg-background" />
        <main className="container mx-auto px-3 py-32 space-y-6 md:space-y-12">
          <AppProvider>{children}</AppProvider>
        </main>
        <TailwindHelper />
        <Footer />
      </body>
    </html>
  );
}

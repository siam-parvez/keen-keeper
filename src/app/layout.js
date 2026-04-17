import './globals.css';

export const metadata = {
  title: 'Keen Keeper',
  description: 'Keep Your Friendships Alive',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="">
        <main>{children}</main>
      </body>
    </html>
  );
}

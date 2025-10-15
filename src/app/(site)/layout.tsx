import type { Metadata } from "next";
import "../globals.css";
import { Cinzel, Inter, Playfair_Display } from 'next/font/google';
import FirstLoad from '@/app/components/FirstLoad';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', weight: ['400','700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['300','400','600'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400','700'] });

export const metadata: Metadata = {
  title: "Rijan Buddhacharya — Developer & Gamer",
  description: "Portfolio and blog of Rijan Buddhacharya — frontend developer, tinkerer and gamer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        <FirstLoad />
        {children}
      </body>
    </html>
  );
}

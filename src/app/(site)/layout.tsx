import type { Metadata } from "next";
import "../globals.css";
import { Cinzel, Inter, Playfair_Display } from 'next/font/google';
import FirstLoad from '@/app/components/FirstLoad';
import { ThemeProvider } from 'next-themes';
import CelestialWheel from '@/app/components/CelestialWheel';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', weight: ['400', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['300', '400', '600'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '700'] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FirstLoad />
          {/* Quarter-circle CelestialWheel toggle positioned in the top-right corner */}
          <div className="fixed top-0 right-0 z-50 overflow-hidden" style={{ width: '140px', height: '140px' }}>
            <div style={{ position: 'absolute', top: '0', right: '0', transform: 'translate(50%, -50%)' }}>
              <CelestialWheel size={280} spinDuration={0.9} />
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
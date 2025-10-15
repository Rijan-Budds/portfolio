'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="nav-slim bg-[var(--bg)] site-header">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="w-10 h-10 rounded-lg bg-accent" style={{ background: 'linear-gradient(135deg,var(--accent), rgba(200,161,91,0.6))' }} />
          <div>
            <div className="font-extrabold text-lg text-[var(--text)] font-cinzel">Rijan</div>
            <div className="text-xs text-[var(--muted)] font-playfair">Developer & Gamer</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? 'text-[var(--accent)] font-bold'
                        : 'text-[var(--muted)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

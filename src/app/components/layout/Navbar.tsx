"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
        <nav className="relative">
          <button
            className="md:hidden p-2 rounded border border-white/5"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden md:flex gap-6 items-center">
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

          {open && (
            <div className="md:hidden absolute right-0 mt-2 w-44 bg-card border border-white/5 rounded shadow-lg py-2 z-50">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href} className="px-4 py-2">
                    <Link
                      href={item.href}
                      className="block text-[var(--muted)] hover:text-[var(--accent)]"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

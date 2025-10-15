import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; 2025 Rijan Buddhacharya</p>
      <ul className="flex justify-center gap-4 mt-2">
        <li>
          <Link href="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-gray-400 transition-colors">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-400 transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

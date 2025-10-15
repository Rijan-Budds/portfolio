import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <p className="text-xl font-bold">Logo</p>

      {/* Main navigation */}
      <ul className="flex gap-6">
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

      {/* Social links */}
      <ul className="flex gap-4">
        <li>
          <a href="#" className="hover:text-gray-400 transition-colors">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 transition-colors">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Facebook
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

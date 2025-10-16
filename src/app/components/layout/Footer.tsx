import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-8 text-center md:text-left">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
          <div>
            <h2 className="text-xl font-semibold font-cinzel text-accent">Rijan Buddhacharya</h2>
            <p className="text-sm text-[var(--muted)] font-playfair mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
        </div>

        <div>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
            <h3 className="text-lg font-medium mb-3 font-playfair text-[var(--muted)]">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://github.com/Rijan-Budds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rijan-buddhacharya-0032781a6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/buddsrijan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/rijan.batman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

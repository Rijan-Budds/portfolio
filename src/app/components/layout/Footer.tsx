import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div style={{fontWeight:700}}>Rijan Buddhacharya</div>
          <div className="muted">&copy; {new Date().getFullYear()}</div>
        </div>

        <nav aria-label="Footer navigation" className="footer-nav">
          <ul>
            <li><Link href="/about" className="muted">About</Link></li>
            <li><Link href="/portfolio" className="muted">Portfolio</Link></li>
            <li><Link href="/blog" className="muted">Blog</Link></li>
            <li><Link href="/contact" className="muted">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

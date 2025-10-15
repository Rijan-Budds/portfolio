import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer style={{padding:'2rem 0',borderTop:'1px solid rgba(255,255,255,0.03)',marginTop:40}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>Rijan Buddhacharya</div>
          <div className="muted">&copy; {new Date().getFullYear()}</div>
        </div>

        <nav aria-label="Footer navigation">
          <ul style={{display:'flex',gap:16,listStyle:'none',margin:0,padding:0,alignItems:'center'}}>
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

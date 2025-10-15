import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="nav-slim" role="banner">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div style={{width:40,height:40,borderRadius:10,background:'linear-gradient(135deg,var(--accent),#4f46e5)'}} />
          <div>
            <div style={{fontWeight:800}}>Rijan</div>
            <div className="muted" style={{fontSize:12}}>Dev & Designer</div>
          </div>
        </Link>

        <nav aria-label="Main navigation">
          <ul style={{display:'flex',gap:20,alignItems:'center',listStyle:'none',margin:0,padding:0}}>
            <li><Link href="/about" className="muted">About</Link></li>
            <li><Link href="/portfolio" className="muted">Portfolio</Link></li>
            <li><Link href="/blog" className="accent">Blog</Link></li>
            <li><Link href="/contact" className="muted">Contact</Link></li>
            <li><a href="#" className="btn">Contact me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

import React from 'react';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Projects from '@/app/components/sections/Projects';

export default function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{padding:'2.5rem 0'}}>
        <header style={{marginBottom:16}}>
          <h1>Portfolio</h1>
          <p className="muted">Check out some of my latest works.</p>
        </header>

        <Projects />
      </main>
      <Footer />
    </div>
  );
}
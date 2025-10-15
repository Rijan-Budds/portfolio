import React from 'react';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import ContactSection from '@/app/components/sections/Contact';

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{padding:'2.5rem 0'}}>
        <header style={{marginBottom:16}}>
          <h1>Contact</h1>
          <p className="muted">Get in touch — I respond to serious inquiries.</p>
        </header>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
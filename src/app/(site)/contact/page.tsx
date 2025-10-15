import React from 'react';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import ContactSection from '@/app/components/sections/Contact';

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{padding:'2.5rem '}}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
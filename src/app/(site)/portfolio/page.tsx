"use client";
import React from 'react';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Projects from '@/app/components/sections/Projects';

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
}

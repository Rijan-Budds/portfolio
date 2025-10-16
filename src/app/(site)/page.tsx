"use client";
import React from "react";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects limit={3}/>
      <Footer />
    </>
  );
}

export default Home;

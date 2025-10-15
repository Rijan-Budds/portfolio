import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="bg-black p-8 text-center">
  <h2 className="text-4xl font-bold mb-2 font-cinzel text-accent">Welcome weary traveller</h2>
  <Image src="/dark-souls-knight.gif" alt="gif" width={600} height={400} className="mx-auto mb-4 rounded-lg" unoptimized />
  <p className="text-lg text-[var(--muted)] font-playfair">Rest here, for great adventures lie ahead.</p>
             
    </section>
  );
}

export default Hero;
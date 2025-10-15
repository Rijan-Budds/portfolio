import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="bg-black p-8 text-center">
      <h2 className="text-4xl font-bold mb-2">Welcome weary traveller</h2>
      <Image src="/dark-souls-knight.gif" alt="gif" width={600} height={400} className="mx-auto mb-4 rounded-lg" />
      <p className="text-lg text-gray-700">Rest here, for great adventures lie ahead.</p>
             
    </section>
  );
}

export default Hero;
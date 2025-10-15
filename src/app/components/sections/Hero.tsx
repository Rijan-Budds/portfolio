"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="p-8 text-center bg-[var(--card)]">
      <h2 className="text-4xl font-bold mb-2 font-cinzel text-accent">Welcome weary traveller</h2>
      
  <div className="mx-auto mb-4 rounded-lg cursor-pointer inline-block group relative" onClick={toggleMusic}>
        <Image
          src="/dark-souls-knight.gif"
          alt="Dark Souls Knight"
          width={600}
          height={400}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 text-white px-4 py-2 rounded-md">
            <span className="text-sm font-medium">Click to play music</span>
          </div>
        </div>
      </div>
      
      <p className="text-lg text-[var(--muted)] font-playfair">Rest here, for great adventures lie ahead.</p>
      
      {/* Hidden audio element */}
      <audio 
        ref={audioRef}
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/Elden Ring but it's lofi beats.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}

export default Hero;
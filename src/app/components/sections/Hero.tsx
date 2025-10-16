"use client";
import React from "react";
import Image from "next/image";
import { useMusic } from "../../context/MusicContent";

function Hero() {
  const { playMusic } = useMusic();

  return (
    <section className="p-8 text-center bg-[var(--card)]">
      <h2 className="text-4xl font-bold mb-2 font-cinzel text-accent">
        Welcome weary traveller
      </h2>

      <div
        className="mx-auto mb-4 rounded-lg cursor-pointer inline-block group relative"
        onClick={playMusic}
      >
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
            <span className="text-sm font-medium">
              Listen to some lofi while looking at my portfolio
            </span>
          </div>
        </div>
      </div>

      <p className="text-lg text-[var(--muted)] font-playfair">
        Rest here, for great adventures lie ahead.
      </p>
    </section>
  );
}

export default Hero;

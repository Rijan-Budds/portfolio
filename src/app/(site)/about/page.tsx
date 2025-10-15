import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import AboutSection from "@/app/components/sections/About";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <header className="py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">About</h1>
              <p className="text-gray-500 mb-2">
                I&apos;m a Frontend Developer from Bhaktapur, Nepal.
              </p>
              <p className="text-gray-500">
                I spend my days turning lines of code into immersive,
                interactive web experiences—kind of like leveling up a website
                one pixel at a time. When I&apos;m not building interfaces,
                you&apos;ll probably find me exploring virtual worlds, hunting Easter
                eggs in games, or geeking out over the latest tech.
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/giphy.gif"
                alt="Rijan Buddhacharya"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </header>

        <section>
          <AboutSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

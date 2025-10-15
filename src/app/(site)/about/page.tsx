"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import AboutSection from "@/app/components/sections/About";
import InfiniteScroll from "@/app/components/ui/InfiniteScroll";
import InfiniteMenu from "@/app/components/ui/InfiniteMenu";

const scrollItems = [
  { content: "I love to use various React tools" },
  {
    content: <p>I have a passion for creating interactive web applications.</p>,
  },
  { content: "Skilled in JavaScript, TypeScript, and Node.js" },
  { content: <p>I enjoy experimenting with AI and Web3 technologies.</p> },
  { content: "Gaming fuels my creativity and problem-solving skills" },
  {
    content: (
      <p>
        Late-night coding sessions are often powered by coffee and Dark Souls
        marathons.
      </p>
    ),
  },
  { content: "I build projects that combine design, performance, and fun" },
  { content: <p>I love optimizing code and exploring game mechanics alike</p> },
  {
    content:
      "When not coding, you’ll find me conquering bosses or exploring open-world games",
  },
  { content: <p>Always curious and learning new things every day</p> },
];

const menuItems = [
  {
    image: "/java.png",
    link: "https://docs.oracle.com/en/java/",
  },
  {
    image: "/python.png",
    link: "https://docs.python.org/3/",
  },
  {
    image: "/next.png",
    link: "https://nextjs.org/docs",
  },
  {
    image: "/react.jpg",
    link: "https://react.dev/learn",
  },
  {
    image: "/php.jpg",
    link: "https://www.php.net/docs.php",
  },
  {
    image: "/elixir.jpg",
    link: "https://hexdocs.pm/elixir/introduction.html",
  },
  {
    image: "/phoenix.jpg",
    link: "https://hexdocs.pm/phoenix/overview.html",
  },
  {
    image: "/ruby.jpg",
    link: "https://www.ruby-lang.org/en/documentation/",
  },
  {
    image: "/js.jpg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: "/c.jpg",
    link: "https://devdocs.io/c/",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <header className="py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 font-cinzel text-accent">About</h1>
              <p className="text-[var(--muted)] mb-2 font-playfair">
                I&apos;m a Frontend Developer from Bhaktapur, Nepal.
              </p>
              <p className="text-[var(--muted)] font-playfair">
                I spend my days turning lines of code into immersive,
                interactive web experiences—kind of like leveling up a website
                one pixel at a time. When I&apos;m not building interfaces,
                you&apos;ll probably find me exploring virtual worlds, hunting
                Easter eggs in games, or geeking out over the latest tech.
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
                unoptimized
              />
            </div>
          </div>
          <hr className="my-12" style={{ borderColor: 'rgba(255,255,255,0.03)' }} />
          <h1 className="text-4xl mb-4 text-center mb-4 font-cinzel text-accent">Somethings about me</h1>

          <div style={{ height: "300px", position: "static" }}>
            <InfiniteScroll
              items={scrollItems}
              isTilted={false}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={1}
              autoplayDirection="up"
              pauseOnHover={true}
            />
          </div>
        </header>
        <hr className="my-12" style={{ borderColor: 'rgba(255,255,255,0.03)' }} />

        <section className="mb-8">
          <h2 className="text-2xl font-cinzel text-accent mb-4 text-center">Languages I&apos;m comfortable with</h2>
          <div className="card" style={{ padding: 12, borderRadius: 12 }}>
            <div style={{ height: 300, position: 'static' }}>
              <InfiniteMenu items={menuItems} />
            </div>
          </div>
        </section>
        <section>
          <AboutSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

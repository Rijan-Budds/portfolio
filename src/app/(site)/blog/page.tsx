import React from "react";
import Link from "next/link";
import postsData from "@/data/posts";
import type { Post } from "@/data/types";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata = {
  title: "Blog — Chronicles",
  description:
    "Musings on code, design, and digital craftsmanship by Rijan Buddhacharya.",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogPage() {
  return (
    <div>
      <Navbar />

      <main className="container py-16 px-4">
        <section className="blog-hero">
          <div className="title font-cinzel">Chronicles</div>
          <div className="blog-accent-bar" />
          <p className="subtitle">
            Musings on code, design, and digital craftsmanship
          </p>
        </section>

        <section className="max-w-6xl mx-auto mt-12">
          {postsData.length > 0 && (
            <div className="featured-post">
              <div className="left">
                <div className="post-accent mb-4">
                  <span className="dot" />
                  <span className="muted">Featured</span>
                </div>
                <h2 className="font-cinzel text-3xl text-accent mb-3">
                  {postsData[0].title}
                </h2>
                <time
                  dateTime={postsData[0].date}
                  className="text-muted font-playfair italic block mb-3"
                >
                  {formatDate(postsData[0].date)}
                </time>
                <p className="text-muted mb-6">{postsData[0].excerpt}</p>
                <Link href={postsData[0].slug} className="btn">
                  Read Featured
                </Link>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {postsData.slice(1).map((post: Post) => (
              <article key={post.id} className="post-card-small">
                <div className="post-accent">
                  <span className="dot" />
                  <div>
                    <h3 className="font-cinzel text-lg text-accent mb-1">
                      <Link href={post.slug}>{post.title}</Link>
                    </h3>
                    <time dateTime={post.date} className="text-muted text-sm">
                      {formatDate(post.date)}
                    </time>
                  </div>
                </div>
                <p className="text-muted text-sm mt-2">{post.excerpt}</p>
                <div className="mt-3">
                  <Link
                    href={post.slug}
                    className="text-accent hover:text-accent/80"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

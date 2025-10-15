"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import postsData from '@/data/posts';
import type { Post } from '@/data/types';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return iso; }
}

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = Array.from(new Set(postsData.flatMap((p: Post) => p.tags || [])));

  const filtered = activeTag ? postsData.filter((p) => p.tags?.includes(activeTag)) : postsData;

  return (
    <div>
      <Navbar />

      <main className="container">
        <section className="page-hero">
          <div>
            <h1>Thoughts & Notes</h1>
            <p className="muted">Writing about design, frontend engineering, and the occasional experiment.</p>
          </div>
          <div />
        </section>

        <section style={{marginTop:20}}>
          <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',marginBottom:16}}>
            <button className="tag" onClick={() => setActiveTag(null)} aria-pressed={!activeTag}>All</button>
            {tags.map((t) => (
              <button key={t} className="tag" onClick={() => setActiveTag(t)} aria-pressed={activeTag===t}>{t}</button>
            ))}
          </div>

          <div className="grid">
            {filtered.map((post: Post) => (
              <article key={post.id} className="card">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:12}}>
                  <div>
                    <h2><Link href={post.slug} className="accent">{post.title}</Link></h2>
                    <div className="meta">{formatDate(post.date)} • {post.tags?.join(', ')}</div>
                    <p style={{marginTop:8}}>{post.excerpt}</p>
                  </div>
                  <div style={{minWidth:72,textAlign:'right'}}>
                    <Link href={post.slug} className="btn">Read</Link>
                  </div>
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
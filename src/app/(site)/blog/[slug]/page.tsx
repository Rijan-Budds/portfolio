import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the post by slug
  const post = posts.find((p) => p.slug === `/blog/${params.slug}`);

  // If post not found, return 404
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Navbar />

      <main className="container py-16">
        <article className="prose prose-invert mx-auto">
          <header className="mb-12 text-center">
            <time
              dateTime={post.date}
              className="text-muted font-playfair italic block mb-4"
            >
              {formatDate(post.date)}
            </time>
            <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 text-accent">
              {post.title}
            </h1>
          </header>

          {/* This is where the content will go. For now, showing the excerpt */}
          <div className="lead text-xl text-muted mb-8">{post.excerpt}</div>
          
          <div className="text-muted italic text-center mt-16">
            Content coming soon...
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === `/blog/${params.slug}`);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}
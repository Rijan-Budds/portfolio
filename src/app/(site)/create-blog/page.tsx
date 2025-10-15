"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import type { Post } from "@/data/types";

// Dynamically import the markdown editor to avoid SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function CreateBlog() {
  const router = useRouter();
  const [post, setPost] = useState<Partial<Post>>({
    title: "",
    excerpt: "",
    content: "",
  });
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Generate a slug from the title
      const slug = `/blog/${post.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`;

      const newPost = {
        ...post,
        id: Date.now().toString(),
        date: new Date().toISOString().split("T")[0],
        slug,
      };

      const res = await fetch("/api/blog/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!res.ok) throw new Error("Failed to create post");

      // Redirect to the new post
      router.push(slug);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black/95">
      <div className="container py-8 px-4">
        <header className="mb-8">
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-accent mb-4">
            Create New Post
          </h1>
          <p className="text-muted font-playfair italic">
            Craft your story with markdown
          </p>
        </header>

        <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
          <div>
            <label htmlFor="title" className="block text-accent mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="w-full bg-card border border-accent/20 rounded-lg px-4 py-2 text-white focus:border-accent outline-none transition-colors"
              placeholder="Enter your post title..."
              required
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-accent mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              className="w-full bg-card border border-accent/20 rounded-lg px-4 py-2 text-white focus:border-accent outline-none transition-colors h-24 resize-none"
              placeholder="Write a brief description..."
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-accent">Content</label>
              <button
                type="button"
                onClick={() => setPreview(!preview)}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                {preview ? "Edit" : "Preview"}
              </button>
            </div>
            <div data-color-mode="dark">
              <MDEditor
                value={post.content}
                onChange={(value) => setPost({ ...post, content: value || "" })}
                preview={preview ? "preview" : "edit"}
                height={400}
                className="bg-card rounded-lg overflow-hidden"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Post"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
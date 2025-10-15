import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { Post } from "@/data/types";

export async function POST(request: Request) {
  try {
    const post: Post = await request.json();

    // Import current posts module (safer than parsing the file contents)
    const postsModule = await import("@/data/posts");
    const currentPosts: Post[] = (postsModule && (postsModule.default ?? postsModule.posts)) || [];

    // Prepend new post
    const updatedPosts = [post, ...currentPosts];

    // Write new posts.ts file
    const postsPath = path.join(process.cwd(), "src", "data", "posts.ts");
    const newContent = `import type { Posts } from './types';

export const posts: Posts = ${JSON.stringify(updatedPosts, null, 2)};

export default posts;
`;

    await fs.writeFile(postsPath, newContent, "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ message: "Failed to create post" }, { status: 500 });
  }
}
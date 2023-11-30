import React from "react";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function ArtBlogPage() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h2 className="font-bold">My Art Posts: </h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug} className="p-5 text-amber-500 font-bold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

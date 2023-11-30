import React from "react";
import Comments from "@/components/Comments";
import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);
  console.log(post, "this is from the blog page");

  if (!post) {
    notFound();
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <article
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className="prose dark:prose-invert"
      ></article>
      {/* {@ts-ignore} */}
      <Comments postSlug={params.slug} />
    </div>
  );
}

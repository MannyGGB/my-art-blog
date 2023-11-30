import React from "react";
import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

export default async function Comments({ postSlug }: { postSlug: string }) {
  let comments = [];

  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 0 },
    });
    const response = await commentsResult.json();
    comments = response.comments.rows;
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="flex flex-col">
      <CommentForm postSlug={postSlug} />

      {/* @ts-ignore */}
      {comments.map((comment) => {
        return (
          <ul key={comment.id} className=" p-5">
            <li>
              {comment.username} says...
              <br />
              {comment.content}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

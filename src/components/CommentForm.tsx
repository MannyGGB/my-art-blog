"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { WEB_SITE } from "config";

export function CommentForm({ postSlug }: { postSlug: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("submitting the form");
    event.preventDefault();

    const username = event.target["username"].value;
    const comment = event.target["comment"].value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    const res = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      body: formData,
      method: "POST",
    });

    startTransition(() => {
      router.refresh();
      console.log("reloaded the page data");
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">Name</label>
      <input type="text" name="username" />

      <label htmlFor="comment">Comment</label>
      <textarea
        name="comment"
        cols={30}
        rows={10}
        placeholder="Write your comment here"
        className="text-neutral-900"
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "sending comment..." : "send comment"}
      </button>
    </form>
  );
}

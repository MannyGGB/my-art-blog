import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <div>
      <nav className="flex justify-evenly p-10">
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/blog">Art Blog</Link>
      </nav>
    </div>
  );
}

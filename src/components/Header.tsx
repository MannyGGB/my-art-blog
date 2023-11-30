import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <div>
      <h1>Header</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/blog">Art Blog</Link>
      </nav>
    </div>
  );
}

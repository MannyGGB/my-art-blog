import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-10">
      <h2 className=" font-bold">Personal Profile</h2>
      <p>
        Hello! I am Manuel, a 29-year-old aspiring developer from Spain. I have
        lived in Norwich for 6 years now, and I am in the process of learning
        HTML, CSS, and JavaScript to become a fully-fledged developer.
      </p>
      <p>
        My main inspirations come from cinema and art, so I always try to
        showcase them whenever I have the chance.
      </p>
      <p>Visit my socials to see my other projects.</p>
      <nav>
        <Link
          href="https://github.com/MannyGGB"
          className="text-amber-500 font-bold p-5"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/manuel-gonzalez-garcia-de-blas/"
          className="text-amber-500 font-bold p-5"
        >
          LinkedIn
        </Link>
      </nav>
    </main>
  );
}

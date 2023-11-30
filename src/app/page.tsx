export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1>Welcome to my art blog!</h1>
      <p>Thank you for visiting, fellow art lover.</p>
      <section>
        <p>If you are looking for: </p>
        <ul className="list-disc">
          <li>Alternative art</li>
          <li>Descriptions of your favourite pieces of art</li>
          <li>A forum to express your opinions on art</li>
          <p>This is your blog!</p>
        </ul>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h2 className="font-bold">Welcome to my art blog!</h2>
      <p>Thank you for visiting, fellow art lover.</p>
      <section>
        <p>If you are looking for: </p>
        <ul className="list-disc">
          <li>A wide variety of art forms</li>
          <li>Descriptions of pieces of art</li>
          <li>A forum to express your opinions on art</li>
          <br />
          <p className="text-center">This is your blog!</p>
        </ul>
      </section>
    </main>
  );
}

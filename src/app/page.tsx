import Link from "next/link";

export default async function Home() {
  return (
    <>
      <header className="font-sans text-5xl flex justify-center">Roomy</header>
      <main
        className="grid content-center
        sm:grid-cols-4 sm:gap-4 
        grid-cols-1"
      >
        <h1
          className="font-sans text-3xl sm:col-start-2 sm:col-span-2 flex justify-center
          col-start-1"
        >
          Your intelligent butler in shared home...
        </h1>
        <Link
          className="flex justify-center 
          sm:col-start-2 sm:col-end-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded sm:w-24
          col-start-1 mt-5 ml-6 mr-6"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="flex justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded sm:w-24
          sm:col-start-3 sm:col-end-4
          col-start-1 mt-5 ml-6 mr-6"
          href="/login"
        >
          Register
        </Link>
      </main>
      <footer></footer>
    </>
  );
}

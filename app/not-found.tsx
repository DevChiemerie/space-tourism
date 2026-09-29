import Link from "next/link";

function NotFound() {
  return (
    <main className="bg-darkblue flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="font-heading text-lightblue/80 mb-20 p-8 text-2xl uppercase">
        This page could not be found :(
      </h1>
      <Link href="/" className="bg-lightblue font-body p-6 text-lg">
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;

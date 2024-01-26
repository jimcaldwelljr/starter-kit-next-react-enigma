import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-28 py-9 md:py-16">
      <h2 className="text-3xl font-bold mb-5">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="bg-zinc-700 px-6 py-3 text-white inline-block my-7 hover:opacity-80"
      >
        Return Home
      </Link>
    </div>
  );
}

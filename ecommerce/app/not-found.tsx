import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[120px] font-bold leading-none text-dark-900 md:text-[200px] animate-pulse">
        404
      </h1>
      <h2 className="mb-6 text-heading-3 text-dark-900">
        We can't find that page.
      </h2>
      <p className="mb-8 max-w-md text-body text-dark-700">
        Sorry, the page you are looking for doesn't exist or has been moved.
        But don't worry, we have plenty of other great shoes.
      </p>
      <Link
        href="/"
        className="rounded-full bg-dark-900 px-8 py-4 text-body-medium text-light-100 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500]"
      >
        Back to Home
      </Link>
    </main>
  );
}

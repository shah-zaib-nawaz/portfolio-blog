import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-lg text-gray-500">
                This page could not be found.
            </p>
            <Link
                href="/"
                className="rounded-md border px-4 py-2 hover:bg-gray-100"
            >
                Go home
            </Link>
        </main>
    );
}
'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service (e.g., Sentry, LogRocket)
    console.error('Root error caught:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <div className="space-y-4 max-w-md">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Something went wrong!
        </h2>
        <p className="text-muted-foreground">
          An unexpected error occurred while loading this page. Don't worry, your data is safe, but we need to give it another shot.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <button
            onClick={() => reset()}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-50 shadow hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 transition-colors"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}
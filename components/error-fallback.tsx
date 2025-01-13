"use client";

import { useRouter } from "next/router";
import * as React from "react";
import { useErrorBoundary } from "react-error-boundary";

interface ErrorFallbackProps {
  error: { message: string };
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  const router = useRouter();
  const { resetBoundary } = useErrorBoundary();

  const goBackToHome = React.useCallback(() => {
    router.push("/");
    setTimeout(() => resetBoundary(), 300);
  }, [resetBoundary, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 bg-background-darker rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-4">
          Oops! Something went wrong
        </h1>

        <div className="mb-6">
          <p className="text-foreground/80 mb-4">
            We apologize for the inconvenience. Here&apos;s what happened:
          </p>
          <pre className="bg-red-100 text-red-600 p-4 rounded-md text-sm overflow-auto">
            {error.message}
          </pre>
        </div>

        <div className="space-x-4">
          <button
            type="button"
            onClick={resetBoundary}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Again
          </button>

          <button
            type="button"
            onClick={goBackToHome}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;

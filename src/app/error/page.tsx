"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
            <div className="w-full max-w-sm text-center">

                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M12 9v3.75m9.303 3.376c.866 1.5-.217 3.374-1.948 3.374H2.645c-1.73 0-2.813-1.874-1.948-3.374l8.306-14.748c.866-1.5 3.032-1.5 3.898 0l8.306 14.748zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>

                <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
                <p className="text-sm text-muted-foreground mb-8">
                    {error.message ?? "An unexpected error occurred. Please try again."}
                </p>

                <div className="flex flex-col gap-2">
                    <button
                        onClick={reset}
                        className="w-full rounded-md bg-foreground text-background py-2.5 text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                        Try again
                    </button>
                    <Link
                        href="/"
                        className="w-full rounded-md border border-border py-2.5 text-sm hover:bg-muted transition-colors text-center"
                    >
                        Go home
                    </Link>
                </div>

            </div>
        </div>
    )
}
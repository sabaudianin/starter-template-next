import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
            <div className="w-full max-w-sm text-center">
                <p className="text-8xl font-semibold text-muted-foreground/20 mb-4">404</p>
                <h1 className="text-xl font-semibold mb-2">Page not found</h1>
                <p className="text-sm text-muted-foreground mb-8">
                    This page doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex rounded-md bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity"
                >
                    Go home
                </Link>
            </div>
        </div>
    )
}
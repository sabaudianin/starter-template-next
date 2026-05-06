import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-4">
            <p className="text-6xl font-semibold text-muted-foreground/30">404</p>
            <h1 className="text-xl font-semibold">Page not found</h1>
            <p className="text-sm text-muted-foreground">This page doesn&apos;t exist or has been moved.</p>
            <Link href="/" className="rounded-md border border-border px-4 py-2 text-sm mt-2">
                Go home
            </Link>
        </div>
    )
}
import Link from "next/link"

export const Cta = () => {
    return (
        <section className="max-w-2xl mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to build?</h2>
            <p className="text-muted-foreground text-sm mb-8">
                Everything you need to launch your SaaS is already wired up and waiting.
            </p>
            <Link
                href="/login"
                className="rounded-md bg-foreground text-background px-8 py-3 text-sm font-medium transition-opacity hover:opacity-80"
            >
                Start for free →
            </Link>
        </section>
    )
}

import Link from "next/link"

export const Hero = () => {
    return (
        <section>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 text-xs text-muted-foreground mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Next.js  • NextAuth  • Prisma  • Tailwind
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                Ship your SaaS
                <br />
                <span className="text-muted-foreground">in hours, not weeks !</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Production-ready Next.js starter with auth, database, email
                and dark mode, just clone, configure, deploy.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
                <Link
                    href="/login"
                    className="rounded-md bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                >
                    Get started free →
                </Link>
                <a
                    href="https://github.com/sabaudianin/app-prisma-betterAuth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border px-6 py-2.5 text-sm hover:bg-muted transition-colors"
                >
                    View on GitHub
                </a>
            </div>
        </section>

    )
}


export const StackSection = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
            <p className="text-center text-xs text-muted-foreground mb-8 uppercase tracking-widest">
                Built with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                {stack.map((s) => (
                    <span
                        key={s}
                        className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground bg-muted"
                    >
                        {s}
                    </span>
                ))}
            </div>
        </section>

    )
}


const stack = [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS v4",
    "NextAuth v5",
    "Prisma 7",
    "PostgreSQL",
    "Neon",
    "Resend",
    "Vercel",
]
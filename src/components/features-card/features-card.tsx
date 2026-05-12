
export const FeaturesCard = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((f) => (
                <div
                    key={f.title}
                    className="rounded-xl border border-border p-6 bg-background hover:bg-muted/50 transition-colors"
                >
                    <div className="text-xl mb-3">{f.icon}</div>
                    <p className="font-medium text-sm mb-1.5">{f.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </section>

    )
}

const features = [
    {
        icon: "🔐",
        title: "Authentication",
        desc: "Google OAuth + magic link email. Sessions handled by NextAuth v5 with role-based access control.",
    },
    {
        icon: "🗄️",
        title: "Database",
        desc: "Prisma ORM with PostgreSQL on Neon. Type-safe queries, migrations, ready to extend.",
    },
    {
        icon: "🌙",
        title: "Dark mode",
        desc: "System preference detection with manual toggle. Built with Tailwind v4 and next-themes.",
    },
    {
        icon: "📧",
        title: "Email",
        desc: "Magic link auth via Resend. Transactional email infrastructure ready to go.",
    },
    {
        icon: "🚀",
        title: "Deploy ready",
        desc: "One-click deploy to Vercel. Environment variables documented, migrations automated.",
    },
    {
        icon: "🎨",
        title: "Theming",
        desc: "CSS variables + Tailwind utilities. Swap the color palette in one file.",
    },
]

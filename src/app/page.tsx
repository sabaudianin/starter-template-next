import Link from "next/link"
import { auth } from "@/auth"
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle"

export default async function LandingPage() {
  const session = await auth()

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
            <span className="text-background text-xs font-bold">S</span>
          </div>
          <span className="font-semibold text-base">SaaS Template</span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {session ? (
            <Link
              href="/dashboard"
              className="rounded-md bg-foreground text-background px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-80"
            >
              Dashboard →
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-md border border-border px-4 py-1.5 text-sm hover:bg-muted transition-colors"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Next.js 15 · NextAuth v5 · Prisma 7 · Tailwind v4
        </div>

        <h1 className="text-6xl font-semibold tracking-tight mb-6 leading-tight">
          Ship your SaaS
          <br />
          <span className="text-muted-foreground">in hours, not weeks</span>
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-6 py-2.5 text-sm hover:bg-muted transition-colors"
          >
            View on GitHub
          </a>
        </div>

        {/* Social proof */}
        <p className="text-xs text-muted-foreground mt-8">
          Free to use · MIT License · One-click deploy to Vercel
        </p>
      </main>

      {/* Feature cards */}
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

      {/* Stack section */}
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

      {/* CTA bottom */}
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

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-bold">S</span>
            </div>
            <span className="text-sm font-medium">SaaS Template</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Built with Next.js · {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
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
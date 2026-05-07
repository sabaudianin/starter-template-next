import Link from "next/link"
import { auth } from "@/auth"
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle"

export default async function LandingPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <span className="font-semibold text-lg">SaaS Template</span>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {session ? (
            <Link href="/dashboard"
              className="rounded-md bg-foreground text-background px-4 py-1.5 text-sm">
              Dashboard
            </Link>
          ) : (
            <Link href="/login"
              className="rounded-md border border-border px-4 py-1.5 text-sm">
              Sign in
            </Link>
          )}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          Ship your SaaS faster
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Next.js starter with auth, database, email and dark mode - ready to clone and deploy in minutes.
        </p>
        <Link href="/login"
          className="rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium">
          Get started free
        </Link>
      </main>

      <section className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-border p-6">
            <p className="font-medium mb-2">{f.title}</p>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

const features = [
  { title: "Authentication", desc: "Google OAuth + magic link email. Sessions handled by NextAuth v5." },
  { title: "Database", desc: "Prisma ORM with PostgreSQL. Migrations, type safety, ready to extend." },
  { title: "Dark mode", desc: "System preference detection with manual toggle via next-themes." },
]
import Link from "next/link"
import { Hero } from "@/components/hero/hero"
import { Navbar } from "@/components/navbar/navbar"
import { SocialProof } from "@/components/socialProof/socialProof"
import { FeaturesCard } from "@/components/features-card/features-card"

export default async function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <Hero />
        <SocialProof />
      </main>
      <FeaturesCard />
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
            Built with Next.js • {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
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
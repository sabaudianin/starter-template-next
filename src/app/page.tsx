import Link from "next/link"
import { Hero } from "@/components/hero/hero"
import { Navbar } from "@/components/navbar/navbar"
import { SocialProof } from "@/components/social-proof/social-proof"
import { FeaturesCard } from "@/components/features-card/features-card"
import { StackSection } from "@/components/stack-section/stack-section"
import { Cta } from "@/components/cta/cta"
import { Footer } from "@/components/footer/footer"

export default async function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <Hero />
        <SocialProof />
        <FeaturesCard />
        <StackSection />
        <Cta />
      </main>
      <Footer />

    </div>
  )
}




import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { SignOutButton } from "@/components/sign-out-button/sign-out-button"
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle"

export default async function Dashboard() {
    const session = await auth()
    if (!session) redirect("/login")

    const initials = session.user?.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase() ?? "?"

    return (
        <div className="min-h-screen bg-background text-foreground">
            <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
                <span className="font-semibold">DASHBOARD</span>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a href="/settings" className="text-sm text-muted-foreground hover:text-foreground">
                        Settings
                    </a>
                    <SignOutButton />
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-medium text-sm">
                        {initials}
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">
                            Welcome, {session.user?.name ?? "there"}
                        </h1>
                        <p className="text-sm text-muted-foreground">{session.user?.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {[
                        { label: "Days active", value: "1" },
                        { label: "Plan", value: "Free" },
                        { label: "Role", value: session.user?.role ?? "user" },
                    ].map((s) => (
                        <div key={s.label} className="rounded-lg border border-border p-6">
                            <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
                            <p className="text-2xl font-semibold">{s.value}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-lg border border-border p-6">
                    <p className="font-medium mb-2">Your account</p>
                    <p className="text-sm text-muted-foreground">
                        ID: <code className="font-mono text-xs">{session.user?.id}</code>
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Role: <span className="font-medium">{session.user?.role}</span>
                    </p>
                </div>
            </main>
        </div>
    )
}
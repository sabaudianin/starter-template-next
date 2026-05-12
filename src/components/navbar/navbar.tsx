import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import Link from "next/link";
import { auth } from "@/auth";

export const Navbar = async () => {
    const session = await auth();
    return (
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

    )
}

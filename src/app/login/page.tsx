import { signInWithGoogle, signInWithEmail } from "@/app/actions/auth"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function LoginPage() {
    const session = await auth()
    if (session) redirect("/dashboard")

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="w-full max-w-sm px-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold mb-2">Welcome </h1>
                    <p className="text-sm text-muted-foreground">
                        Sign in to your account
                    </p>
                </div>

                <form action={signInWithGoogle} className="mb-4">
                    <button type="submit"
                        className="w-full rounded-md border border-border py-3 text-sm font-medium
                       hover:bg-muted transition-colors">
                        Continue with Google
                    </button>
                </form>

                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative text-center">
                        <span className="bg-background px-3 text-xs text-muted-foreground">
                            or
                        </span>
                    </div>
                </div>

                <form action={signInWithEmail} className="flex flex-col gap-3">
                    <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-md border border-border bg-background
                       px-3 py-3 text-sm outline-none focus:ring-2
                       focus:ring-foreground/20"
                    />
                    <button type="submit"
                        className="w-full rounded-md bg-foreground text-background
                       py-2.5 text-sm font-medium">
                        Send magic link
                    </button>
                    <p className="text-center text-xs text-muted-foreground">Log in via email works only for test address rafbobbob@gmail.com (Resend Sandbox Limitation)</p>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-6">
                    By signing in you agree to our terms of service.
                </p>
            </div>
        </div>
    )
}
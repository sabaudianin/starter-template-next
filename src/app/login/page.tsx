import { signInWithGoogle, signInWithEmail } from "@/app/actions/auth"

export default function LoginPage() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1 className="text-2xl font-semibold">Sign in</h1>

            <form action={signInWithGoogle}>
                <button type="submit">Sign in with Google</button>
            </form>

            <form action={signInWithEmail}>
                <input name="email" type="email" placeholder="Email address" />
                <button type="submit">Sign in with email</button>
            </form>
        </div>
    )
}
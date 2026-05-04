import { signIn } from "@/auth"

export default function LoginPage() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1 className="text-2xl font-semibold">Sign in</h1>

            <form action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/dashboard" })
            }}>
                <button type="submit">Sign in with Google</button>
            </form>

            <form action={async (formData: FormData) => {
                "use server"
                await signIn("resend", {
                    email: formData.get("email") as string,
                    redirectTo: "/dashboard",
                })
            }}>
                <input name="email" type="email" placeholder="Email address" />
                <button type="submit">Sign in with email</button>
            </form>
        </div>
    )
}
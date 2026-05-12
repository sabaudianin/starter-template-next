import { signOutUser } from "@/app/actions/auth";

export function SignOutButton() {
    return (
        <form action={signOutUser}>
            <button type="submit" className="rounded-md border border-border px-3 py-1.5 text-sm">Sign out</button>
        </form>
    )
}
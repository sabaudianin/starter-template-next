import { signOutUser } from "@/app/actions/auth";

export function SignOutButton() {
    return (
        <form action={signOutUser}>
            <button type="submit">Sign out</button>
        </form>
    )
}
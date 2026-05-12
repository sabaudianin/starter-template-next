import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { updateProfile } from "@/app/actions/user"
import Link from "next/link"

export default async function SettingsPage() {
    const session = await auth()
    if (!session) redirect("/login")

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="max-w-2xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                        ← Back to dashboard
                    </Link>
                </div>

                <h1 className="text-xl font-semibold mb-8">Settings</h1>

                <div className="rounded-lg border border-border p-6 mb-6">
                    <h2 className="font-medium mb-4">Profile</h2>
                    <form action={updateProfile} className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm text-muted-foreground block mb-1">Display name</label>
                            <input
                                name="name"
                                defaultValue={session.user?.name ?? ""}
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-muted-foreground block mb-1">Email</label>
                            <input
                                defaultValue={session.user?.email ?? ""}
                                disabled
                                className="w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground"
                            />
                        </div>
                        <button type="submit"
                            className="self-start rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium">
                            Save changes
                        </button>
                    </form>
                </div>

                <div className="rounded-lg border border-border p-6">
                    <h2 className="font-medium mb-4">Account</h2>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium">Delete account</p>
                            <p className="text-xs text-muted-foreground">Permanently delete your account and all data.</p>
                        </div>
                        <button className="rounded-md border border-red-200 text-red-600 px-3 py-1.5 text-sm hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950">
                            Delete
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
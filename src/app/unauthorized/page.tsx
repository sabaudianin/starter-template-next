import Link from "next/link"

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
            <div className="w-full max-w-sm text-center">

                <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>

                <h1 className="text-xl font-semibold mb-2">Access denied</h1>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    You don&apos;t have permission to view this page.
                    Contact your administrator if you think this is a mistake.
                </p>

                <div className="flex flex-col gap-2">
                    <Link
                        href="/dashboard"
                        className="w-full rounded-md bg-foreground text-background py-2.5 text-sm font-medium hover:opacity-80 transition-opacity text-center"
                    >
                        Back to dashboard
                    </Link>
                    <Link
                        href="/"
                        className="w-full rounded-md border border-border py-2.5 text-sm hover:bg-muted transition-colors text-center"
                    >
                        Go to homepage
                    </Link>
                </div>

            </div>
        </div>
    )
}
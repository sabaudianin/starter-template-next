export default function UnauthorizedPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl font-semibold">Access denied</h1>
            <p className="text-muted-foreground">
                You don&apos;t have permission to view this page.
            </p>
            <a href="/dashboard" className="underline text-sm">
                Go back to dashboard
            </a>
        </div>
    )
}
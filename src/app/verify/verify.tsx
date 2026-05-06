export default function Verify() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="w-full max-w-sm px-6 text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 text-xl">
                    ✉
                </div>
                <h1 className="text-xl font-semibold mb-3">Check your email</h1>
                <p className="text-sm text-muted-foreground mb-6">
                    We sent a sign-in link to your email address.
                    Click the link to sign (expires in 24 hours).
                </p>
                <p className="text-xs text-muted-foreground">
                    Didn&apos;t receive it?{" "}
                    <a href="/login" className="underline underline-offset-4">Try again</a>
                </p>
            </div>
        </div>
    )
}
"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: React.ReactNode }) {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}
            className="w-full rounded-md bg-foreground text-background py-3 text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-50">
            {pending ? "Loading..." : children}
        </button>
    )
}
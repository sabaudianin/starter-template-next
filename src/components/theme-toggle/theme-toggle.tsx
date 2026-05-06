
"use client";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function useIsMounted() {
    return useSyncExternalStore(
        () => () => { },          // no subscription needed
        () => true,              // client snapshot mounted
        () => false              // server snapshot not mounted
    )
}
// useSyncExternalStore returns false on the server and true on the client without triggering a state update cycle,so no cascading renders and no strict mode warning

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const isMounted = useIsMounted()

    if (!isMounted) return null

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border border-border px-3 py-1.5 text-sm"
        >
            {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
    )
}
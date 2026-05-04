// src/components/theme-toggle.tsx
"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // avoid hydration mismatch — only render after mount
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border px-3 py-1.5 text-sm"
        >
            {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
    )
}
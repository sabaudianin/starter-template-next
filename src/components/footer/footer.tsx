import React from 'react'

export const Footer = () => {
    return (
        <footer className="border-t border-border px-6 py-8">
            <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between flex-wrap gap-4 ">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-foreground flex items-center justify-center">
                        <span className="text-background text-xs font-bold">S</span>
                    </div>
                    <span className="text-sm font-medium">SaaS Template</span>
                </div>
                <p className="text-xs text-muted-foreground">
                    Built with Next.js • {new Date().getFullYear()}
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <a href="https://dev-landing-page-murex.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1 font-bold text-xl tracking-tighter">
                    <p className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent text-center">
                        RafBob.dev
                    </p>

                    <p className="text-zinc-500 text-sm leading-relaxed">
                        I create high-quality sales pages and CMS systems for ambitious businesses. Fast implementation, modern technology stack. Click to see more...
                    </p>
                </a>
            </div>
        </footer>
    )
}

import React from "react";

export default function Header() {
    return (
        <header className="flex justify-between items-center gap-6 border-b border-dashed border-[var(--muted)] pb-4">
            {/* Site Title */}
            <div>
                <h1 className="font-serif font-bold text-3xl leading-tight m-0 text-[var(--text)]">
                    My Quiet Pages
                </h1>
                <div className="text-[var(--muted)] text-xs mt-1 italic">
                    A reflective diary of thoughts, sketches, and long nights.
                </div>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
                <div className="text-right">
                    <div className="text-xs text-[var(--muted)] leading-snug">
                        Welcome back,
                    </div>
                    <div className="font-semibold text-sm text-[var(--text)]">
                        Explorer
                    </div>
                </div>
                <div className="text-lg transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer select-none">
                    &#10024;
                </div>
            </div>
        </header>
    );
}

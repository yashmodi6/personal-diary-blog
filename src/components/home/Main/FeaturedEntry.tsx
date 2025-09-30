import { ArrowRight } from "lucide-react";

export default function FeaturedEntry() {
    return (
        <section className="mt-6 animate-fadeIn max-w-4xl mx-auto">
            <div
                className="group relative p-6 rounded-2xl border border-[var(--border-color)] shadow-md
                      bg-gradient-to-br from-[var(--card)] to-[var(--bg-alt)] transition-all duration-300"
            >
                {/* Featured ribbon */}
                <div
                    className="absolute top-0 left-0 text-white text-[0.65rem] font-medium px-3 py-1
                               rounded-br-lg tracking-wide shadow-sm
                               bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]
                               transition-transform duration-500 ease-in-out
                               group-hover:scale-105 group-hover:shadow-lg"
                >
                    Featured ✨
                </div>

                {/* Title */}
                <h2 className="mt-4 text-xl font-bold text-[var(--text)] tracking-tight">
                    Midnight Walk
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] italic">
                    A walk under quiet lamps, when even shadows seemed to
                    listen. Moments like these linger in the mind long after the
                    streets fall silent.
                </p>

                {/* Divider */}
                <div className="mt-3 w-12 h-[1px] bg-[var(--accent-3)]/40 rounded-full"></div>

                {/* Meta */}
                <div className="mt-3 text-xs text-[var(--muted)] flex items-center gap-2">
                    <span>Sept 20, 2025</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--muted)]/50"></span>
                    <span>11:47 PM</span>
                </div>

                {/* Read More */}
                <button className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent-1)] hover:text-[var(--accent-2)] transition-colors cursor-pointer">
                    <span>Read More</span>
                    <ArrowRight size={14} strokeWidth={2} />
                </button>
            </div>
        </section>
    );
}
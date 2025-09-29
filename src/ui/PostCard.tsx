import { Star, ArrowRight } from "lucide-react";
import LevelBar from "@/ui/LevelBar";

interface PostCardProps {
    entry: {
        title: string;
        date: string;
        readTime: string;
        text: string;
        moodLevel?: number; // for entries
        storyLevel?: number; // for storytime
        valueLevel?: number; // for tutorials
    };
    category: "entries" | "storytime" | "tutorials";
}

export default function PostCard({ entry, category }: PostCardProps) {
    return (
        <div className="relative w-full group cursor-pointer h-full">
            {/* Stacked animated background */}
            <div
                className="absolute inset-0 rounded-2xl z-5 opacity-0 bg-[var(--accent-2)] transition-all duration-500 ease-in-out 
                group-hover:translate-x-[-11px] group-hover:translate-y-[6px] group-hover:opacity-80"
            ></div>

            {/* Main Card */}
            <article
                className="relative z-10 p-6 bg-[var(--card)] border border-[var(--border-color)] rounded-2xl shadow-md flex flex-col justify-between text-[var(--text)] 
                h-full transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
            >
                {/* Card Content */}
                <div className="flex flex-col gap-2 mb-4 flex-1 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                    {/* Title */}
                    <h3 className="text-base font-medium flex items-center gap-1 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5">
                        {entry.title}
                    </h3>

                    {/* Date */}
                    <div className="text-xs text-[var(--muted)] transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5">
                        {entry.date} &middot; {entry.readTime}
                    </div>

                    {/* Text / Description */}
                    <p className="mt-2 text-sm leading-relaxed transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5">
                        {entry.text}
                    </p>
                </div>

                {/* Footer / Category-specific characteristic */}
                <div className="flex justify-between items-center mt-auto gap-4">
                    <div className="flex gap-2 items-center">
                        {/* Entries: Mood bar */}
                        {category === "entries" && entry.moodLevel && (
                            <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-105">
                                <LevelBar name="Mood" level={entry.moodLevel} />
                            </div>
                        )}

                        {/* Storytime: Star rating */}
                        {category === "storytime" && entry.storyLevel && (
                            <div className="flex gap-1 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-105">
                                {[1, 2, 3, 4, 5].map(level => (
                                    <Star
                                        key={level}
                                        className="w-4 h-4"
                                        fill={
                                            level <= entry.storyLevel
                                                ? "var(--accent-3)"
                                                : "none"
                                        }
                                        stroke="var(--accent-3)"
                                        strokeWidth={1.5}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Tutorials: Value Level */}
                        {category === "tutorials" && entry.valueLevel && (
                            <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-105">
                                <LevelBar
                                    name="Value"
                                    level={entry.valueLevel}
                                />
                            </div>
                        )}
                    </div>

                    {/* Read More Link */}
                    <a
                        href="#"
                        className="flex items-center gap-1 text-[var(--accent-1)] text-xs font-semibold transition-colors duration-200 hover:text-[var(--accent-2)]"
                    >
                        Read More <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </article>
        </div>
    );
}

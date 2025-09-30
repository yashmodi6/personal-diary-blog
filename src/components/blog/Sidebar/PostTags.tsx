import { Tag } from "lucide-react";

export default function PostTags({ tags = [] }) {
    return (
        <div className="bg-[var(--card)] rounded-xl border border-[var(--border-color)] p-5">
            {/* Header */}
            <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--accent-1)] mb-3">
                <Tag className="w-4 h-4" /> Tags
            </h4>

            {/* Tags container */}
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="relative inline-flex items-center gap-1 bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-xs shadow-sm overflow-hidden cursor-pointer group"
                    >
                        {/* Slide-in accent background */}
                        <span className="absolute inset-0 bg-[var(--accent-1)] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 rounded-full z-0"></span>

                        {/* Text with color change on hover */}
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--bg)]">
                            #{tag}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}

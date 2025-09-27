import { Quote } from "lucide-react";

const quote = "Breathe, reflect, and keep writing your quiet story.";

export default function Thoughts(){
    return (
        <div className="panel p-5 bg-[var(--card)] rounded-xl border border-[var(--border-color)]">
            {/* Section heading with icon */}
            <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--accent-1)] mb-4">
                <Quote className="w-4 h-4" /> Thoughts
            </h4>

            {/* Quote content with left border for emphasis */}
            <blockquote className="relative pl-5 border-l-2 border-[var(--accent-1)] text-[0.875rem] text-[var(--muted)] italic leading-snug">
                {quote}
            </blockquote>
        </div>
    );
}

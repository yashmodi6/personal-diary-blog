import { Clock, ArrowRight } from "lucide-react";

export default function RecentEntries({ entries = [] }) {
    return (
        <div className="bg-[var(--card)] rounded-xl border border-[var(--border-color)] p-5">
            {/* Header */}
            <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--accent-1)] mb-3">
                <Clock className="w-4 h-4" /> Recent Entries
            </h4>

            {/* Entries list */}
            <ul className="space-y-2 text-[var(--muted)] text-sm">
                {entries.map((entry, idx) => (
                    <li key={idx}>
                        <a
                            href={entry.link || "#"}
                            className="group relative flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 ease-out hover:bg-[var(--bg-alt)] hover:text-black hover:translate-x-1"
                        >
                            {/* Arrow on left */}
                            <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                            <span>{entry.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

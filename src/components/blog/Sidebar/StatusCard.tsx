import { BookOpenText, Music, Coffee } from "lucide-react";

const statusData = [
    {
        label: "Reading",
        value: "The Midnight Library",
        icon: BookOpenText,
        show: true
    },
    {
        label: "Listening",
        value: "Lo-fi beats",
        icon: Music,
        show: true
    },
    {
        label: "Drinking",
        value: "Black coffee",
        icon: Coffee,
        show: false // hidden
    }
];

export default function StatusCard() {
    return (
        <div className="bg-[var(--card)] rounded-xl border border-[var(--border-color)] p-5">
            <h4 className="text-base font-semibold text-[var(--accent-1)] mb-3">
                Currently
            </h4>
            <ul className="space-y-2 text-[var(--muted)] text-sm">
                {statusData
                    .filter(item => item.show)
                    .map(({ label, value, icon: Icon }, idx) => (
                        <li
                            key={idx}
                            className="flex items-center gap-2 p-2 rounded-md transition-all duration-200 hover:bg-[var(--bg-alt)] hover:text-[var(--text)] hover:translate-x-1"
                        >
                            <Icon className="w-4 h-4" /> {label}:{" "}
                            <span className="italic">{value}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
import Title from "@/ui/Title"
export default function ArchiveList() {
    const years = [
        { year: 2025, entries: 32 },
        { year: 2024, entries: 48 },
        { year: 2023, entries: 39 },
        { year: 2022, entries: 24 },
        { year: 2021, entries: 18 }
    ];

    return (
        <section className="mt-6">
            <Title text="Archive" />

            <div className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-x-1 gap-y-1 text-sm">
                {years.map(y => (
                    <div key={y.year} className="p-1 rounded">
                        {/* Hover wrapper tightly around content */}
                        <div className="inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 hover:bg-[var(--bg-alt)] hover:underline hover:decoration-[var(--accent-2)] underline-offset-2 px-1 py-0.5 rounded">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-2)] flex-shrink-0"></span>
                            <span className="font-medium text-[var(--accent-1)]">
                                {y.year}
                            </span>
                            <span className="ml-1 text-[var(--muted)]">
                                {y.entries} entries
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

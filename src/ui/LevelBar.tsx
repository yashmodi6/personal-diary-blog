interface LevelBarProps {
    name: string;
    level: number; // 1–5
}

export default function LevelBar({ name, level }: LevelBarProps) {
    const total = 5;

    return (
        <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <span>{name}:</span>
            <div className="flex gap-1">
                {[...Array(total)].map((_, idx) => (
                    <div
                        key={idx}
                        className="h-1.5 w-4 rounded-full"
                        style={{
                            background:
                                idx < level
                                    ? "linear-gradient(to right, var(--accent-1), var(--accent-2))"
                                    : "var(--accent-2)",
                            opacity: idx < level ? 1 : 0.3, // inactive pills faded
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
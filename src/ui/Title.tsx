interface TitleProps {
    text: string;
}

export default function Title({ text }: TitleProps) {
    return (
        <div className="mt-14 mb-6">
            <h1 className="text-2xl font-serif font-bold text-[var(--text)] text-left">
                {text}
            </h1>
            {/* Half-width underline */}
            <div className="mt-1 w-16 h-[2px] bg-[var(--accent-2)] rounded-full"></div>
        </div>
    );
}
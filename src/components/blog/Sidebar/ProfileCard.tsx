import personalData from "@/data/personal-info.json";

export default function ProfileCard() {
    return (
        <div className="bg-[var(--card)] rounded-xl border border-[var(--border-color)] p-5 text-center">
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto rounded-full bg-[var(--bg-alt)] shadow-sm mb-3 transition-transform duration-300 hover:scale-105"></div>
            
            {/* Name */}
            <h3 className="font-semibold text-[var(--text)] transition-colors duration-300 hover:text-[var(--accent-1)]">
                {personalData.name}
            </h3>
            
            {/* Bio */}
            <p className="text-xs text-[var(--muted)] mt-1">
                {personalData.bio}
            </p>
        </div>
    );
}
"use client";
import LevelBar from "@/ui/LevelBar";
import { ArrowRight } from "lucide-react";

export default function PhaseCard({ title, desc, thrill }) {
    return (
        <div className="relative w-full group cursor-pointer">
            {/* Single stacked card */}
            <div className="absolute inset-0 rounded-2xl z-5 opacity-0 bg-[var(--accent-2)] transition-all duration-500 ease-in-out group-hover:translate-x-[-11px] group-hover:translate-y-[6px] group-hover:opacity-80"></div>

            {/* Main Card */}
            <article className="relative z-10 p-6 bg-[var(--card)] border border-[var(--border-color)] rounded-2xl shadow-md flex flex-col justify-between text-[var(--text)] transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)]">
                <div className="flex flex-col flex-1 mb-4">
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-[var(--muted)] leading-snug mb-4">
                        {desc}
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    {/* Use LevelBar here */}
                    <LevelBar name="Thrill" level={thrill} />

                    <a
                        href="#"
                        className="flex items-center gap-1 text-[var(--muted)] text-xs font-semibold hover:text-[var(--accent-2)] transition-colors duration-200"
                    >
                        View <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </article>
        </div>
    );
}

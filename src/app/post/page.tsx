"use client";
import Link from "next/link";
import Sidebar from "@/components/blog/Sidebar/Sidebar";
import BlogCard from "@/components/blog/Main/BlogCard";

import { ArrowLeft } from "lucide-react";
export default function PostPage() {
    return (
        <main className="min-h-screen bg-[var(--bg)] p-6 md:p-10 animate-fadeIn flex flex-col md:flex-row gap-10">
            {/* Main content */}
            <div className="flex-1">
                {/* Back button */}
                <button className="flex items-center gap-2 text-[var(--accent-1)] text-sm font-medium hover:underline mb-6 cursor-pointer">
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>

                {/* Blog post card */}
                <BlogCard
                    title="Midnight Walk"
                    date="Sept 27, 2025 • 8:15 PM"
                    content={[
                        "Tonight, the streets were quieter than usual. Lamps glowed faintly...",
                        "There’s a strange peace in walking when the world is asleep...",
                        "Some nights don’t ask for company or noise..."
                    ]}
                    onNext={() => console.log("Go to next entry")}
                />
            </div>

            {/* Sidebar */}
            <Sidebar />
        </main>
    );
}

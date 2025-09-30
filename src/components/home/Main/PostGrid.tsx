import PostCard from "@/ui/PostCard";
import Title from "@/ui/Title";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Post = {
    title: string;
    date: string; // just the calendar date
    readTime: string; // e.g. "3 min"
    text: string;
    moodLevel?: number;
    storyLevel?: number;
    valueLevel?: number;
};

export default function PostGrid() {
    const entries: Post[] = [
        {
            title: "Post 1",
            date: "Jan 01, 1999",
            readTime: "3 min",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, totam omnis...",
            moodLevel: 3
        },
        {
            title: "Post 2",
            date: "Jan 01, 1999",
            readTime: "2 min",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem, nulla....",
            moodLevel: 4
        }
    ];

    const storytime: Post[] = [
        {
            title: "Story 1",
            date: "Jan 01, 1999",
            readTime: "2 min",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, maxime, quia?...",
            storyLevel: 4
        },
        {
            title: "Story 2",
            date: "Jan 01, 1999",
            readTime: "6 min",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quis, eius!...",
            storyLevel: 3
        }
    ];

    const tutorials: Post[] = [
        {
            title: "Tut 1",
            date: "Jan 01, 1999",
            readTime: "2 min",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, maiores, eos....",
            valueLevel: 3
        },
        {
            title: "Tut 2",
            date: "Jan 01, 1999",
            readTime: "2 min",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fugiat, sint....",
            valueLevel: 1
        }
    ];

    const Section = ({
        title,
        posts,
        category,
        href
    }: {
        title: string;
        posts: Post[];
        category: "entries" | "storytime" | "tutorials";
        href: string;
    }) => (
        <div className="section space-y-6">
            {/* Section Title with dotted underline */}
            <h2 className="text-xl font-semibold text-[var(--text)] border-b border-dashed border-[var(--muted)] pb-2">
                {title}
            </h2>

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((entry, i) => (
                    <PostCard key={i} entry={entry} category={category} />
                ))}
            </div>

            {/* View More inline with grid */}
            <div className="flex justify-end">
                <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-1)] hover:text-[var(--accent-2)] transition-colors duration-200"
                >
                    <span>View more</span>
                    <ArrowRight size={16} strokeWidth={2} />
                </Link>
            </div>
        </div>
    );

    return (
        <section className="post-grid mt-6 space-y-12 max-w-5xl mx-auto">
            <Title text="My Posts & Reflections" />
            <Section
                title="Entries"
                posts={entries}
                category="entries"
                href="/entries"
            />
            <Section
                title="Storytime"
                posts={storytime}
                category="storytime"
                href="/storytime"
            />
            <Section
                title="Tips & Tutorials"
                posts={tutorials}
                category="tutorials"
                href="/tutorials"
            />
        </section>
    );
}

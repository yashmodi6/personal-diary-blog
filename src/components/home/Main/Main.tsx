import Header from "./Header";
import FeaturedEntry from "./FeaturedEntry";
import PostGrid from "./PostGrid";
import JournalPhases from "./JournalPhases";
import ArchiveList from "./ArchiveList";
import FooterNote from "./FooterNote";

export default function Main() {
    return (
        <main className="flex-1 bg-[var(--card)] p-6 rounded-xl border border-[rgba(15,23,42,0.05)] overflow-hidden transition-all">
            <Header />
            <FeaturedEntry />
            <PostGrid />
        <JournalPhases/>
            <ArchiveList />
            <FooterNote />
        </main>
    );
}

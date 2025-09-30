import Sidebar from "@/components/home/Sidebar/Sidebar";
import Main from "@/components/home/Main/Main";

export default function Home() {
    return (
        <div
            data-theme="light"
            className="min-h-full bg-[var(--bg)] text-[var(--text)] font-inter p-7"
        >
            <div className="container mx-auto flex gap-7 items-start">
                <Main />
                <Sidebar />
            </div>
        </div>
    );
}

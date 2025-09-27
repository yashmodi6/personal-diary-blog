"use client";
import { useState, useEffect } from "react";
import Hamburger from "@/ui/Hamburger"; // our new animated hamburger
import ProfileCard from "./ProfileCard";
import QuickTags from "./QuickTags";
import MiniCalendar from "./MiniCalendar";
import MoodRadar from "./MoodRadar";
import Notes from "./Notes";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock/unlock body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* Animated Hamburger button for mobile/tablet */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Hamburger onClick={() => setIsOpen(!isOpen)} />
            </div>

            {/* Sidebar for large screens */}
            <aside className="hidden md:flex w-72 shrink-0 flex-col gap-4 sticky top-7 max-h-[calc(100vh-14px)] overflow-y-auto">
                <ProfileCard />
                <QuickTags />
                <MiniCalendar />
                <MoodRadar />
                <Notes />
            </aside>

            {/* Overlay sidebar for mobile/tablet */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-[var(--bg)] z-40 transition-transform duration-500 ease-in-out transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden flex flex-col gap-4 p-6 overflow-y-auto`}
            >
                <ProfileCard />
                <QuickTags />
                <MiniCalendar />
                <MoodRadar />
                <Notes />
            </div>

            {/* Clickable transparent background to close menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-transparent z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
"use client";
import { useState } from "react";

export default function Hamburger({ onClick }: { onClick?: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        if (onClick) onClick();
    };

    return (
        <>
            <button
                onClick={toggle}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[var(--card)] rounded-md border border-[var(--border-color)] shadow-md flex items-center justify-center"
            >
                <div id="nav-icon" className={isOpen ? "open" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <style jsx>{`
                #nav-icon {
                    width: 24px;
                    height: 18px;
                    position: relative;
                    transform: rotate(0deg);
                    transition: 0.5s ease-in-out;
                }
                #nav-icon span {
                    display: block;
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    background: var(--text); /* match theme text */
                    border-radius: 3px;
                    opacity: 1;
                    left: 0;
                    transform: rotate(0deg);
                    transition: 0.25s ease-in-out;
                }
                #nav-icon span:nth-child(1) {
                    top: 0px;
                }
                #nav-icon span:nth-child(2),
                #nav-icon span:nth-child(3) {
                    top: 7px;
                }
                #nav-icon span:nth-child(4) {
                    top: 14px;
                }
                #nav-icon.open span:nth-child(1) {
                    top: 7px;
                    width: 0%;
                    left: 50%;
                }
                #nav-icon.open span:nth-child(2) {
                    transform: rotate(45deg);
                }
                #nav-icon.open span:nth-child(3) {
                    transform: rotate(-45deg);
                }
                #nav-icon.open span:nth-child(4) {
                    top: 7px;
                    width: 0%;
                    left: 50%;
                }
            `}</style>
        </>
    );
}
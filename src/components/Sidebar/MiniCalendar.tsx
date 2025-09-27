"use client";
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export default function MiniCalendar() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    // First day and days count for current month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Generate calendar days array with leading blanks
    const calendarDays = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
    ];

    const handlePrev = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(prev => prev - 1);
        } else setCurrentMonth(prev => prev - 1);
    };

    const handleNext = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(prev => prev + 1);
        } else setCurrentMonth(prev => prev + 1);
    };

    return (
        <div className="panel p-4 bg-[var(--card)] rounded-xl border border-[var(--border-color)]">
            {/* Header */}
            <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--accent-1)]">
                <Calendar className="w-4 h-4" /> Mini Calendar
            </h4>

            {/* Month navigation */}
            <div className="mt-2 flex items-center justify-between text-xs font-medium">
                <button
                    onClick={handlePrev}
                    className="p-1 rounded hover:bg-[rgba(59,91,146,0.2)] transition-colors"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-semibold">
                    {monthNames[currentMonth]} {currentYear}
                </span>
                <button
                    onClick={handleNext}
                    className="p-1 rounded hover:bg-[rgba(59,91,146,0.2)] transition-colors"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Weekdays */}
            <div className="mt-2 grid grid-cols-7 gap-1 text-xs">
                {daysOfWeek.map(d => (
                    <div key={d} className="font-semibold text-center">
                        {d[0]}
                    </div>
                ))}

                {/* Calendar days */}
                {calendarDays.map((day, idx) => {
                    const isToday =
                        day === today.getDate() &&
                        currentMonth === today.getMonth() &&
                        currentYear === today.getFullYear();
                    return (
                        <div
                            key={idx}
                            className={`text-center py-1 rounded-full cursor-pointer ${
                                isToday
                                    ? "bg-[var(--accent-1)] text-white font-semibold"
                                    : "hover:bg-[rgba(59,91,146,0.2)]"
                            }`}
                        >
                            {day || ""}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

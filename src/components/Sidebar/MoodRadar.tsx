"use client"
import { useRef, useEffect, useState } from "react";
import { Activity } from "lucide-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
    CategoryScale, // X-axis scale
    LinearScale, // Y-axis scale
    PointElement, // Points on the line
    LineElement, // Line element
    Filler, // Fill under the line
    Tooltip, // Tooltip plugin
    Legend // Legend plugin
);

const today = new Date();
const accent1 = "#3b5b92";
const accent2 = "#7fa1c3";
const muted = "#64748b";

// Last 6 days labels
const last6Days = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return d.toLocaleDateString("en-US", { weekday: "short" });
});

// Random mood values (1–5)
const dataValues = last6Days.map(() => Math.random() * 4 + 1);

// Mood emojis for y-axis
const moodEmojis = ["😞", "😐", "🙂", "😃", "🤩"];

export default function MoodRadar(): JSX.Element {
    const chartRef = useRef<any>(null);
    const [gradient, setGradient] = useState<CanvasGradient | null>(null);

    // Create gradient for line fill
    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;
        const { ctx, chartArea } = chart;
        if (!chartArea) return;

        const g = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
        );
        g.addColorStop(0, accent1 + "33"); // semi-transparent top
        g.addColorStop(1, accent2 + "00"); // fully transparent bottom
        setGradient(g);
    }, []);

    const data = {
        labels: last6Days, // X-axis labels
        datasets: [
            {
                data: dataValues, // Y-axis values
                borderColor: accent1, // Line color
                borderWidth: 2.5, // Line thickness
                fill: true, // Fill under line
                backgroundColor: gradient || accent1 + "33", // Fill color (gradient)
                tension: 0.4, // Curvature of line
                pointRadius: 0 // Hide points
            }
        ]
    };

    const options: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }, // Hide legend
            tooltip: { enabled: false } // Disable tooltips
        },
        scales: {
            x: {
                grid: { display: false }, // Hide vertical grid lines
                ticks: { color: muted, font: { size: 10 } }, // X labels
                border: { display: false } // Hide X-axis border
            },
            y: {
                min: 1,
                max: 5,
                ticks: {
                    stepSize: 1, // Interval between ticks
                    autoSkip: false,
                    callback: (val: number) => moodEmojis[val - 1] || "", // Show emoji
                    font: { size: 14 },
                    values: [1, 2, 3, 4, 5] // Force tick positions
                },
                grid: {
                    color: "rgba(15,23,42,0.1)", // Horizontal grid line color
                    drawTicks: false // Remove tick marks
                },
                border: {
                    display: false,
                    dash: [3, 3] // Dashed horizontal line style
                }
            }
        }
    };

    return (
        <div className="panel p-4 bg-[var(--card)] rounded-xl border border-[var(--border-color)]">
            <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--accent-1)]">
                <Activity className="w-4 h-4" /> Mood Radar
            </h4>
            <div className="text-xs text-[var(--muted)] mt-1">Last 6 days</div>
            <div className="mt-3 h-28">
                <Line ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
}

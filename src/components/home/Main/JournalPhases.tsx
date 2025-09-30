"use client";
import PhaseCard from "@/ui/PhaseCard";
import Title from "@/ui/Title"
export default function JournalPhases() {
    const phases = [
        {
            title: "Phase 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, optio, accusantium...",
            thrill: 2
        },
        {
            title: "Phase 2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, molestias ea!...",
            thrill: 1
        },
        {
            title: "Phase 3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dolorum quas...",
            thrill: 3
        },
        {
            title: "Phase 4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, possimus ipsa!...",
            thrill: 5
        }
    ];

    return (
        <section className="mt-12 max-w-5xl mx-auto px-6 md:px-0">
          <Title text="Journal Phases"/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phases.map((phase, i) => (
                    <PhaseCard
                        key={i}
                        title={phase.title}
                        desc={phase.desc}
                        thrill={phase.thrill}
                    />
                ))}
            </div>
        </section>
    );
}

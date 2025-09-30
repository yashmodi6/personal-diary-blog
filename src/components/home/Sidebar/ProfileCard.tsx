import * as Tooltip from "@radix-ui/react-tooltip";
import { User } from "lucide-react";
import React from "react";
import personalInfo from "@/data/personal-info.json";

export default function ProfileCard() {
  const { name, traits, email } = personalInfo;

  return (
    <div className="panel p-4 bg-[var(--card)] rounded-xl border border-[var(--border-color)]">
      <div className="flex items-center gap-3">
        {/* Avatar with Radix Tooltip */}
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className="w-14 aspect-square rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center shadow-inner cursor-pointer">
                <User className="w-7 h-7 text-white" />
              </div>
            </Tooltip.Trigger>

            <Tooltip.Content
              side="top"
              align="center"
              className="bg-[var(--card)] text-[var(--text)] text-xs px-3 py-1 rounded-md shadow-md will-change-auto animate-tooltip"
            >
              {email}
              <Tooltip.Arrow className="fill-[var(--card)]" />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        {/* Name & Traits */}
        <div className="flex flex-col justify-center">
          <span className="text-[0.625rem] text-[var(--muted)] font-medium tracking-wide">
            Hello, I'm
          </span>
          <span className="font-bold text-[1.15rem] text-[var(--text)] leading-tight tracking-tight mt-0.5">
            {name}
          </span>
          <span className="text-[0.675rem] text-[var(--muted)] leading-relaxed tracking-wide mt-0.5">
            {traits.join(" • ")}
          </span>
        </div>
      </div>
    </div>
  );
}
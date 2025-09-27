import { Tag } from "lucide-react";
import tagsData from "@/data/quick-tags.json"; // adjust path if needed

export default function QuickTags() {
  const tags = tagsData.tags; // get tags from JSON

  return (
    <div className="panel p-4 bg-[var(--card)] rounded-xl border border-[var(--border-color)]">
      {/* Section heading */}
      <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--accent-1)]">
        <Tag className="w-4 h-4" /> Quick Tags
      </h4>

      {/* Tags list */}
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="relative px-3 py-1 rounded-full cursor-pointer overflow-hidden text-xs font-medium group"
          >
            {/* Sliding background on hover */}
            <span className="absolute inset-0 bg-[var(--accent-1)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-full z-0"></span>
            {/* Tag text */}
            <span className="relative z-10 text-[var(--text)] group-hover:text-white transition-colors duration-300 ease-in-out">
              {tag}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
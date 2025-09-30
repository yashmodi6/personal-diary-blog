"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";

interface DiaryEntryProps {
  title: string;
  date: string;
  content: string[];
  footerNote?: string;
  onNext?: () => void;
}

export default function BlogCard({
  title,
  date,
  content,
  footerNote = "Written with a cup of tea 🍵",
  onNext,
}: DiaryEntryProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="relative max-w-2xl mx-auto bg-[var(--card)] text-[var(--text)] rounded-xl shadow-md p-6 md:p-10 border border-[var(--border-color)]">
      {/* Tape strips */}
      <span className="absolute -top-4 left-10 w-20 h-6 bg-yellow-200/90 rotate-[-4deg] rounded-sm shadow-md opacity-90"></span>
      <span className="absolute -top-4 right-10 w-20 h-6 bg-yellow-200/90 rotate-[3deg] rounded-sm shadow-md opacity-90"></span>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-snug mb-2">{title}</h1>

      {/* Meta */}
      <div className="mb-6 text-xs text-[var(--muted)] flex justify-between items-center">
        <span>{date}</span>
        {/* Favorite toggle */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="flex items-center gap-1 text-[var(--accent-1)] text-xs font-medium hover:underline cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? "fill-[var(--accent-1)] text-[var(--accent-1)]" : ""
            }`}
          />
          {isFavorite ? "Favorited" : "Favorite"}
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4 text-[var(--muted)] leading-relaxed">
        {content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t border-[var(--border-color)] text-xs text-[var(--muted)] flex justify-between items-center">
        <span>{footerNote}</span>
        {onNext && (
          <button
            onClick={onNext}
            className="text-[var(--accent-1)] font-medium hover:underline cursor-pointer"
          >
            Next Entry →
          </button>
        )}
      </footer>
    </article>
  );
}
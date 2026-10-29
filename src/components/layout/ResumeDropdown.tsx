"use client";

import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { portfolioConfig } from "@/config/portfolio";

export function ResumeDropdown({ compact = false }: { compact?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = compact ? "mobile-resume-menu" : "desktop-resume-menu";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      ref={containerRef}
      className="relative"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setIsOpen(true);
        }
      }}
      onPointerLeave={() => setIsOpen(false)}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setIsOpen(true)}
        className={
          compact
            ? "inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition duration-200 hover:border-lime-500 hover:bg-lime-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#CCFF00] dark:hover:bg-[#CCFF00]/10 dark:hover:text-white"
            : "inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition duration-200 hover:border-lime-500 hover:bg-lime-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#CCFF00] dark:hover:bg-[#CCFF00]/10 dark:hover:text-white"
        }
      >
        Resume
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-full z-20 min-w-44 pt-2">
          <div
            id={menuId}
            role="menu"
            aria-label="Resume options"
            className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-950"
          >
            <a
              href={portfolioConfig.resumePdfPath}
              download
              role="menuitem"
              onClick={closeMenu}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors duration-150 hover:bg-lime-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 dark:text-slate-200 dark:hover:bg-[#CCFF00]/10 dark:hover:text-white"
            >
            <span className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </span>
            </a>
            <a
              href={portfolioConfig.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={closeMenu}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors duration-150 hover:bg-lime-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 dark:text-slate-200 dark:hover:bg-[#CCFF00]/10 dark:hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              View
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

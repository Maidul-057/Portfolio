import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { navItems } from "@/config/portfolio";
import { ResumeDropdown } from "@/components/layout/ResumeDropdown";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function MobileMenu({
  open,
  activeHref,
  onClose,
}: {
  open: boolean;
  activeHref: string | null;
  onClose: () => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className="border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95 lg:hidden"
    >
      <nav aria-label="Mobile navigation" className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`/${item.href}`}
            aria-current={activeHref === item.href ? "location" : undefined}
            onClick={onClose}
            className={`block rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 ${
              activeHref === item.href
                ? "border-slate-300 bg-slate-100 text-base font-semibold text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                : "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="!mt-4 flex items-center justify-between gap-3 pt-2">
          <ResumeDropdown compact />
          <Link
            href="/#contact"
            aria-current={activeHref === "#contact" ? "location" : undefined}
            onClick={onClose}
            className={`inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-3.5 text-[13px] font-semibold transition duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
              activeHref === "#contact"
                ? "border-slate-300 bg-slate-100 text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                : "border-slate-300 bg-white text-slate-800 hover:border-lime-500 hover:bg-lime-50 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[#CCFF00] dark:hover:bg-[#CCFF00]/10 dark:hover:text-white"
            }`}
          >
            Let&apos;s Talk
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center justify-end pt-3">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

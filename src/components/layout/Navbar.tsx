"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { ResumeDropdown } from "@/components/layout/ResumeDropdown";
import { navItems } from "@/config/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const visibleActiveHref = pathname === "/" ? activeHref : null;

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const observedSectionHrefs = [...navItems.map((item) => item.href), "#contact"];
    const sections = observedSectionHrefs
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(`#${entry.target.id}`);
          } else {
            visibleSections.delete(`#${entry.target.id}`);
          }
        });

        const activeSection = sections
          .filter((section) => visibleSections.has(`#${section.id}`))
          .sort((first, second) => first.getBoundingClientRect().top - second.getBoundingClientRect().top)[0];

        setActiveHref(activeSection ? `#${activeSection.id}` : null);
      },
      {
        rootMargin: `-88px 0px -${Math.floor(window.innerHeight * 0.65)}px 0px`,
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY <= 16) {
        setActiveHref("#home");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link
          href="/#home"
          className="mr-2 whitespace-nowrap text-lg font-semibold tracking-[0.08em] text-slate-900 transition-colors hover:text-lime-700 dark:text-white dark:hover:text-[#CCFF00] lg:mr-4"
        >
          MAIDUL
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex xl:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              aria-current={visibleActiveHref === item.href ? "location" : undefined}
              className={`whitespace-nowrap rounded-lg border px-2.5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 ${
                visibleActiveHref === item.href
                  ? "border-slate-300 bg-slate-100 text-[15px] font-semibold text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  : "border-transparent text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <ResumeDropdown />

          <Link
            href="/#contact"
            aria-current={visibleActiveHref === "#contact" ? "location" : undefined}
            className={`inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-4 text-[13px] font-semibold transition duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
              visibleActiveHref === "#contact"
                ? "border-slate-300 bg-slate-100 text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                : "border-slate-300 bg-white text-slate-800 hover:border-lime-500 hover:bg-lime-50 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[#CCFF00] dark:hover:bg-[#CCFF00]/10 dark:hover:text-white"
            }`}
          >
            Let&apos;s Talk
          </Link>

          <ThemeToggle />
        </nav>

        <div className="flex shrink-0 items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:bg-sky-400/10 dark:hover:text-sky-100"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileMenuOpen}
        activeHref={visibleActiveHref}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

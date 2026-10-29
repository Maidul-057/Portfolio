import Link from "next/link";
import { GitBranch, Mail } from "lucide-react";

import { portfolioConfig } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-10 dark:border-slate-800 dark:bg-slate-950/80 md:py-12">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-md space-y-3">
            <Link href="/#home" className="inline-flex text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Maidul<span className="text-emerald-500">.</span>
            </Link>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{portfolioConfig.intro}</p>
          </div>

          <nav aria-label="Social profiles" className="grid grid-cols-2 gap-x-8 gap-y-4">
            {portfolioConfig.linkedinUrl ? (
              <a
                href={portfolioConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
              >
                <span aria-hidden="true" className="text-xs font-bold tracking-tight">in</span>
                LinkedIn
              </a>
            ) : null}
            {portfolioConfig.githubUrl ? (
              <a
                href={portfolioConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
              >
                <GitBranch aria-hidden="true" className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {portfolioConfig.facebookUrl ? (
              <a
                href={portfolioConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
              >
                <span aria-hidden="true" className="text-base font-bold leading-none">f</span>
                Facebook
              </a>
            ) : null}
            {portfolioConfig.email ? (
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="col-span-2 inline-flex items-center gap-2 break-all text-sm text-slate-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {portfolioConfig.email}
              </a>
            ) : null}
          </nav>
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          © 2026 Maidul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

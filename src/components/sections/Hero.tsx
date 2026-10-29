import Link from "next/link";
import { ArrowRight, Download, GitBranch, Mail } from "lucide-react";

import { portfolioConfig } from "@/config/portfolio";
import { ProfileImage } from "@/components/ui/ProfileImage";

export function Hero() {
  const emailHref = portfolioConfig.email ? `mailto:${portfolioConfig.email}` : "#contact";
  return (
    <section id="home" className="section-shell py-10 md:py-16">
      <div className="card-shell overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_26px_70px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/80 md:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
              Available for future opportunities
            </div>

            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                {portfolioConfig.role}
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-sky-600 dark:text-sky-400">Maidul Islam</span>
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I&apos;m a Computer Science and Engineering student at SUST passionate about software development,
                problem-solving, and building practical web applications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 dark:focus-visible:ring-offset-slate-950"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:bg-sky-400/10 dark:hover:text-sky-100"
              >
                Let&apos;s Talk
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                <a
                  href={portfolioConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-[0.7rem] bg-[#0a7eb4] text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-[#086c9b] hover:shadow-lg hover:shadow-sky-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7eb4] focus-visible:ring-offset-2"
                >
                  <span className="text-xl font-bold tracking-tight">in</span>
                </a>
                <a
                  href={emailHref}
                  aria-label="Send an email"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-[0.7rem] bg-[#ef4438] text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-[#d9362b] hover:shadow-lg hover:shadow-red-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4438] focus-visible:ring-offset-2"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href={portfolioConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-[0.7rem] bg-[#24292f] text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-[#171a1d] hover:shadow-lg hover:shadow-slate-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                >
                  <GitBranch className="h-6 w-6" />
                </a>
                <a
                  href={portfolioConfig.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook profile"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-[0.7rem] bg-[#1877f2] text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-[#166fe5] hover:shadow-lg hover:shadow-blue-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877f2] focus-visible:ring-offset-2"
                >
                  <span aria-hidden="true" className="text-2xl font-bold leading-none">f</span>
                </a>
              </div>
              <a
                href={portfolioConfig.resumePdfPath}
                download
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#10b981] px-8 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(16,185,129,0.22)] transition duration-200 hover:-translate-y-1 hover:bg-[#059669] hover:shadow-[0_16px_36px_rgba(16,185,129,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <Download className="h-6 w-6" />
                RESUME
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProfileImage src={portfolioConfig.profileImage} alt="Portrait of Maidul Islam" />
          </div>
        </div>
      </div>
    </section>
  );
}

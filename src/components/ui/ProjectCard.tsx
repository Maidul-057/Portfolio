"use client";

import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";

import type { Project } from "@/types/portfolio";
import { ProjectImage } from "@/components/ui/ProjectImage";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_18px_40px_rgba(2,6,23,0.35)]">
      <ProjectImage src={project.image} title={project.title} className="aspect-video transition duration-300 group-hover:brightness-[0.98]" />

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
          >
            Details
          </Link>
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
          >
            <GitBranch className="h-4 w-4" />
            Repo
          </Link>
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            >
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="section-shell py-10 md:py-16">
        <article className="mx-auto max-w-5xl space-y-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <header className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              Featured project
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {project.detailDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
              >
                <GitBranch className="h-4 w-4" />
                GitHub repository
                <ArrowUpRight className="h-4 w-4" />
              </a>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  Live demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </header>

          <ProjectImage
            src={project.image}
            title={project.title}
            className="aspect-video rounded-2xl border"
          />

          <section aria-labelledby="project-stack" className="space-y-4">
            <h2 id="project-stack" className="text-2xl font-semibold text-slate-900 dark:text-white">
              Main technology stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <section
              aria-labelledby="project-challenges"
              className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 id="project-challenges" className="text-xl font-semibold text-slate-900 dark:text-white">
                Development challenges
              </h2>
              <p className="leading-7 text-slate-600 dark:text-slate-300">{project.developmentChallenges}</p>
            </section>
            <section
              aria-labelledby="project-improvements"
              className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 id="project-improvements" className="text-xl font-semibold text-slate-900 dark:text-white">
                Potential improvements
              </h2>
              <ul className="list-disc space-y-2 pl-5 leading-7 text-slate-600 dark:text-slate-300">
                {project.potentialImprovements.map((improvement) => (
                  <li key={improvement}>{improvement}</li>
                ))}
              </ul>
            </section>
          </div>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
}

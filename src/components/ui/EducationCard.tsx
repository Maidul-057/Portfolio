"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { useState } from "react";

import type { EducationEntry } from "@/types/portfolio";

export function EducationCard({ entry }: { entry: EducationEntry }) {
  const [imageError, setImageError] = useState(false);
  const statusLabel = entry.status === "currently-pursuing" ? "Currently Pursuing" : "Completed";

  return (
    <article className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-250 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_34px_rgba(15,23,42,0.09)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_12px_30px_rgba(2,6,23,0.22)] dark:hover:border-slate-700 dark:hover:shadow-[0_16px_34px_rgba(2,6,23,0.32)] sm:p-5 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:items-center lg:gap-8">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
        {!imageError ? (
          <Image
            src={entry.image}
            alt={entry.imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 36vw"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            role="img"
            aria-label={`${entry.institution} image unavailable`}
            className="flex h-full flex-col items-center justify-center gap-3 bg-slate-100 px-5 text-center text-slate-500 dark:bg-slate-800 dark:text-slate-300"
          >
            <GraduationCap aria-hidden="true" className="h-10 w-10 text-slate-400 dark:text-slate-500" />
            <span className="text-sm font-medium">{entry.institution}</span>
          </div>
        )}
      </div>

      <div className="min-w-0 space-y-3 py-1">
        <h3 className="break-words text-xl font-semibold leading-snug text-slate-900 dark:text-white sm:text-2xl">
          {entry.institution}
        </h3>
        <p className="text-base font-medium leading-6 text-slate-700 dark:text-slate-200">
          {entry.qualification}
        </p>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
          {entry.startDate} – {entry.endDate}
        </p>
        {entry.grade ? (
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Grade: {entry.grade}</p>
        ) : null}
        <span
          className={`inline-flex max-w-full items-center rounded-full border px-3 py-1 text-xs font-semibold ${
            entry.status === "currently-pursuing"
              ? "border-lime-300 bg-lime-100 text-lime-950 dark:border-[#CCFF00]/30 dark:bg-[#CCFF00]/10 dark:text-[#CCFF00]"
              : "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          {statusLabel}
        </span>
      </div>
    </article>
  );
}

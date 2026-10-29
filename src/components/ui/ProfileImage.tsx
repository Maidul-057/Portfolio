"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="flex h-72 w-72 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-sky-100 via-white to-slate-100 text-4xl font-semibold text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.15)] dark:border-slate-700 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:text-slate-100 md:h-80 md:w-80">
        MI
      </div>
    );
  }

  return (
    <div className="relative h-72 w-72 overflow-hidden rounded-full border border-white/80 bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.18)] ring-8 ring-sky-100/80 dark:border-slate-700 dark:bg-slate-800 dark:ring-slate-800/80 md:h-80 md:w-80">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200/20 via-transparent to-slate-200/10 dark:from-sky-400/20 dark:to-slate-900/20" />
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 320px, 420px"
        className="object-cover object-center"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

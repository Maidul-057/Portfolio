"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectImage({
  src,
  title,
  className = "aspect-video",
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 ${className}`}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={`${title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          role="img"
          aria-label={`${title} screenshot placeholder`}
          className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-6 text-center text-lg font-semibold text-slate-700 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:text-slate-100"
        >
          {title}
        </div>
      )}
    </div>
  );
}

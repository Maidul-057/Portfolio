import { portfolioConfig } from "@/config/portfolio";
import { publications } from "@/data/publications";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Publications() {
  if (!portfolioConfig.featureFlags.showPublications) {
    return null;
  }

  return (
    <section className="section-shell py-10 md:py-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Publications"
          title="Research and writing"
          description="This section remains hidden until publications are ready to showcase publicly."
        />

        {publications.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            Add publication entries to src/data/publications.ts to enable this section.
          </div>
        ) : (
          <div className="space-y-5">
            {publications.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_12px_30px_rgba(2,6,23,0.22)]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.venue}</p>
                  </div>
                  {item.date ? <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span> : null}
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    View publication
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

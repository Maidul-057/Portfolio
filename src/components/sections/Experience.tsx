import { portfolioConfig } from "@/config/portfolio";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  if (!portfolioConfig.featureFlags.showExperience) {
    return null;
  }

  return (
    <section className="section-shell py-10 md:py-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Career and work highlights"
          description="This section is intentionally hidden until you are ready to publish professional experience."
        />

        {experience.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            Add experience entries to src/data/experience.ts to enable this section.
          </div>
        ) : (
          <div className="space-y-5">
            {experience.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_12px_30px_rgba(2,6,23,0.22)]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { certifications } from "@/data/certifications";
import { portfolioConfig } from "@/config/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  if (!portfolioConfig.featureFlags.showCertifications) {
    return null;
  }

  return (
    <section id="certifications" className="section-shell py-10 md:py-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials and learning milestones"
          description="This section is ready for future certifications or course completions. Add entries in src/data/certifications.ts whenever you are ready."
        />

        {certifications.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-900/60">
            <p className="text-lg font-medium text-slate-700 dark:text-slate-200">No certifications added yet.</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Add your first certificate to the centralized certifications data file.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={`${cert.name}-${cert.organization}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_12px_30px_rgba(2,6,23,0.22)]"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{cert.organization}</p>
                {cert.issueDate ? (
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {cert.issueDate}
                  </p>
                ) : null}
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    View credential
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

import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell py-10 md:py-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Skills"
          title="Tools, tech, and problem-solving skills"
          description="A focused stack built around modern web development, software fundamentals, and working with real-world product workflows."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-250 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_34px_rgba(15,23,42,0.09)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_12px_30px_rgba(2,6,23,0.22)] dark:hover:border-slate-700 dark:hover:shadow-[0_16px_34px_rgba(2,6,23,0.32)]"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition-colors duration-150 hover:border-[#CCFF00] hover:bg-[#CCFF00]/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-[#CCFF00] dark:hover:bg-[#CCFF00]/10 dark:hover:text-lime-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

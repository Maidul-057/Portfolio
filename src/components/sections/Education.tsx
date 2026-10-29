import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EducationCard } from "@/components/ui/EducationCard";

export function Education() {
  return (
    <section id="education" className="section-shell py-10 md:py-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
        />

        <div className="space-y-5">
          {education.map((entry) => (
            <EducationCard key={entry.institution} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

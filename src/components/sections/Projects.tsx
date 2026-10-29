import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-10 md:py-16">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A selection of personal and academic projects built while exploring practical web development."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

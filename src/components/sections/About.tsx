import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell py-10 md:py-16">
      <div className="space-y-8">
        <SectionHeading eyebrow="About me" title="Turning Ideas into Web Applications" />

        <div className="max-w-4xl space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          <p>
            I&apos;m a Computer Science and Engineering student at Shahjalal University of Science and Technology
            (SUST), passionate about software development, problem-solving, and building practical web applications.
            I work with frontend technologies including HTML, CSS, JavaScript, and React.js, alongside backend
            technologies such as Node.js and Express.js. I also use C++ for programming, with Git, GitHub, and VS Code
            as part of my development workflow.
          </p>
          <p>
            I enjoy creating responsive, user-friendly web applications, exploring frontend and backend technologies,
            developing personal and academic projects, and strengthening my problem-solving skills.
          </p>
          <p>
            My goal is to grow as a Software Engineer and Full-Stack Web Developer, build scalable and efficient web
            applications, and collaborate with other developers on meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

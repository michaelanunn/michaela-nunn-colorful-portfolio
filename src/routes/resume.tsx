import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LINKEDIN } from "@/components/SiteFooter";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Michaela Nunn" },
      { name: "description", content: "Experience, education and skills of Michaela Nunn." },
      { property: "og:title", content: "Resume — Michaela Nunn" },
      { property: "og:description", content: "Experience, education and skills of Michaela Nunn." },
    ],
  }),
  component: Resume,
});

const RESUME_PDF = "/michaela-nunn-resume.pdf";

const experience = [
  {
    org: "Stantec",
    url: "https://www.linkedin.com/company/stantec",
    blurb: "Global engineering & design firm.",
    role: "Electrical Designer",
    dates: "2026—present",
    points: [
      "Produced electrical design drawings and calculations for building projects.",
      "Coordinated with engineers across disciplines to meet code and client requirements.",
    ],
  },
  {
    org: "ScaleHouse Systems",
    url: "https://scalehousesystems.com",
    blurb: "Compliance software for dental practices.",
    role: "Full-Stack Programmer · Washington, DC",
    dates: "2025—2026",
    points: [
      "Built a platform that helps dental teams create and maintain OSHA- and HIPAA-compliant documentation.",
      "Owned features end to end, from data model to interface.",
    ],
  },
];

const education = [
  { school: "Mississippi State University", detail: "Electrical Engineering coursework", dates: "2024—2025" },
  { school: "GMIS International School", detail: "IB Diploma · Bali, Indonesia", dates: "2020—2024" },
];

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

function LinkedInCard({ children, title, sub, href }: { children: React.ReactNode; title: string; sub: string; href: string }) {
  return (
    <HoverCard openDelay={150}>
      <HoverCardTrigger asChild>
        <a href={href} target="_blank" rel="noreferrer" className="link-soft">{children}</a>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 border-border bg-card text-sm">
        <div className="flex items-start gap-3">
          <Linkedin className="mt-0.5 h-4 w-4 text-primary" />
          <div>
            <p className="font-medium">{title}</p>
            <p className="text-muted-foreground">{sub}</p>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="mt-2 inline-block font-mono text-xs text-primary">view on LinkedIn ↗</a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function Section({ title, delay, children }: { title: string; delay: number; children: React.ReactNode }) {
  return (
    <section className="reveal mt-12" style={d(delay)}>
      <h2 className="mb-4 border-b border-border pb-2 text-sm text-sage">{title}</h2>
      {children}
    </section>
  );
}

function Resume() {
  return (
    <main>
      <div className="reveal flex flex-wrap items-baseline justify-between gap-3" style={d(100)}>
        <div>
          <h1 className="text-2xl font-semibold">
            <LinkedInCard href={LINKEDIN} title="Michaela Nunn" sub="Engineer & builder · Washington, DC">Michaela Nunn</LinkedInCard>
          </h1>
          <p className="text-muted-foreground">Engineer & builder · Washington, DC</p>
        </div>
        <div className="flex gap-4 font-mono text-xs">
          <a href={RESUME_PDF} download className="link-soft">download résumé ↓</a>
          <button onClick={() => window.print()} className="link-soft">print ↗</button>
        </div>
      </div>

      <Section title="Experience" delay={250}>
        <div className="space-y-8">
          {experience.map((e) => (
            <article key={e.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">
                  <LinkedInCard href={e.url} title={e.org} sub={e.blurb}>{e.org}</LinkedInCard>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{e.dates}</span>
              </div>
              <p className="text-sm text-muted-foreground">{e.role}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm marker:text-rose">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Selected projects" delay={400}>
        <p className="font-mono text-sm text-muted-foreground">
          Startup Sparta · Lexiconation · Pronia · SpeakStreak · Satellite · Pure Peptides DC · EEG Project
        </p>
      </Section>

      <Section title="Education" delay={500}>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">{e.school}</h3>
                <span className="font-mono text-xs text-muted-foreground">{e.dates}</span>
              </div>
              <p className="text-sm text-muted-foreground">{e.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills" delay={600}>
        <p className="text-sm">
          Full-stack web development, TypeScript, React, databases, product design, electrical design & drafting, building codes.
        </p>
      </Section>
    </main>
  );
}

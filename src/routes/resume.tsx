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
    org: "Stantec Inc.",
    url: "https://www.linkedin.com/company/stantec",
    blurb: "Global engineering & design firm.",
    role: "Electrical Designer · Washington, DC",
    dates: "2026—present",
    points: [
      "Produced electrical design drawings and calculations for building projects.",
      "Coordinated with engineers across disciplines to meet code and client requirements.",
    ],
  },
  {
    org: "ScaleHouse Systems Inc.",
    url: "https://scalehousesystems.com",
    blurb: "Compliance software for dental practices.",
    role: "Full-Stack Programmer · Washington, DC",
    dates: "2025—2026",
    points: [
      "Built a platform that helps dental teams create and maintain OSHA- and HIPAA-compliant documentation.",
      "Owned features end to end, from data model to interface.",
    ],
  },
  {
    org: "Kumon Institute of Education Co.",
    url: "https://www.linkedin.com/company/kumon",
    blurb: "Math & reading education.",
    role: "Math Tutor · Bali, Indonesia",
    dates: "Oct 2022—May 2023",
    points: ["Tutored students in math through the Kumon method."],
  },
];

const activities = [
  { name: "Social Media Creator — YouTube Channel & Discord Community", dates: "2024—present", note: "Built an audience of over 1,000 people and a Discord community." },
  { name: "Captain — Cryptocurrency Club", dates: "2024", note: "Mississippi State University" },
  { name: "Tutor — Python Programming Language", dates: "Jan—May 2026", note: "Independent tutor; taught Python programming to students one-on-one." },
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

      <Section title="TECHNICAL SKILLS" delay={180}>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Programming Languages:</span> C++, Typescript, Python</p>
          <p><span className="font-medium">Frameworks &amp; Tools:</span> LLMs, AI Agents, Langgraph, LangChain, MySQL, Windows, Linux/Unix, AWS, MATLAB</p>
          <p><span className="font-medium">Front-end:</span> HTML, CSS, React.JS, Next.js, Tailwind CSS</p>
          <p><span className="font-medium">Language:</span> English (Fluent, Native), Indonesian (Fluent), Spanish (Intermediate)</p>
        </div>
      </Section>

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
        <div className="space-y-6">
          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                <a href="https://startupsparta.com" target="_blank" rel="noreferrer" className="link-soft">StartupSparta.com</a>
                <span className="font-normal text-muted-foreground"> | AWS, Rust, Anchor, Solflare, Helius RPC, Next.js</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground">Jan 2026</span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm marker:text-rose">
              <li>Built full-stack Solana token launchpad for early-stage companies using bonding curve pricing mechanics.</li>
              <li>Successfully attracted over 300 users to the waitlist.</li>
            </ul>
          </article>

          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                <a href="https://speakstreak.app" target="_blank" rel="noreferrer" className="link-soft">SpeakStreak.app</a>
                <span className="font-normal text-muted-foreground"> | Next.js, Supabase, Web Audio API, Pitchfinder.js, NLP, Whisper API</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground">Nov 2025</span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm marker:text-rose">
              <li>Built an AI SaaS platform to analyze and improve speech quality, implementing Pitchfinder.js for real-time pitch detection, NLP pipelines for filler word identification, and acoustic models for scoring vocal patterns.</li>
              <li>Delivered actionable feedback across charisma, confidence, and speech rate metrics with celebrity voice-match functionality.</li>
            </ul>
          </article>

          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                <a href="https://pronia.app" target="_blank" rel="noreferrer" className="link-soft">Pronia.app</a>
                <span className="font-normal text-muted-foreground"> | Next.js, Supabase, TypeScript, REST APIs, Social Graph Architecture</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground">Aug 2025</span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm marker:text-rose">
              <li>Created a social media application connecting musicians, featuring AI-driven feedback for pianists.</li>
              <li>Achieved significant user engagement, with over 1,000 searches and 2,400+ unique visitors within the first week of launch.</li>
            </ul>
          </article>
        </div>
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

      <Section title="Activities" delay={550}>
        <div className="space-y-4">
          {activities.map((a) => (
            <div key={a.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">{a.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">{a.dates}</span>
              </div>
              <p className="text-sm text-muted-foreground">{a.note}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

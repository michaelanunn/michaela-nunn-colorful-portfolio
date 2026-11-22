import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michaela Nunn — engineer & builder" },
      { name: "description", content: "Michaela Nunn: electrical design and full-stack engineering, based in Washington, DC." },
      { property: "og:title", content: "Michaela Nunn — engineer & builder" },
      { property: "og:description", content: "Electrical design and full-stack engineering, based in Washington, DC." },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "ScaleHouse Systems", note: "OSHA & HIPAA compliance for dental teams" },
  { name: "Startup Sparta", note: "launchpad for verified startups" },
  { name: "Lexiconation", note: "word discovery & curated collections" },
  { name: "Pronia", note: "practice routines for musicians" },
  { name: "SpeakStreak", note: "daily voice practice" },
  { name: "Satellite", note: "real-time intelligence platform concept" },
  { name: "Pure Peptides DC", note: "online storefront" },
  { name: "EEG Project", note: "work in progress" },
];

function Index() {
  return (
    <main className="space-y-14">
      <section className="space-y-5">
        <p>
          I'm Michaela Nunn, an engineer and builder based in Washington, DC <span className="text-primary">✿</span>
        </p>
        <p className="text-muted-foreground">
          I've worked in electrical design at Stantec and as a full-stack programmer at ScaleHouse Systems.
          This site is where I keep the things I make, read, and think about.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-sage">Projects</h2>
        <ul className="divide-y divide-border">
          {projects.map((p) => (
            <li key={p.name} className="flex items-baseline justify-between gap-4 py-2.5">
              <span>{p.name}</span>
              <span className="text-right text-sm text-muted-foreground">{p.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-sage">Writing</h2>
        <p className="text-muted-foreground italic">
          Nothing here yet — see the <Link to="/blog" className="link-soft">blog</Link>.
        </p>
      </section>
    </main>
  );
}

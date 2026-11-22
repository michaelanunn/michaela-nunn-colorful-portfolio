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
  { name: "ScaleHouse Systems", note: "OSHA & HIPAA compliance for dental teams", url: "https://scalehousesystems.com" },
  { name: "Startup Sparta", note: "launchpad for verified startups", url: "https://startupsparta.com" },
  { name: "Lexiconation", note: "word discovery & curated collections", url: "https://lexiconation.app" },
  { name: "Pronia", note: "practice routines for musicians", url: "https://pronia.app" },
  { name: "SpeakStreak", note: "daily voice practice", url: "https://speakstreak.app" },
  { name: "Satellite", note: "real-time intelligence platform", url: "https://getsatellite.lol" },
  { name: "Pure Peptides DC", note: "online storefront", url: "https://purepeptidesdc.com" },
  { name: "EEG Project", note: "work in progress", url: "https://bci.michaelanunn.com" },
];

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

function Index() {
  return (
    <main className="space-y-14">
      <section className="space-y-4">
        <p className="reveal" style={d(100)}>
          I'm Michaela Nunn, an engineer and builder based in Washington, DC <span className="text-primary">✿</span>
        </p>
        <p className="reveal text-muted-foreground" style={d(200)}>
          I've worked in electrical design at Stantec and as a full-stack programmer at ScaleHouse Systems.
          This site is where I keep the things I make, read, and think about.
        </p>
      </section>

      <section>
        <h2 className="reveal mb-3 text-sm text-sage" style={d(300)}>Projects</h2>
        <ul className="font-mono text-sm">
          {projects.map((p, i) => (
            <li key={p.name} className="reveal" style={d(350 + i * 50)}>
              <a href={p.url} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between gap-4 py-1.5">
                <span className="group-hover:text-primary">{p.name}</span>
                <span className="text-right text-muted-foreground">{p.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="reveal" style={d(800)}>
        <h2 className="mb-3 text-sm text-sage">Writing</h2>
        <p className="font-mono text-sm text-muted-foreground">
          nothing yet — see the <Link to="/blog" className="link-soft">blog</Link>
        </p>
      </section>
    </main>
  );
}

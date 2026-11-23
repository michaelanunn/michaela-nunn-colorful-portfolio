import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

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


const d = (ms: number) => ({ animationDelay: `${ms}ms` });

function Index() {
  return (
    <main className="space-y-14">
      <section className="space-y-4">
        <p className="reveal" style={d(100)}>
          I'm Michaela Nunn, an engineer and builder based in Washington, DC <span className="text-primary">✿</span>
        </p>
        <p className="reveal text-muted-foreground" style={d(200)}>
          I've worked in electrical design at Stantec Inc. and as a full-stack programmer at ScaleHouse Systems Inc.
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

      <section>
        <h2 className="reveal mb-3 text-sm text-sage" style={d(800)}>Writing</h2>
        <ul className="font-mono text-sm">
          {posts.map((p, i) => (
            <li key={p.slug} className="reveal" style={d(850 + i * 50)}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex items-baseline justify-between gap-4 py-1.5">
                <span className="group-hover:text-primary">{p.title}</span>
                <span className="shrink-0 text-muted-foreground">{p.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

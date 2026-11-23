import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Michaela Nunn" },
      { name: "description", content: "Things Michaela Nunn has built." },
      { property: "og:title", content: "Projects — Michaela Nunn" },
      { property: "og:description", content: "Things Michaela Nunn has built." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <main className="md:-mx-16">
      <h1 className="reveal text-xl font-medium">Projects</h1>
      <p className="reveal mb-8 text-muted-foreground" style={{ animationDelay: "80ms" }}>A selection of things I have built.</p>
      <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex gap-4"
            style={{ animationDelay: `${150 + i * 60}ms` }}
          >
            <div className="aspect-[4/3] w-32 shrink-0 overflow-hidden rounded-md bg-muted">
              {p.img ? (
                <img src={p.img} alt={`${p.name} preview`} loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-2xl text-muted-foreground">✿</div>
              )}
            </div>
            <div>
              <h2 className="font-mono text-sm font-medium group-hover:text-primary">{p.name}</h2>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

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
    <main className="-mx-6 md:-mx-40">
      <h1 className="reveal text-xl font-medium">Projects</h1>
      <p className="reveal mb-8 text-muted-foreground" style={{ animationDelay: "80ms" }}>A selection of things I have built.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="reveal group flex gap-4 rounded-2xl border border-border bg-card p-3 transition hover:-translate-y-0.5 hover:border-rose"
            style={{ animationDelay: `${150 + i * 60}ms` }}
          >
            <div className="aspect-[4/3] w-36 shrink-0 overflow-hidden rounded-xl bg-blush">
              {p.img ? (
                <img src={p.img} alt={`${p.name} preview`} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              ) : (
                <div className="flex h-full items-center justify-center text-2xl text-primary">✿</div>
              )}
            </div>
            <div className="py-1">
              <h2 className="font-mono text-sm font-medium group-hover:text-primary">{p.name}</h2>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

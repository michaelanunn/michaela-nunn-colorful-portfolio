import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Michaela Nunn" },
      { name: "description", content: "Writing by Michaela Nunn." },
      { property: "og:title", content: "Blog — Michaela Nunn" },
      { property: "og:description", content: "Writing by Michaela Nunn." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const match = useMatchRoute();
  if (match({ to: "/blog/$slug", fuzzy: true })) return <Outlet />;
  return (
    <main>
      <h1 className="reveal mb-3 text-sm text-sage">Writing</h1>
      <ul className="font-mono text-sm">
        {posts.map((p, i) => (
          <li key={p.slug} className="reveal" style={{ animationDelay: `${100 + i * 50}ms` }}>
            <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex items-baseline justify-between gap-4 py-1.5">
              <span className="group-hover:text-primary">{p.title}</span>
              <span className="shrink-0 text-muted-foreground">{p.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

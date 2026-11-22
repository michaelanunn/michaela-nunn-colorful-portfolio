import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <main className="reveal">
      <h1 className="mb-3 text-sm text-sage">Blog</h1>
      <p className="font-mono text-sm text-muted-foreground">No posts yet. Check back soon ✿</p>
    </main>
  );
}

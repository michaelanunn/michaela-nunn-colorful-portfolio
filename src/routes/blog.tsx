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
    <main>
      <h1 className="mb-6 text-sm uppercase tracking-[0.2em] text-sage">Blog</h1>
      <p className="italic text-muted-foreground">No posts yet. Check back soon ✿</p>
    </main>
  );
}

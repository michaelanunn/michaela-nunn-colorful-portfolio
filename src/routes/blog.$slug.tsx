import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Michaela Nunn` },
          { name: "description", content: loaderData.body[0]?.slice(0, 150) ?? "" },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.body[0]?.slice(0, 150) ?? "" },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Unavailable — Michaela Nunn" }, { name: "robots", content: "noindex" }],
  }),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <article>
      <Link to="/blog" className="reveal font-mono text-xs text-muted-foreground hover:text-primary">← writing</Link>
      <h1 className="reveal mt-6 text-xl font-medium" style={{ animationDelay: "100ms" }}>{post.title}</h1>
      <p className="reveal mt-1 font-mono text-xs text-muted-foreground" style={{ animationDelay: "150ms" }}>{post.date}</p>
      <div className="mt-8 space-y-5">
        {post.body.map((para, i) => (
          <p key={i} className="reveal" style={{ animationDelay: `${250 + i * 100}ms` }}>{para}</p>
        ))}
      </div>
    </article>
  );
}

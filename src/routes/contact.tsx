import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Michaela Nunn" },
      { name: "description", content: "Get in touch with Michaela Nunn." },
      { property: "og:title", content: "Contact — Michaela Nunn" },
      { property: "og:description", content: "Get in touch with Michaela Nunn." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="space-y-5">
      <h1 className="text-sm uppercase tracking-[0.2em] text-sage">Contact</h1>
      <p>I'd love to hear from you — about a project, a book, or anything at all.</p>
      <p>
        <a href="mailto:hello@michaelanunn.com" className="link-soft">hello@michaelanunn.com</a>
      </p>
      <p className="text-muted-foreground">Washington, DC</p>
    </main>
  );
}
